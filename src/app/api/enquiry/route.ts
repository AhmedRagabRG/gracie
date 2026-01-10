import { NextRequest, NextResponse } from "next/server";
import type { EnquiryPayload } from "@/types/enquiry";

/**
 * RATE LIMITING NOTE:
 * For production, implement proper rate limiting using:
 * - Redis (with Upstash or similar)
 * - Vercel Edge Config
 * - Or a middleware-based rate limiter
 * 
 * Basic rate limiting strategy:
 * - Limit to 5 submissions per IP per hour
 * - Track submission timestamps in memory/Redis
 * - Return 429 status for rate-limited requests
 */

// Simple in-memory rate limiting (for demonstration)
// NOTE: This will reset on serverless function cold starts
const submissionTracker = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const oneHourAgo = now - 60 * 60 * 1000;
  
  const submissions = submissionTracker.get(ip) || [];
  const recentSubmissions = submissions.filter(time => time > oneHourAgo);
  
  submissionTracker.set(ip, recentSubmissions);
  
  return recentSubmissions.length >= 5; // Max 5 submissions per hour
}

function trackSubmission(ip: string): void {
  const now = Date.now();
  const submissions = submissionTracker.get(ip) || [];
  submissions.push(now);
  submissionTracker.set(ip, submissions);
}

export async function POST(request: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip = request.headers.get("x-forwarded-for") || 
               request.headers.get("x-real-ip") || 
               "unknown";

    // Check rate limiting
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { name, phone, email, suburb, service_type, message } = body;

    // Validate required fields
    if (!name || !phone || !email || !suburb || !service_type || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Get webhook URL from environment
    const webhookUrl = 'https://n8n.exabytex.com/webhook/688ad407-839d-4e9b-bcfe-c8c1df51a46f';

    if (!webhookUrl) {
      console.error("TODOIST_WEBHOOK_URL not configured");
      return NextResponse.json(
        { error: "Server configuration error. Please contact us directly." },
        { status: 500 }
      );
    }

    // Prepare payload for Todoist webhook
    const payload: EnquiryPayload = {
      name,
      phone,
      email,
      suburb,
      service_type,
      message,
      source: "website",
      page: "landing",
      timestamp: new Date().toISOString(),
    };

    // Send to Todoist webhook
    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!webhookResponse.ok) {
      console.error("Webhook failed:", await webhookResponse.text());
      throw new Error("Failed to process enquiry");
    }

    // Track successful submission
    trackSubmission(ip);

    return NextResponse.json(
      { success: true, message: "Enquiry submitted successfully" },
      { status: 200 }
    );

  } catch (error) {
    console.error("Enquiry submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit enquiry. Please try contacting us directly." },
      { status: 500 }
    );
  }
}

// Return 405 for non-POST requests
export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405 }
  );
}

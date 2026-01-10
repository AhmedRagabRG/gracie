import { NextResponse } from "next/server";

// Types
interface LeadTimeItem {
  service: string;
  leadTime: string;
  available: boolean;
}

// Fallback data (used if Google Sheets fails or is not configured)
const FALLBACK_DATA: LeadTimeItem[] = [
  {
    service: "Service & Repairs",
    leadTime: "3–4 weeks",
    available: true,
  },
  {
    service: "System Installations",
    leadTime: "Not currently taking bookings",
    available: false,
  },
  {
    service: "Diagnostics & Assessments",
    leadTime: "1–2 weeks",
    available: true,
  },
  {
    service: "Maintenance Contracts",
    leadTime: "Available now",
    available: true,
  },
];

/**
 * Fetches lead times from Google Sheets
 * No caching - always fetches fresh data
 */
async function fetchFromGoogleSheets(): Promise<LeadTimeItem[]> {
  const apiKey = process.env.GOOGLE_SHEETS_API_KEY;
  const sheetId = process.env.GOOGLE_SHEET_ID;
  const sheetName = process.env.GOOGLE_SHEET_NAME || "Lead Times";

  // If Google Sheets is not configured, return fallback
  if (!apiKey || !sheetId) {
    console.log("Google Sheets not configured, using fallback data");
    return FALLBACK_DATA;
  }

  try {
    // Google Sheets API v4 URL
    const range = `${sheetName}!A2:C100`; // Read from row 2 onwards (skip header)
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;

    const response = await fetch(url, {
      cache: "no-store", // No caching - always fetch fresh data
    });

    if (!response.ok) {
      throw new Error(`Google Sheets API error: ${response.status}`);
    }

    const data = await response.json();
    const rows = data.values || [];

    // Transform rows into LeadTimeItem objects
    const leadTimes: LeadTimeItem[] = rows
      .filter((row: string[]) => row[0] && row[1]) // Must have service and lead time
      .map((row: string[]) => ({
        service: row[0].trim(),
        leadTime: row[1].trim(),
        available: row[2]?.toLowerCase().trim() !== "no" && row[2]?.toLowerCase().trim() !== "false",
      }));

    console.log(`Fetched ${leadTimes.length} lead times from Google Sheets`);
    return leadTimes.length > 0 ? leadTimes : FALLBACK_DATA;
  } catch (error) {
    console.error("Error fetching from Google Sheets:", error);
    return FALLBACK_DATA;
  }
}

/**
 * GET /api/lead-times
 * Returns current lead times - always fresh from Google Sheets (no cache)
 */
export async function GET() {
  try {
    // Always fetch fresh data - no caching
    const leadTimes = await fetchFromGoogleSheets();

    return NextResponse.json({
      success: true,
      data: leadTimes,
      cached: false,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error in lead-times API:", error);
    
    // Return fallback on error
    return NextResponse.json({
      success: true,
      data: FALLBACK_DATA,
      error: "Using fallback data",
      cached: false,
    });
  }
}

// Disable Next.js route caching
export const dynamic = 'force-dynamic';
export const revalidate = 0;

/**
 * POST /api/lead-times
 * Kept for compatibility but not needed since we don't cache anymore
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    if (body.refresh) {
      // Just fetch fresh data (no cache to clear)
      const leadTimes = await fetchFromGoogleSheets();

      return NextResponse.json({
        success: true,
        message: "Fresh data fetched",
        data: leadTimes,
      });
    }

    return NextResponse.json({
      success: false,
      error: "Invalid request",
    }, { status: 400 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: "Failed to fetch data",
    }, { status: 500 });
  }
}

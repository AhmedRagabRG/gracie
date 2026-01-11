import { NextResponse } from "next/server";

// Types
interface ContactInfo {
  phone: string;
  sms: string;
  email: string;
  facebook: string;
  businessName: string;
  serviceArea: string;
  businessHours: string;
  abn: string;
  heroBadge: string;
  heroHeadline: string;
  heroTagline: string;
  heroSubheadline: string;
  heroBackgroundImage: string;
}

// Fallback data (used if Google Sheets fails or is not configured)
const FALLBACK_DATA: ContactInfo = {
  phone: "+61 481 613 577",
  sms: "+61 481 613 577",
  email: "admin@graciereticulation.com.au",
  facebook: "https://www.facebook.com/graciereticulationservices/",
  businessName: "Gracie Reticulation",
  serviceArea: "Based in Carramar, servicing the northern suburbs of Perth.",
  businessHours: "Mon–Fri: 8am–6pm | Saturday: By appointment",
  abn: "39 251 002 244",
  heroBadge: "Perth's Irrigation Experts",
  heroHeadline: "Irrigation Systems",
  heroTagline: "Engineered, Not Guessed.",
  heroSubheadline: "Father–son team delivering precision diagnostics and water-efficient solutions. Based in Carramar, servicing the northern suburbs of Perth.",
  heroBackgroundImage: "/images/website_images/1.jpg", // Default local image
};

/**
 * Fetches contact info from Google Sheets
 * No caching - always fetches fresh data
 */
async function fetchFromGoogleSheets(): Promise<ContactInfo> {
  const apiKey = process.env.GOOGLE_SHEETS_API_KEY;
  const sheetId = process.env.GOOGLE_SHEET_ID;
  const sheetName = process.env.GOOGLE_SHEET_NAME || "Website";

  // If Google Sheets is not configured, return fallback
  if (!apiKey || !sheetId) {
    console.log("Google Sheets not configured, using fallback contact data");
    return FALLBACK_DATA;
  }

  try {
    // Fetch from "Contact Info" range
    // Supports two formats:
    // Format 1 (Key-Value pairs):
    //   A1: Phone | B1: +61 481 613 577
    //   A2: Email | B2: admin@graciereticulation.com.au
    // Format 2 (Table with headers):
    //   A1: Phone | B1: Email | C1: Facebook | ...
    //   A2: +61... | B2: admin@... | C2: https://... | ...
    
    const range = `Contact!A1:Z10`; // Read more columns to support table format
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;

    const response = await fetch(url, {
      cache: "no-store", // No caching - always fetch fresh data
    });

    if (!response.ok) {
      throw new Error(`Google Sheets API error: ${response.status}`);
    }

    const data = await response.json();
    const rows = data.values || [];

    if (rows.length === 0) {
      throw new Error("No data found in Contact sheet");
    }

    // Parse rows into contact info object
    const contactInfo: Partial<ContactInfo> = {};
    
    // Check if it's table format (headers in first row, values in second)
    const firstRow = rows[0] || [];
    const isTableFormat = firstRow.length > 2; // More than 2 columns = likely table format
    
    if (isTableFormat && rows.length >= 2) {
      // Table format: headers in row 1, values in row 2
      const headers = rows[0];
      const values = rows[1];
      
      headers.forEach((header: string, index: number) => {
        const key = header?.toLowerCase().trim();
        const value = values[index]?.trim();
        
        if (!key || !value) return;
        
        // Add + prefix for phone if missing
        let processedValue = value;
        if (key.includes('phone') && !value.startsWith('+')) {
          processedValue = `+${value}`;
        }
        
        if (key.includes('sms')) contactInfo.sms = processedValue;
        else if (key.includes('phone')) contactInfo.phone = processedValue;
        else if (key.includes('email')) contactInfo.email = value;
        else if (key.includes('facebook')) contactInfo.facebook = value;
        else if (key.includes('business name') || key === 'business') contactInfo.businessName = value;
        else if (key.includes('service area') || key.includes('area')) contactInfo.serviceArea = value;
        else if (key.includes('business hours') || key.includes('hours')) contactInfo.businessHours = value;
        else if (key.includes('abn')) contactInfo.abn = value;
        else if (key.includes('hero badge') || key.includes('badge')) contactInfo.heroBadge = value;
        else if (key.includes('hero subheadline') || key.includes('subheadline')) contactInfo.heroSubheadline = value; // Must check subheadline BEFORE headline
        else if (key.includes('hero headline') || key.includes('headline')) contactInfo.heroHeadline = value;
        else if (key.includes('hero tagline') || key.includes('tagline')) contactInfo.heroTagline = value;
        else if (key.includes('hero background') || key.includes('hero image') || key.includes('background image')) contactInfo.heroBackgroundImage = value;
      });
    } else {
      // Key-Value format: each row is key | value
      rows.forEach((row: string[]) => {
        const key = row[0]?.toLowerCase().trim();
        const value = row[1]?.trim();
        
        if (!key || !value) return;
        
        // Add + prefix for phone if missing
        let processedValue = value;
        if (key.includes('phone') && !value.startsWith('+')) {
          processedValue = `+${value}`;
        }
        
        if (key.includes('sms')) contactInfo.sms = processedValue;
        else if (key.includes('phone')) contactInfo.phone = processedValue;
        else if (key.includes('email')) contactInfo.email = value;
        else if (key.includes('facebook')) contactInfo.facebook = value;
        else if (key.includes('business name')) contactInfo.businessName = value;
        else if (key.includes('service area')) contactInfo.serviceArea = value;
        else if (key.includes('business hours') || key.includes('hours')) contactInfo.businessHours = value;
        else if (key.includes('abn')) contactInfo.abn = value;
        else if (key.includes('hero badge') || key.includes('badge')) contactInfo.heroBadge = value;
        else if (key.includes('hero subheadline') || key.includes('subheadline')) contactInfo.heroSubheadline = value; // Must check subheadline BEFORE headline
        else if (key.includes('hero headline') || key.includes('headline')) contactInfo.heroHeadline = value;
        else if (key.includes('hero tagline') || key.includes('tagline')) contactInfo.heroTagline = value;
        else if (key.includes('hero background') || key.includes('hero image') || key.includes('background image')) contactInfo.heroBackgroundImage = value;
      });
    }

    // Merge with fallback for any missing values
    const result: ContactInfo = {
      phone: contactInfo.phone || FALLBACK_DATA.phone,
      sms: contactInfo.sms || contactInfo.phone || FALLBACK_DATA.sms, // Use phone if SMS not specified
      email: contactInfo.email || FALLBACK_DATA.email,
      facebook: contactInfo.facebook || FALLBACK_DATA.facebook,
      businessName: contactInfo.businessName || FALLBACK_DATA.businessName,
      serviceArea: contactInfo.serviceArea || FALLBACK_DATA.serviceArea,
      businessHours: contactInfo.businessHours || FALLBACK_DATA.businessHours,
      abn: contactInfo.abn || FALLBACK_DATA.abn,
      heroBadge: contactInfo.heroBadge || FALLBACK_DATA.heroBadge,
      heroHeadline: contactInfo.heroHeadline || FALLBACK_DATA.heroHeadline,
      heroTagline: contactInfo.heroTagline || FALLBACK_DATA.heroTagline,
      heroSubheadline: contactInfo.heroSubheadline || FALLBACK_DATA.heroSubheadline,
      heroBackgroundImage: contactInfo.heroBackgroundImage || FALLBACK_DATA.heroBackgroundImage,
    };

    console.log("Fetched contact info from Google Sheets:");
    console.log("- heroHeadline:", result.heroHeadline);
    console.log("- heroSubheadline:", result.heroSubheadline);
    return result;
  } catch (error) {
    console.error("Error fetching contact info from Google Sheets:", error);
    return FALLBACK_DATA;
  }
}

/**
 * GET /api/contact-info
 * Returns current contact info - always fresh from Google Sheets (no cache)
 */
export async function GET() {
  try {
    // Always fetch fresh data - no caching
    const contactInfo = await fetchFromGoogleSheets();

    return NextResponse.json({
      success: true,
      data: contactInfo,
      cached: false,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error in contact-info API:", error);
    
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

// Lead Time & Availability Configuration
// Update these values as your availability changes

export interface LeadTimeItem {
  service: string;
  leadTime: string;
  available: boolean;
  icon?: string;
}

export const LEAD_TIMES: LeadTimeItem[] = [
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

// Show/hide the availability banner
export const SHOW_AVAILABILITY_BANNER = true;

// Availability notice for enquiry form
export const AVAILABILITY_NOTICE = "Current lead times apply. We'll confirm availability when we contact you.";

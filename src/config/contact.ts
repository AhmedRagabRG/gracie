import { ContactInfo } from "@/types/enquiry";

// GRACIE RETICULATION — Actual Business Details
export const CONTACT_INFO: ContactInfo = {
  phone: "+61 481 613 577",
  sms: "+61 481 613 577", // Can be different number for SMS
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
  heroBackgroundImage: "/images/website_images/1.jpg",
};

export const SERVICE_TYPES = [
  { value: "repairs-diagnostics", label: "Repairs & Diagnostics" },
  { value: "leak-detection", label: "Leak Detection & Repairs" },
  { value: "controller-replacement", label: "Controller Replacement" },
  { value: "system-upgrades", label: "System Upgrades" },
  { value: "new-installation", label: "New Installation" },
  { value: "property-maintenance", label: "Property Maintenance" },
  { value: "other", label: "Other / General Enquiry" },
];

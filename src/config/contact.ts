import { ContactInfo } from "@/types/enquiry";

// GRACIE RETICULATION — Actual Business Details
export const CONTACT_INFO: ContactInfo = {
  phone: "+61 481 613 577",
  email: "admin@graciereticulation.com.au",
  facebook: "https://www.facebook.com/graciereticulationservices/",
  businessName: "Gracie Reticulation",
  serviceArea: "Based in Carramar, servicing the northern suburbs of Perth.",
  businessHours: "Mon–Fri: 8am–6pm | Saturday: By appointment",
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

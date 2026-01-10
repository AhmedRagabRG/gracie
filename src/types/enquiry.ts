export interface EnquiryFormData {
  name: string;
  phone: string;
  email: string;
  suburb: string;
  service_type: string;
  message: string;
}

export interface EnquiryPayload extends EnquiryFormData {
  source: string;
  page: string;
  timestamp: string;
}

export type ServiceType =
  | "repairs-diagnostics"
  | "leak-detection"
  | "controller-replacement"
  | "system-upgrades"
  | "new-installation"
  | "property-maintenance"
  | "other";

export interface ContactInfo {
  phone: string;
  email: string;
  facebook: string;
  businessName: string;
  serviceArea: string;
  businessHours: string;
}

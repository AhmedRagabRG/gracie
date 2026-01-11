"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { CONTACT_INFO } from "@/config/contact";

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

interface DataContextType {
  contactInfo: ContactInfo;
  loading: boolean;
  error: string | null;
}

const DataContext = createContext<DataContextType>({
  contactInfo: CONTACT_INFO,
  loading: true,
  error: null,
});

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within DataProvider");
  }
  return context;
}

interface DataProviderProps {
  children: ReactNode;
}

export function DataProvider({ children }: DataProviderProps) {
  const [contactInfo, setContactInfo] = useState<ContactInfo>(CONTACT_INFO);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch contact info
        const response = await fetch(`/api/contact-info?t=${Date.now()}`, {
          cache: "no-store",
        });
        
        const result = await response.json();
        
        if (result.success && result.data) {
          setContactInfo(result.data);
        } else {
          // Use fallback from config
          setContactInfo(CONTACT_INFO);
        }
      } catch (err) {
        console.error("Failed to fetch data:", err);
        setError(err instanceof Error ? err.message : "Failed to load data");
        // Use fallback from config
        setContactInfo(CONTACT_INFO);
      } finally {
        // Add minimum loading time of 500ms for smooth UX
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    }

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ contactInfo, loading, error }}>
      {children}
    </DataContext.Provider>
  );
}

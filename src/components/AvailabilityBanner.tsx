"use client";

import React, { useEffect, useState } from "react";
import { SHOW_AVAILABILITY_BANNER } from "@/config/availability";

interface LeadTimeItem {
  service: string;
  leadTime: string;
  available: boolean;
}

export function AvailabilityBanner() {
  const [leadTimes, setLeadTimes] = useState<LeadTimeItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  useEffect(() => {
    async function fetchLeadTimes() {
      try {
        // Add timestamp to prevent browser caching
        const response = await fetch(`/api/lead-times?t=${Date.now()}`, {
          cache: "no-store", // Don't cache in browser
        });
        const result = await response.json();
        
        if (result.success && result.data) {
          setLeadTimes(result.data);
          setLastUpdate(new Date());
        }
      } catch (error) {
        console.error("Failed to fetch lead times:", error);
      } finally {
        setLoading(false);
      }
    }

    // Initial fetch
    fetchLeadTimes();

    // Auto-refresh every 10 seconds for near real-time updates
    const interval = setInterval(fetchLeadTimes, 10000);

    return () => clearInterval(interval);
  }, []);

  if (!SHOW_AVAILABILITY_BANNER) return null;
  if (loading) {
    return (
      <section className="py-12 bg-neutral-50 border-y border-neutral-200">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center text-neutral-500">
            Loading availability...
          </div>
        </div>
      </section>
    );
  }
  if (leadTimes.length === 0) return null;

  return (
    <section className="py-12 bg-neutral-50 border-y border-neutral-200">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-mono">
              Current Availability
            </span>
            <h3 className="text-2xl lg:text-3xl font-light text-neutral-900 mt-2">
              Lead Times
            </h3>
            <p className="text-sm text-neutral-600 mt-2">
              Updated regularly to help you plan ahead
            </p>
          </div>

          {/* Lead Times Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {leadTimes.map((item, index) => (
              <div
                key={index}
                className={`p-5 rounded-sm border transition-all ${
                  item.available
                    ? "bg-white border-neutral-200 hover:border-brand"
                    : "bg-neutral-100 border-neutral-300"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="font-medium text-neutral-900 mb-1">
                      {item.service}
                    </h4>
                    <p
                      className={`text-sm ${
                        item.available ? "text-brand" : "text-neutral-600"
                      }`}
                    >
                      {item.leadTime}
                    </p>
                  </div>
                  
                  {/* Status Indicator */}
                  <div
                    className={`flex-shrink-0 w-3 h-3 rounded-full ${
                      item.available ? "bg-brand" : "bg-neutral-400"
                    }`}
                    title={item.available ? "Available" : "Not available"}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-6 text-center">
            <p className="text-xs text-neutral-500 italic">
              Ongoing clients and urgent issues prioritised where possible.
            </p>
            <p className="text-xs text-neutral-400 mt-2">
              Last updated: {lastUpdate.toLocaleTimeString()} • Live updates every 10 seconds
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

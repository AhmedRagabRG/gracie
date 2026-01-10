"use client";

import React from "react";
import Image from "next/image";
import { useContactInfo } from "@/hooks/useContactInfo";

export function Preloader() {
  const { contactInfo } = useContactInfo();

  return (
    <div className="fixed inset-0 z-[100] bg-white flex items-center justify-center">
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8">
          <div className="relative w-32 h-32 mx-auto">
            <Image
              src="/images/logo.png"
              alt={contactInfo.businessName}
              fill
              className="object-contain animate-pulse"
              priority
            />
          </div>
        </div>

        {/* Business Name */}
        <h1 className="text-2xl font-semibold text-neutral-900 mb-2">
          {contactInfo.businessName}
        </h1>
        <p className="text-sm text-neutral-600 mb-8">
          Perth Irrigation Specialists
        </p>

        {/* Animated Loading Bar */}
        <div className="w-64 h-1 bg-neutral-200 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-brand rounded-full loading-bar-animation" />
        </div>

        {/* Loading Text */}
        <p className="text-xs text-neutral-500 mt-4">
          Loading latest information...
        </p>
      </div>
    </div>
  );
}

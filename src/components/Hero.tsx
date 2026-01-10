"use client";

import React from "react";
import Image from "next/image";
import { CONTACT_INFO } from "@/config/contact";

export function Hero() {
  const scrollToForm = () => {
    const formSection = document.getElementById("enquiry-form");
    formSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-neutral-50">
      {/* Logo Overlay */}
      <div className="absolute top-8 left-6 lg:left-12 z-20">
        <Image
          src="/images/logo.png"
          alt="Perth Reticulation Logo"
          width={120}
          height={120}
          className="rounded-sm shadow-md"
        />
      </div>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/lawn_irrigation.jpg"
          alt="Professional irrigation background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-50/98 via-neutral-50/95 to-neutral-50/85" />
      </div>

      {/* Subtle Grid Background (Precision/Diagnostics) */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(var(--neutral-300) 1px, transparent 1px),
                           linear-gradient(90deg, var(--neutral-300) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Water Flow Gradient Accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-10 blur-3xl">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 30% 30%, var(--water-light), transparent 70%)`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          {/* Left: Asymmetric Hero Copy */}
          <div className="space-y-6 animate-fadeInUp">
            <div className="space-y-2">
              <div className="inline-block">
                <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-mono">
                  Perth — North of River
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-light leading-[1.1] text-neutral-900">
                Irrigation systems{" "}
                <span className="block mt-2 font-normal text-water">
                  engineered, not guessed.
                </span>
              </h1>
            </div>

            <p className="text-lg lg:text-xl text-neutral-600 max-w-xl leading-relaxed">
              Father–son team. Precision diagnostics. Water-efficient repairs.
              We understand your system first, then fix it properly.
            </p>

            {/* Primary CTA */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={scrollToForm}
                className="magnetic-btn ripple-effect px-8 py-4 bg-water text-white rounded-sm font-medium text-base hover:bg-water-dark focus:outline-none focus:ring-2 focus:ring-water focus:ring-offset-2"
              >
                Request a Callback
              </button>

              {/* Secondary CTAs */}
              <div className="flex gap-3">
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                  className="px-6 py-4 border border-neutral-300 text-neutral-700 rounded-sm font-medium text-base hover:border-water hover:text-water transition-colors"
                  aria-label="Call us"
                >
                  Call
                </a>
                <a
                  href={`sms:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                  className="px-6 py-4 border border-neutral-300 text-neutral-700 rounded-sm font-medium text-base hover:border-water hover:text-water transition-colors"
                  aria-label="Send SMS"
                >
                  SMS
                </a>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="px-6 py-4 border border-neutral-300 text-neutral-700 rounded-sm font-medium text-base hover:border-water hover:text-water transition-colors"
                  aria-label="Email us"
                >
                  Email
                </a>
              </div>
            </div>
          </div>

          {/* Right: Diagnostic Card Module (Asymmetric Element) */}
          <div className="relative">
            <div className="bg-white border border-neutral-200 p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300">
              {/* Header Bar */}
              <div className="flex items-center gap-2 pb-4 border-b border-neutral-200">
                <div className="w-2 h-2 rounded-full bg-water animate-pulse" />
                <span className="text-xs uppercase tracking-wider text-neutral-500 font-mono">
                  System Status
                </span>
              </div>

              {/* Diagnostic Info */}
              <div className="space-y-4 mt-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-neutral-600">Service Area</span>
                  <span className="text-sm font-medium text-neutral-900">
                    {CONTACT_INFO.serviceArea}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-neutral-600">Response Time</span>
                  <span className="text-sm font-medium text-neutral-900">Same/Next Day</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-neutral-600">Water Efficiency</span>
                  <span className="text-sm font-medium text-water">Optimised</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-neutral-600">Available</span>
                  <span className="text-sm font-medium text-success">Now</span>
                </div>
              </div>

              {/* Contact Line */}
              <div className="mt-6 pt-6 border-t border-neutral-200">
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                  className="text-2xl font-light text-neutral-900 hover:text-water transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>

            {/* Decorative Water Flow Line */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 opacity-20 pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                  d="M 10 50 Q 30 20 50 50 T 90 50"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  fill="none"
                  className="text-water"
                />
                <path
                  d="M 10 60 Q 30 30 50 60 T 90 60"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  fill="none"
                  className="text-water"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

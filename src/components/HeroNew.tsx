"use client";

import React from "react";
import Image from "next/image";
import { useContactInfo } from "@/hooks/useContactInfo";

export function HeroNew() {
  const { contactInfo } = useContactInfo();
  
  const scrollToForm = () => {
    const formSection = document.getElementById("enquiry-form");
    formSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={contactInfo.heroBackgroundImage}
          alt="Professional irrigation background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/95 via-neutral-900/85 to-neutral-900/65" />
        
        {/* Decorative water ripple overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-water rounded-full blur-3xl" />
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-32 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand/20 backdrop-blur-sm border border-brand/30 rounded-full mb-8">
            <div className="w-2 h-2 rounded-full bg-brand animate-pulse" />
            <span className="text-xs uppercase tracking-wider text-white font-medium">
              {contactInfo.heroBadge}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-white mb-6">
            {contactInfo.heroHeadline}
            <span className="block mt-2 text-water font-normal">
              {contactInfo.heroTagline}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-2xl leading-relaxed">
            {contactInfo.heroSubheadline}
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-6 mb-10 pb-10 border-b border-white/10">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-brand"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm text-neutral-300">Licensed & Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-brand"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm text-neutral-300">Fully Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-brand"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm text-neutral-300">Qualified tradies</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-brand"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm text-neutral-300">15+ Years Experience</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToForm}
              className="group relative px-8 py-4 bg-brand text-white rounded-sm font-medium text-lg overflow-hidden transition-all hover:bg-brand-dark hover:shadow-xl hover:shadow-brand/25"
            >
              <span className="relative z-10">Make an Enquiry</span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand to-brand-dark opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            <a
              href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
              className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-sm font-medium text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-3"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>{contactInfo.phone}</span>
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-8 mt-16 pt-12 border-t border-white/10">
            <div>
              <div className="text-3xl md:text-4xl font-light text-white mb-1">1,700+</div>
              <div className="text-sm text-neutral-400">Jobs Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-light text-white mb-1">15+</div>
              <div className="text-sm text-neutral-400">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-white/60 uppercase tracking-wider">Scroll</span>
          <svg
            className="w-6 h-6 text-white/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

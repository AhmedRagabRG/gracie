"use client";

import React from "react";
import { useContactInfo } from "@/hooks/useContactInfo";

export function ContactOptions() {
  const { contactInfo } = useContactInfo();
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white via-water-muted to-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-mono">
              Get In Touch
            </span>
            <h2 className="text-4xl lg:text-5xl font-light text-neutral-900 mt-4">
              Contact Us
            </h2>
          </div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Phone */}
            <a
              href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
              className="group bg-white border border-neutral-200 p-8 rounded-sm hover:border-brand transition-all duration-300 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 bg-brand-muted rounded-sm flex items-center justify-center group-hover:bg-brand transition-colors">
                  <svg
                    className="w-6 h-6 text-brand group-hover:text-white"
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
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-neutral-500 mb-2">
                    Phone
                  </h3>
                  <p className="text-2xl font-light text-neutral-900 group-hover:text-brand transition-colors">
                    {contactInfo.phone}
                  </p>
                </div>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${contactInfo.email}`}
              className="group bg-white border border-neutral-200 p-8 rounded-sm hover:border-brand transition-all duration-300 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 bg-brand-muted rounded-sm flex items-center justify-center group-hover:bg-brand transition-colors">
                  <svg
                    className="w-6 h-6 text-brand group-hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-neutral-500 mb-2">
                    Email
                  </h3>
                  <p className="text-lg font-light text-neutral-900 group-hover:text-water transition-colors break-all">
                    {contactInfo.email}
                  </p>
                </div>
              </div>
            </a>

            {/* SMS */}
            <a
              href={`sms:${contactInfo.sms.replace(/\s/g, "")}`}
              className="group bg-white border border-neutral-200 p-8 rounded-sm hover:border-brand transition-all duration-300 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 bg-brand-muted rounded-sm flex items-center justify-center group-hover:bg-brand transition-colors">
                  <svg
                    className="w-6 h-6 text-brand group-hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-neutral-500 mb-2">
                    SMS / Text
                  </h3>
                  <p className="text-2xl font-light text-neutral-900 group-hover:text-brand transition-colors">
                    {contactInfo.sms}
                  </p>
                </div>
              </div>
            </a>

            {/* Facebook */}
            <a
              href={contactInfo.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-neutral-200 p-8 rounded-sm hover:border-brand transition-all duration-300 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 bg-brand-muted rounded-sm flex items-center justify-center group-hover:bg-brand transition-colors">
                  <svg
                    className="w-6 h-6 text-brand group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-neutral-500 mb-2">
                    Facebook
                  </h3>
                  <p className="text-lg font-light text-neutral-900 group-hover:text-water transition-colors">
                    Message Us
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* Business Hours & Service Area */}
          <div className="bg-white border border-neutral-200 p-8 rounded-sm">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm uppercase tracking-wider text-neutral-500 mb-3">
                  Business Hours
                </h3>
                <p className="text-lg text-neutral-900 leading-relaxed">
                  {contactInfo.businessHours}
                </p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-neutral-500 mb-3">
                  Service Area
                </h3>
                <p className="text-lg text-neutral-900 leading-relaxed">
                  {contactInfo.serviceArea}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

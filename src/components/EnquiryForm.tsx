"use client";

import React, { useState, FormEvent } from "react";
import { SERVICE_TYPES } from "@/config/contact";
import type { EnquiryFormData } from "@/types/enquiry";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function EnquiryForm() {
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: "",
    phone: "",
    email: "",
    suburb: "",
    service_type: "",
    message: "",
  });

  // Honeypot field for spam protection (hidden from real users)
  const [honeypot, setHoneypot] = useState("");

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Client-side validation
  const validateForm = (): string | null => {
    if (!formData.name.trim()) return "Name is required";
    if (!formData.phone.trim()) return "Phone number is required";
    if (!formData.email.trim()) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return "Invalid email format";
    if (!formData.suburb.trim()) return "Suburb is required";
    if (!formData.service_type) return "Please select a service type";
    if (!formData.message.trim()) return "Message is required";
    return null;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Spam protection: If honeypot is filled, reject silently
    if (honeypot) {
      setStatus("success"); // Fake success to fool bots
      return;
    }

    // Validate form
    const validationError = validateForm();
    if (validationError) {
      setErrorMessage(validationError);
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit enquiry");
      }

      setStatus("success");
      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        suburb: "",
        service_type: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again."
      );
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="enquiry-form" className="py-24 bg-neutral-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-mono">
              Web Enquiry
            </span>
            <h2 className="text-4xl lg:text-5xl font-light text-neutral-900 mt-4 mb-4">
              Make an Enquiry
            </h2>
            <p className="text-lg text-neutral-600">
              Fill in the form below and we'll get back to you shortly.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                  Name <span className="text-water">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-water focus:border-transparent transition-all"
                  placeholder="Your full name"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                  Phone <span className="text-water">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-water focus:border-transparent transition-all"
                  placeholder="0400 000 000"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                  Email <span className="text-water">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-water focus:border-transparent transition-all"
                  placeholder="you@example.com"
                />
              </div>

              {/* Suburb */}
              <div>
                <label htmlFor="suburb" className="block text-sm font-medium text-neutral-700 mb-2">
                  Suburb <span className="text-water">*</span>
                </label>
                <input
                  type="text"
                  id="suburb"
                  name="suburb"
                  value={formData.suburb}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-water focus:border-transparent transition-all"
                  placeholder="e.g., Scarborough"
                />
              </div>
            </div>

            {/* Service Type */}
            <div>
              <label
                htmlFor="service_type"
                className="block text-sm font-medium text-neutral-700 mb-2"
              >
                Service Type <span className="text-water">*</span>
              </label>
              <select
                id="service_type"
                name="service_type"
                value={formData.service_type}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-water focus:border-transparent transition-all bg-white"
              >
                <option value="">Select a service...</option>
                {SERVICE_TYPES.map((service) => (
                  <option key={service.value} value={service.value}>
                    {service.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                Message <span className="text-water">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-water focus:border-transparent transition-all resize-vertical"
                placeholder="Tell us about your irrigation needs..."
              />
            </div>

            {/* Honeypot (hidden spam protection field) */}
            <input
              type="text"
              name="website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            {/* Error Message */}
            {status === "error" && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-sm">
                <p className="text-sm text-red-700">{errorMessage}</p>
              </div>
            )}

            {/* Success Message */}
            {status === "success" && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-sm">
                <p className="text-sm text-green-700">
                  ✓ Thank you! We'll be in touch shortly.
                </p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="magnetic-btn ripple-effect w-full md:w-auto px-12 py-4 bg-brand text-white rounded-sm font-medium text-base hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {status === "submitting" ? "Submitting..." : "Send Enquiry"}
            </button>

            {/* Privacy Note */}
            <p className="text-xs text-neutral-500 italic">
              By submitting this form, you agree to be contacted regarding your enquiry. We respect
              your privacy and will not share your information.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

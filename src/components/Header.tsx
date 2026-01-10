"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { useContactInfo } from "@/hooks/useContactInfo";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#who-we-are" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#showcase" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const { contactInfo } = useContactInfo();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Mobile drawer UX: lock background scroll + ESC to close
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToForm = () => {
    const formSection = document.getElementById("enquiry-form");
    formSection?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const Drawer = (
    <div className="xl:hidden fixed inset-0 z-[60]">
      {/* Backdrop */}
      <button
        type="button"
        className="absolute inset-0 bg-neutral-900/60 backdrop-blur-[2px] z-[60]"
        aria-label="Close menu"
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Panel */}
      <div className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-white shadow-2xl border-l border-neutral-200 z-[61] overflow-y-auto">
        <div className="p-5 border-b border-neutral-200 flex items-center justify-between bg-white">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt={contactInfo.businessName}
              width={44}
              height={44}
              className="rounded-sm"
              priority
            />
            <div>
              <div className="text-sm font-semibold text-neutral-900">{contactInfo.businessName}</div>
              <div className="text-xs text-neutral-600">Perth Irrigation Specialists</div>
            </div>
          </div>
          <button
            type="button"
            className="w-10 h-10 rounded-sm border border-neutral-200 hover:border-brand hover:text-brand transition-colors flex items-center justify-center"
            aria-label="Close menu"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <nav className="p-5 flex flex-col gap-2 bg-white">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="text-left w-full px-4 py-3 rounded-sm border border-neutral-200 hover:border-brand hover:bg-brand-muted transition-colors text-neutral-900 font-medium"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-5 border-t border-neutral-200 space-y-3 bg-white">
          <a
            href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
            className="block w-full text-center px-4 py-3 rounded-sm border border-neutral-200 hover:border-brand hover:text-brand transition-colors font-medium"
          >
            Call: {contactInfo.phone}
          </a>
          <a
            href={`mailto:${contactInfo.email}`}
            className="block w-full text-center px-4 py-3 rounded-sm border border-neutral-200 hover:border-water hover:text-water transition-colors font-medium"
          >
            Email
          </a>
          <a
            href={contactInfo.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-4 py-3 rounded-sm border border-neutral-200 hover:border-water hover:text-water transition-colors font-medium"
          >
            Facebook
          </a>
          <button
            onClick={scrollToForm}
            className="w-full px-4 py-3 bg-brand text-white rounded-sm text-base font-medium hover:bg-brand-dark transition-colors"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-gradient-to-b from-neutral-900/70 via-neutral-900/30 to-transparent backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className={`rounded-lg p-1.5 transition-all duration-300 ${
                  isScrolled 
                    ? "bg-white shadow-sm ring-1 ring-neutral-200" 
                    : "bg-white/95 backdrop-blur-sm shadow-lg"
                }`}>
                  <Image
                    src="/images/logo.png"
                    alt={contactInfo.businessName}
                    width={80}
                    height={80}
                    className="rounded-md"
                    priority
                  />
                </div>
                <div className="hidden md:block">
                  <div
                    className={`text-lg font-semibold transition-colors ${
                      isScrolled ? "text-neutral-900" : "text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]"
                    }`}
                  >
                    {contactInfo.businessName}
                  </div>
                  <div
                    className={`text-xs transition-colors ${
                      isScrolled ? "text-neutral-600" : "text-white/85 drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]"
                    }`}
                  >
                    Perth Irrigation Specialists
                  </div>
                </div>
              </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-colors ${
                  isScrolled
                    ? "text-neutral-700 hover:text-brand"
                    : "text-white/85 hover:text-brand"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
              className={`hidden xl:inline-flex text-sm font-medium transition-colors ${
                isScrolled
                  ? "text-neutral-700 hover:text-brand"
                  : "text-white/85 hover:text-brand"
              }`}
            >
              {contactInfo.phone}
            </a>
            <button
              onClick={scrollToForm}
              className={`magnetic-btn px-6 py-2.5 rounded-sm text-sm font-medium transition-colors ${
                isScrolled
                  ? "bg-brand text-white hover:bg-brand-dark"
                  : "bg-brand text-white hover:bg-brand-dark"
              }`}
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`h-0.5 transition-all ${
                  isScrolled ? "bg-neutral-900" : "bg-white"
                } ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`h-0.5 transition-all ${
                  isScrolled ? "bg-neutral-900" : "bg-white"
                } ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 transition-all ${
                  isScrolled ? "bg-neutral-900" : "bg-white"
                } ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
          </div>
        </div>
      </header>
      {mounted && isMobileMenuOpen ? createPortal(Drawer, document.body) : null}
    </>
  );
}

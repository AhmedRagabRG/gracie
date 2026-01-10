import React from "react";
import Image from "next/image";

const ENDORSEMENTS = [
  {
    name: "Irrigation Australia",
    logo: "/images/endorsement/Irrigation Australia Logo Sticky.png",
    width: 180,
    height: 80,
  },
  {
    name: "Waterwise Program",
    logo: "/images/endorsement/Waterwise.webp",
    width: 150,
    height: 80,
  },
];

export function Endorsements() {
  return (
    <section className="py-16 bg-white border-t border-b border-neutral-200">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-mono">
            Certified & Trusted
          </span>
          <h3 className="text-2xl font-light text-neutral-900 mt-2">
            Industry Accreditations
          </h3>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-16">
          {ENDORSEMENTS.map((endorsement, index) => (
            <div
              key={index}
              className="relative grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <Image
                src={endorsement.logo}
                alt={endorsement.name}
                width={endorsement.width}
                height={endorsement.height}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-12 border-t border-neutral-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-brand-muted rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-brand"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="text-sm font-medium text-neutral-900 mb-1">
                Fully Licensed
              </h4>
              <p className="text-xs text-neutral-600">
                Certified irrigation specialists
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-brand-muted rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-brand"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h4 className="text-sm font-medium text-neutral-900 mb-1">
                Fully Insured
              </h4>
              <p className="text-xs text-neutral-600">
                Complete liability coverage
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-brand-muted rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-brand"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="text-sm font-medium text-neutral-900 mb-1">
                Waterwise Approved
              </h4>
              <p className="text-xs text-neutral-600">
                Water-efficient solutions
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-brand-muted rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-brand"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h4 className="text-sm font-medium text-neutral-900 mb-1">
                Family Operated
              </h4>
              <p className="text-xs text-neutral-600">
                Father-son team since inception
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

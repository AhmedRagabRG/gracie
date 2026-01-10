"use client";

import React from "react";
import { ImageCarousel } from "./ImageCarousel";
import { GALLERY_IMAGES } from "@/data/gallery";

// Use first 5 images from gallery for showcase carousel
const SHOWCASE_IMAGES = GALLERY_IMAGES.slice(0, 5).map((img, index) => ({
  src: img.src,
  alt: img.alt,
  title: `Project ${index + 1}`,
}));

export function ProjectShowcase({ id }: { id?: string }) {
  return (
    <section id={id} className="py-24 bg-neutral-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Carousel */}
          <div className="relative h-[500px] lg:h-[600px]">
            <ImageCarousel images={SHOWCASE_IMAGES} autoPlayInterval={4000} />
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-mono">
                Project Showcase
              </span>
              <h2 className="text-4xl lg:text-5xl font-light text-neutral-900 mt-4 mb-6">
                Quality Work,<br />Proven Results
              </h2>
            </div>

            <p className="text-lg text-neutral-700 leading-relaxed">
              From residential properties to light commercial sites, we deliver precision
              irrigation solutions tailored to Perth's unique conditions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div>
                <div className="text-3xl font-light text-water mb-1">1,700+</div>
                <div className="text-sm text-neutral-600">Jobs Completed</div>
              </div>
              <div>
                <div className="text-3xl font-light text-water mb-1">15+</div>
                <div className="text-sm text-neutral-600">Years Experience</div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4 pt-6">
              {[
                "Friendly service and advice",
                "Water Corp leak allowance assistance",
                "Honest assessments and recommendations",
                "Warranty on all workmanship",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-water flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-neutral-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

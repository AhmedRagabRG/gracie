import React from "react";
import { ModernGallery } from "@/components/ModernGallery";
import { GALLERY_IMAGES, getTotalImages } from "@/data/gallery";

export function PhotoGallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-10 lg:mb-14">
          <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-mono">
            Our Work
          </span>
          <h2 className="text-4xl lg:text-5xl font-light text-neutral-900 mt-4">
            Recent Projects
          </h2>
          <p className="mt-4 text-neutral-600 max-w-2xl">
            Browse {getTotalImages()} real irrigation projects from across Perth — tap an image to preview, then open full-screen.
          </p>
        </div>

        {/* Modern Gallery (Hero image + thumbnails + lightbox) */}
        <ModernGallery images={GALLERY_IMAGES.map(({ src, alt }) => ({ src, alt }))} />
      </div>
    </section>
  );
}

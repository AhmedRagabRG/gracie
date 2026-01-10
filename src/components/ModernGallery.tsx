"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";

export type GalleryImage = {
  src: string;
  alt: string;
};

export function ModernGallery({ images }: { images: GalleryImage[] }) {
  const safeImages = useMemo(() => images.filter(Boolean), [images]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const clampIndex = useCallback(
    (next: number) => {
      if (safeImages.length === 0) return 0;
      return (next + safeImages.length) % safeImages.length;
    },
    [safeImages.length]
  );

  const goPrev = useCallback(() => setActiveIndex((i) => clampIndex(i - 1)), [clampIndex]);
  const goNext = useCallback(() => setActiveIndex((i) => clampIndex(i + 1)), [clampIndex]);

  useEffect(() => {
    if (!lightboxOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goNext, goPrev, lightboxOpen]);

  const active = safeImages[activeIndex];
  if (!active) return null;

  return (
    <div className="grid lg:grid-cols-[1.35fr_0.65fr] gap-6 lg:gap-10">
      {/* Main */}
      <div className="relative">
        <div className="relative overflow-hidden rounded-sm bg-neutral-100 border border-neutral-200 aspect-[16/10]">
          <Image
            src={active.src}
            alt={active.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 65vw"
            className="object-cover"
          />

          {/* Soft gradient for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/55 via-neutral-900/0 to-transparent" />

          {/* Caption */}
          <div className="absolute left-0 right-0 bottom-0 p-5 lg:p-6">
            <div className="flex items-end justify-between gap-4">
              <p className="text-white text-sm lg:text-base font-medium max-w-[70ch] drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]">
                {active.alt}
              </p>
              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm rounded-sm text-white text-sm font-medium transition-colors"
                aria-label="Open image in full screen"
              >
                <span>View</span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M15 3h6v6m0-6-7 7M9 21H3v-6m0 6 7-7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={goPrev}
              className="w-10 h-10 rounded-sm border border-neutral-200 bg-white hover:border-water hover:text-water transition-colors flex items-center justify-center"
              aria-label="Previous image"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M15 19l-7-7 7-7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={goNext}
              className="w-10 h-10 rounded-sm border border-neutral-200 bg-white hover:border-water hover:text-water transition-colors flex items-center justify-center"
              aria-label="Next image"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M9 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="text-xs text-neutral-500 font-mono">
            {String(activeIndex + 1).padStart(2, "0")} / {String(safeImages.length).padStart(2, "0")}
          </div>
        </div>
      </div>

      {/* Thumbs */}
      <div className="lg:sticky lg:top-28">
        <div className="hidden lg:block mb-3">
          <div className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-mono">
            Gallery
          </div>
        </div>

        <div className="max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-300 scrollbar-track-neutral-100 pr-2">
          <div className="grid grid-cols-3 lg:grid-cols-2 gap-3">
          {safeImages.map((img, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={img.src}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`relative overflow-hidden rounded-sm border transition-all ${
                  isActive
                    ? "border-brand ring-2 ring-brand/25"
                    : "border-neutral-200 hover:border-brand/60"
                } aspect-[4/3] bg-neutral-100`}
                aria-label={`Select image ${idx + 1}`}
                aria-current={isActive ? "true" : "false"}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1024px) 33vw, 20vw"
                  className={`object-cover transition-transform duration-500 ${
                    isActive ? "scale-105" : "hover:scale-105"
                  }`}
                  loading="lazy"
                />
                <div
                  className={`absolute inset-0 transition-opacity ${
                    isActive ? "opacity-0" : "opacity-20"
                  } bg-neutral-900`}
                />
              </button>
            );
          })}
          </div>

          {/* Mobile hint */}
          <p className="mt-4 text-xs text-neutral-500 lg:hidden">
            Tip: Tap thumbnails to preview. Use arrows to browse.
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[60] bg-neutral-900/90 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onClick={() => setLightboxOpen(false)}
        >
          <div className="absolute inset-0 p-4 sm:p-10" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full h-full rounded-sm overflow-hidden border border-white/10 bg-neutral-900">
              <Image
                src={active.src}
                alt={active.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />

              {/* Top bar */}
              <div className="absolute top-0 left-0 right-0 p-3 flex items-center justify-between">
                <div className="text-xs text-white/70 font-mono">
                  {String(activeIndex + 1).padStart(2, "0")} / {String(safeImages.length).padStart(2, "0")}
                </div>
                <button
                  type="button"
                  onClick={() => setLightboxOpen(false)}
                  className="w-10 h-10 rounded-sm bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors flex items-center justify-center"
                  aria-label="Close viewer"
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

              {/* Side controls */}
              <button
                type="button"
                onClick={goPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-sm bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors flex items-center justify-center"
                aria-label="Previous image"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M15 19l-7-7 7-7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={goNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-sm bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors flex items-center justify-center"
                aria-label="Next image"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M9 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-neutral-900/80 to-transparent">
                <p className="text-white text-sm sm:text-base font-medium">{active.alt}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


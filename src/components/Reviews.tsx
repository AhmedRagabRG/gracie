"use client";

import React, { useState } from "react";
import Image from "next/image";
import { REVIEWS, getTotalReviews } from "@/data/reviews";

export function Reviews() {
  const [selectedReview, setSelectedReview] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setSelectedReview(REVIEWS[index].id);
  };

  const closeLightbox = () => {
    setSelectedReview(null);
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % REVIEWS.length;
    setCurrentIndex(nextIndex);
    setSelectedReview(REVIEWS[nextIndex].id);
  };

  const goToPrevious = () => {
    const prevIndex = (currentIndex - 1 + REVIEWS.length) % REVIEWS.length;
    setCurrentIndex(prevIndex);
    setSelectedReview(REVIEWS[prevIndex].id);
  };

  return (
    <section id="reviews" className="py-24 bg-gradient-to-b from-neutral-50 to-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-mono">
            Client Testimonials
          </span>
          <h2 className="text-4xl lg:text-5xl font-light text-neutral-900 mt-4 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Real reviews from real customers across Perth. See what people are saying about our irrigation services.
          </p>
        </div>

        {/* Reviews Grid - Wider Layout for Better Text Readability */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review, index) => (
            <button
              key={review.id}
              onClick={() => openLightbox(index)}
              className="group relative overflow-hidden rounded-lg border border-neutral-200 bg-white hover:border-brand transition-all duration-300 hover:shadow-xl cursor-pointer"
            >
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={review.image}
                  alt={review.alt}
                  fill
                  className="object-contain bg-neutral-50 transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white">
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
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                      <span className="text-sm font-medium">View Review</span>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-brand-muted rounded-lg border border-brand-border">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-6 h-6 text-yellow-400 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold text-neutral-900">
                5-Star Rated Service
              </div>
              <div className="text-xs text-neutral-600">
                Based on {getTotalReviews()}+ verified reviews
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedReview !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <div className="absolute inset-0 flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-[101] w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 z-[101] w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              aria-label="Previous"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 z-[101] w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              aria-label="Next"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Image */}
            <div
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={REVIEWS[currentIndex].image}
                  alt={REVIEWS[currentIndex].alt}
                  width={1200}
                  height={1600}
                  className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                  priority
                />
              </div>

              {/* Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/60 backdrop-blur-sm rounded-full text-white text-sm">
                {currentIndex + 1} / {REVIEWS.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

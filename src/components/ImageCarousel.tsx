"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface CarouselImage {
  src: string;
  alt: string;
  title?: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  autoPlayInterval?: number;
}

export function ImageCarousel({ images, autoPlayInterval = 5000 }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, images.length, autoPlayInterval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative w-full h-full group">
      {/* Main Image Display */}
      <div className="relative w-full h-full overflow-hidden rounded-sm">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {image.title && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-neutral-900/90 to-transparent p-6">
                <h3 className="text-white text-lg font-medium">{image.title}</h3>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
        aria-label="Previous image"
      >
        <svg
          className="w-6 h-6 text-neutral-900"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
        aria-label="Next image"
      >
        <svg
          className="w-6 h-6 text-neutral-900"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

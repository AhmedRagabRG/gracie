"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Custom hook for scroll-based reveal animations
 * Adds 'is-visible' class when element enters viewport
 */
export function useScrollReveal<T extends HTMLElement>(
  options: IntersectionObserverInit = {}
) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once revealed, stop observing
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return { ref, isVisible };
}

/**
 * Staggered reveal for multiple elements
 */
export function useStaggeredReveal(count: number, delay: number = 100) {
  const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set());

  const handleIntersection = (index: number) => {
    setTimeout(() => {
      setVisibleIndices((prev) => new Set([...prev, index]));
    }, index * delay);
  };

  return { visibleIndices, handleIntersection };
}

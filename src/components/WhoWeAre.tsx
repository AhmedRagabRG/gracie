import React from "react";

export function WhoWeAre() {
  return (
    <section id="who-we-are" className="py-24 bg-gradient-to-b from-white to-brand-muted">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl">
          {/* Section Label */}
          <div className="mb-8">
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-mono">
              About Us
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl lg:text-5xl font-light text-neutral-900 mb-12 leading-tight">
            Who We Are
          </h2>

          {/* Content — Using provided copy verbatim */}
          <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
            <p>
              We're a Perth-based irrigation business, run by a father–son team, working across
              residential and light commercial properties. Based in Carramar, servicing the northern suburbs of Perth.
            </p>

            <p>
              Our approach is simple: understand the system first, then fix or improve it properly.
              We take the time to assess pressure, flow, wiring, and coverage so recommendations are
              matched to the site — not guessed.
            </p>

            <p>
              We place a strong focus on water-efficient design and repairs, helping systems run
              effectively without wasting your water or money. Small adjustments, correct zoning, and
              the right components often make a big difference to performance and long-term
              reliability.
            </p>

            <p>
              Much of our work comes from repeat clients, property managers, and referrals, and we
              pride ourselves on being easy to deal with, upfront, and detail-focused. If a system can
              be repaired, we'll repair it — often on the first visit. If it's reached the end of its
              life, we'll explain why and clearly outline the available options.
            </p>
          </div>

          {/* Decorative Water Ripple Line */}
          <div className="mt-12 pt-8 border-t border-neutral-200">
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-16 bg-gradient-to-r from-water to-transparent" />
              <span className="text-sm text-neutral-500 italic">
                Father–son team. Detail-focused. Water-efficient.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

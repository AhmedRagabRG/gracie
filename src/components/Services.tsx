import React from "react";

interface ServiceItem {
  title: string;
  items: string[];
}

const SERVICES: ServiceItem[] = [
  {
    title: "Repairs & Diagnostics",
    items: [
      "Reticulation fault-finding and diagnostics",
      "Leak detection and repairs",
      "Bore and pump troubleshooting",
      "Solenoid locating and wire tracing",
      "Controller replacement, setup & programming (smart and standard)",
      "Water-efficient tuning, system optimisation & usage readings",
    ],
  },
  {
    title: "System Upgrades & New Installations",
    items: [
      "Revamps and complete overhauls of existing systems",
      "New lawn and garden reticulation system installs",
      "System extensions and re-zoning",
    ],
  },
  {
    title: "Property & Ongoing Work",
    items: [
      "Property manager servicing and reporting",
      "Ongoing maintenance schedules for existing clients",
      "Water Corp leak allowance and rebate assistance",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-neutral-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-mono">
            What We Do
          </span>
          <h2 className="text-4xl lg:text-5xl font-light text-neutral-900 mt-4">
            Our Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="group bg-white border border-neutral-200 p-8 rounded-sm hover:border-brand transition-all duration-300 hover:shadow-lg"
            >
              {/* Service Number Badge */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 flex items-center justify-center bg-brand-muted text-brand text-sm font-mono rounded-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-medium text-neutral-900 group-hover:text-brand transition-colors">
                  {service.title}
                </h3>
              </div>

              {/* Service Items */}
              <ul className="space-y-3">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3 text-neutral-700">
                    <span className="block w-1 h-1 rounded-full bg-water mt-2.5 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Note: No Pricing */}
        <div className="mt-12 text-center">
          <p className="text-sm text-neutral-500 italic">
            Every job is different. Contact us for an honest assessment.
          </p>
        </div>
      </div>
    </section>
  );
}

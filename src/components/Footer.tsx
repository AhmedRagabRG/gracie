import React from "react";
import { CONTACT_INFO } from "@/config/contact";

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-light text-white mb-3">
              Gracie Reticulation Services
            </h3>
            <p className="text-sm leading-relaxed">
              Perth-based irrigation specialists. Father–son team delivering precision diagnostics
              and water-efficient solutions. Based in Carramar, servicing the northern suburbs of Perth.
            </p>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-neutral-500 mb-3">
              Quick Contact
            </h4>
            <div className="space-y-2">
              <p>
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                  className="hover:text-water transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-water transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </p>
            </div>
          </div>

          {/* Service Area */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-neutral-500 mb-3">
              Service Area
            </h4>
            <p className="text-sm">{CONTACT_INFO.serviceArea}</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800 text-sm text-neutral-500 text-center">
          <p>
            &copy; {new Date().getFullYear()} {CONTACT_INFO.businessName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

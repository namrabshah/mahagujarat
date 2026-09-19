"use client";

import { company, whatsappEnquireUrl } from "@/data/company";
import { MapPinIcon, PhoneIcon, WhatsAppIcon } from "./Icons";

export default function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-white/95 backdrop-blur-md md:hidden">
      <div
        className="grid grid-cols-3 gap-1 px-2 pt-2"
        style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
      >
        <a
          href={company.primaryPhoneTel}
          className="focus-ring flex flex-col items-center justify-center gap-0.5 rounded-sm bg-navy px-2 py-2 text-white"
        >
          <PhoneIcon size={16} className="text-gold" />
          <span className="text-[0.7rem] font-semibold">Call</span>
        </a>
        <a
          href={whatsappEnquireUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring flex flex-col items-center justify-center gap-0.5 rounded-sm bg-[#25D366] px-2 py-2 text-white"
        >
          <WhatsAppIcon size={16} />
          <span className="text-[0.7rem] font-semibold">WhatsApp</span>
        </a>
        <a
          href={company.locations.vatva.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring flex flex-col items-center justify-center gap-0.5 rounded-sm border border-border bg-bg px-2 py-2 text-navy"
        >
          <MapPinIcon size={16} className="text-gold" />
          <span className="text-[0.7rem] font-semibold">Directions</span>
        </a>
      </div>
    </div>
  );
}

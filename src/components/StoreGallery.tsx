"use client";

import Image from "next/image";
import { useState } from "react";
import { company } from "@/data/company";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import { CloseIcon } from "./Icons";

const gallery = [
  // {
  //   src: company.logo,
  //   alt: "Mahagujarat Pipe Company logo",
  //   label: "Company Logo",
  // },
  {
    src: "/images/company/mahagujarat_pankornaka.png",
    alt: "Pankor Naka shop sign board — Mahagujarat Pipe Company",
    label: "Pankor Naka Board",
  },
  {
    src: "/images/company/mahagujrat_logo.png",
    alt: "Vatva industrial shop sign board",
    label: "Vatva Shop Board",
  },
];

export default function StoreGallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="section-pad bg-bg" id="store-gallery">
      <div className="container-site">
        <FadeIn>
          <SectionHeading
            align="center"
            eyebrow="Our Stores"
            title="Visit Our Stores"
            subtitle="Real shop sign boards and official branding of Mahagujarat Pipe Company."
          />
        </FadeIn>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {gallery.map((item, index) => (
            <FadeIn key={item.src} delay={index * 40}>
              <button
                type="button"
                onClick={() => setActive(index)}
                className="focus-ring group w-full overflow-hidden border border-border bg-white text-left shadow-sm rounded-lg"
              >
                <div className="relative aspect-[16/9] bg-slate-50">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className={`transition duration-500 group-hover:scale-105 ${
                      item.src.endsWith("logo.png")
                        ? "object-contain p-4"
                        : "object-contain p-1.5"
                    }`}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <p className="border-t border-border px-3 py-2 text-xs font-semibold text-navy">
                  {item.label}
                </p>
              </button>
            </FadeIn>
          ))}
        </div>
      </div>

      {active !== null ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-navy-deep/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Store image preview"
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-white p-3"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="focus-ring absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-sm bg-navy text-white"
              aria-label="Close"
              onClick={() => setActive(null)}
            >
              <CloseIcon size={18} />
            </button>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={gallery[active].src}
                alt={gallery[active].alt}
                fill
                className={
                  gallery[active].src.includes("logo")
                    ? "object-contain p-8"
                    : "object-contain"
                }
                sizes="90vw"
              />
            </div>
            <p className="mt-2 text-center text-sm font-semibold text-navy">
              {gallery[active].label}
            </p>
          </div>
        </div>
      ) : null}
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { company } from "@/data/company";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import { MapPinIcon, PhoneIcon } from "./Icons";

export default function LocationsPreview() {
  const branches = [company.locations.vatva, company.locations.pankor];

  return (
    <section className="section-pad bg-white">
      <div className="container-site">
        <FadeIn>
          <SectionHeading
            align="center"
            eyebrow="Our Stores"
            title="Visit Our Locations in Ahmedabad"
            subtitle="Two strategic branches — Vatva GIDC Phase 1 for industrial supply and Pankor Naka for city access."
          />
        </FadeIn>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {branches.map((branch, i) => (
            <FadeIn key={branch.id} delay={i * 60}>
              <article className="flex flex-col overflow-hidden border border-border bg-bg rounded-lg shadow-sm">
                <div className="relative aspect-[16/9] bg-slate-100">
                  <Image
                    src={branch.image}
                    alt={`${branch.name} sign board`}
                    fill
                    className="object-contain p-1.5"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-gold">
                      {branch.label}
                    </span>
                    <h3 className="mt-1 text-lg font-bold text-navy">{branch.name}</h3>
                    <p className="mt-2 text-[0.7rem] sm:text-[0.75rem] md:text-xs lg:text-[0.75rem] xl:text-xs font-medium leading-relaxed text-text-muted">
                      {branch.address}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-border/80 flex items-center justify-between gap-2">
                    <a
                      href={branch.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring inline-flex items-center gap-1 text-xs font-semibold text-navy hover:text-gold"
                    >
                      <MapPinIcon size={14} className="text-gold" />
                      <span>Directions</span>
                    </a>
                    <a
                      href={branch.phoneTel}
                      className="focus-ring inline-flex items-center gap-1 text-xs font-bold text-navy hover:text-gold"
                    >
                      <PhoneIcon size={14} className="text-gold" />
                      <span>Call {branch.phone}</span>
                    </a>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/locations"
            className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-sm border border-navy bg-white px-7 text-sm font-semibold text-navy transition hover:bg-bg"
          >
            <span>View All Locations &amp; Directions</span>
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

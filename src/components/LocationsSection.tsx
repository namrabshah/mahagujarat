import Image from "next/image";
import { company } from "@/data/company";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import { ClockIcon, PhoneIcon } from "./Icons";

type Props = { hideHeading?: boolean };

export default function LocationsSection({ hideHeading = false }: Props) {
  const branches = [company.locations.vatva, company.locations.pankor];

  return (
    <section className="section-pad bg-bg" id="locations">
      <div className="container-site">
        {!hideHeading ? (
          <FadeIn>
            <SectionHeading
              eyebrow="Find Us"
              title="Our Locations"
              subtitle="Two Ahmedabad branches — Vatva GIDC for industrial supply and Pankor Naka for city access."
            />
          </FadeIn>
        ) : null}

        <div className="grid gap-6 lg:grid-cols-2">
          {branches.map((branch, i) => (
            <FadeIn key={branch.id} delay={i * 80}>
              <article className="overflow-hidden border border-border bg-white rounded-lg shadow-sm">
                <div className="relative aspect-[16/9] bg-slate-50">
                  <Image
                    src={branch.image}
                    alt={`${branch.name} shop board — Mahagujarat Pipe Company`}
                    fill
                    className="object-contain p-1.5"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-gold">
                    {branch.label}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-navy">{branch.name}</h3>
                  <p className="mt-3 text-[0.7rem] sm:text-[0.78rem] md:text-xs lg:text-[0.78rem] xl:text-xs font-medium leading-relaxed text-text-muted">
                    {branch.address}
                  </p>
                  
                  {/* Contact Persons */}
                  <div className="mt-3.5 flex flex-wrap items-center gap-x-4 gap-y-2">
                    {"contacts" in branch && Array.isArray(branch.contacts) ? (
                      branch.contacts.map((c) => (
                        <a
                          key={c.phone}
                          href={c.phoneTel}
                          className="focus-ring inline-flex items-center gap-1.5 text-xs font-semibold text-navy bg-bg px-2.5 py-1.5 rounded border border-border/70 hover:border-gold"
                        >
                          <PhoneIcon size={14} className="text-gold" />
                          <span>
                            {c.name} &bull; <strong className="font-bold">{c.phone}</strong>
                          </span>
                        </a>
                      ))
                    ) : (
                      <a
                        href={branch.phoneTel}
                        className="focus-ring inline-flex items-center gap-1.5 text-xs font-semibold text-navy bg-bg px-2.5 py-1.5 rounded border border-border/70 hover:border-gold"
                      >
                        <PhoneIcon size={14} className="text-gold" />
                        <span>
                          {"contactPerson" in branch && branch.contactPerson
                            ? `${branch.contactPerson} · `
                            : ""}
                          <strong className="font-bold">{branch.phone}</strong>
                        </span>
                      </a>
                    )}
                  </div>
                  <div className="mt-2.5 flex items-start gap-2 text-xs text-text-muted">
                    <ClockIcon size={15} className="mt-0.5 shrink-0 text-gold" />
                    <span>
                      <strong className="font-semibold text-navy">Hours:</strong>{" "}
                      {"hours" in branch ? branch.hours : company.workingHours.shortDisplay}
                    </span>
                  </div>
                  <div className="mt-5 flex flex-col gap-2 min-[400px]:flex-row">
                    <a
                      href={branch.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring inline-flex min-h-11 flex-1 items-center justify-center rounded-sm bg-navy px-4 py-2.5 text-sm font-semibold text-white hover:bg-navy-mid"
                    >
                      Get Directions
                    </a>
                    <a
                      href={branch.mapsSearchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring inline-flex min-h-11 flex-1 items-center justify-center rounded-sm border border-border px-4 py-2.5 text-sm font-semibold text-navy hover:bg-bg"
                    >
                      View on Google Maps
                    </a>
                    <a
                      href={branch.phoneTel}
                      className="focus-ring inline-flex min-h-11 flex-1 items-center justify-center rounded-sm border border-gold/50 bg-gold/10 px-4 py-2.5 text-sm font-semibold text-navy hover:bg-gold/20"
                    >
                      Call
                    </a>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

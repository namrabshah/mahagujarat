import Image from "next/image";
import { company } from "@/data/company";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import { ClockIcon, PhoneIcon, ShieldIcon } from "./Icons";

const productHighlights = [
  "Asian Tubes & Pipes Stockist",
  "G.I. & M.S. Round & Square Pipes",
  "Water & Steam Flanges & Valves",
  "G.M. Valves, Cocks & Water Meters",
  "PVC, UPVC & CPVC Pipes",
  "Vatva GIDC & Pankor Naka Branches",
];

type Props = { hideHeading?: boolean };

export default function AboutSection({ hideHeading = false }: Props) {
  return (
    <section className="section-pad bg-white" id="about">
      <div className="container-site">
        {!hideHeading ? (
          <FadeIn>
            <SectionHeading
              align="left"
              eyebrow="Our Legacy"
              title="About Mahagujarat Pipe Company"
              subtitle="Serving industrial, commercial and residential buyers in Ahmedabad since 1955."
            />
          </FadeIn>
        ) : null}

        <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          {/* Left Column: Visual Showcase */}
          <FadeIn>
            <div className="space-y-4">
              {/* Primary Shop Sign Board Showcase */}
              <div className="group relative overflow-hidden rounded-xl border border-border bg-slate-50 shadow-md">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/images/company/mahagujrat_logo.png"
                    alt="Mahagujarat Pipe Company Vatva shop sign board — ESTD 1955"
                    fill
                    className="object-contain p-1.5 transition duration-500 group-hover:scale-[1.01]"
                    sizes="(max-width:1024px) 100vw, 50vw"
                    priority
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute left-3 top-3 flex items-center gap-2 rounded-md bg-navy-deep/90 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md shadow-md">
                  <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
                  <span>Vatva GIDC Phase 1 · Estd. 1955</span>
                </div>
              </div>

              {/* Dual Branch Panel: Vatva GIDC & Pankor Naka with Directions */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {/* Vatva GIDC Branch Card */}
                <div className="relative overflow-hidden rounded-lg border border-border bg-bg p-3.5 shadow-sm flex items-center justify-between">
                  <div>
                    <p className="text-[0.65rem] font-bold uppercase tracking-wider text-text-muted">
                      Industrial Branch
                    </p>
                    <p className="text-xs font-bold text-navy">Vatva GIDC</p>
                    <p className="text-[0.7rem] text-text-muted">Near Neeka Tube Chowkdi</p>
                  </div>
                  <a
                    href={company.locations.vatva.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring shrink-0 rounded bg-navy px-3 py-1.5 text-[0.7rem] font-semibold text-white hover:bg-navy-mid transition shadow-sm"
                  >
                    Directions
                  </a>
                </div>

                {/* Pankor Naka Branch Card */}
                <div className="relative overflow-hidden rounded-lg border border-border bg-bg p-3.5 shadow-sm flex items-center justify-between">
                  <div>
                    <p className="text-[0.65rem] font-bold uppercase tracking-wider text-text-muted">
                      City Branch
                    </p>
                    <p className="text-xs font-bold text-navy">Pankor Naka</p>
                    <p className="text-[0.7rem] text-text-muted">Nr. Sahjanand Market</p>
                  </div>
                  <a
                    href={company.locations.pankor.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring shrink-0 rounded bg-navy px-3 py-1.5 text-[0.7rem] font-semibold text-white hover:bg-navy-mid transition shadow-sm"
                  >
                    Directions
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Information & Interactive Call/Schedule Cards */}
          <FadeIn delay={80}>
            <div className="flex flex-col gap-5">
              <div>
                <span className="inline-block rounded-full bg-maroon/10 px-3 py-1 text-xs font-bold text-maroon">
                  {company.nameGu}
                </span>
                <h3 className="mt-2 text-2xl font-bold leading-snug text-navy sm:text-3xl">
                  Trusted Stockist of Pipes, Fittings, Valves &amp; Flanges
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted sm:text-base">
                  Established in <strong className="text-navy">{company.established}</strong>,{" "}
                  <strong className="text-navy">{company.name}</strong> is one of Gujarat’s premier suppliers of industrial and plumbing pipeline products. We carry extensive ready stock of <strong className="text-navy">G.I. &amp; M.S. Round &amp; Square Pipes &amp; Fittings</strong> for Water &amp; Steam, <strong className="text-navy">Flanges, G.M. Valves, Cocks, Water Meters</strong>, as well as PVC, UPVC, and CPVC pipes.
                </p>
              </div>

              {/* Product Highlights Grid */}
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {productHighlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-md border border-border/80 bg-bg px-3 py-2 text-xs font-semibold text-navy"
                  >
                    <ShieldIcon size={14} className="shrink-0 text-gold" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Click-to-Call Contact Cards */}
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-text-muted">
                  Direct Contact Persons (Click to Call)
                </p>
                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                  {/* Bhaven Shah */}
                  <a
                    href={company.contacts.bhaven.phoneTel}
                    className="focus-ring group flex items-center justify-between rounded-lg border border-border bg-white p-2.5 shadow-sm transition hover:border-gold hover:shadow-md"
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/15 text-gold group-hover:bg-gold group-hover:text-navy transition">
                        <PhoneIcon size={14} />
                      </div>
                      <div>
                        <p className="text-[0.72rem] font-bold text-navy">{company.contacts.bhaven.name}</p>
                        <p className="text-[0.7rem] font-semibold text-text-muted group-hover:text-navy">
                          {company.contacts.bhaven.phone}
                        </p>
                      </div>
                    </div>
                    <span className="rounded bg-navy/5 px-1.5 py-0.5 text-[0.65rem] font-bold text-navy group-hover:bg-navy group-hover:text-white transition">
                      Call
                    </span>
                  </a>

                  {/* Ketan Shah */}
                  <a
                    href={company.contacts.ketan.phoneTel}
                    className="focus-ring group flex items-center justify-between rounded-lg border border-border bg-white p-2.5 shadow-sm transition hover:border-gold hover:shadow-md"
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-navy/10 text-navy group-hover:bg-navy group-hover:text-white transition">
                        <PhoneIcon size={14} />
                      </div>
                      <div>
                        <p className="text-[0.72rem] font-bold text-navy">{company.contacts.ketan.name}</p>
                        <p className="text-[0.7rem] font-semibold text-text-muted group-hover:text-navy">
                          {company.contacts.ketan.phone}
                        </p>
                      </div>
                    </div>
                    <span className="rounded bg-navy/5 px-1.5 py-0.5 text-[0.65rem] font-bold text-navy group-hover:bg-navy group-hover:text-white transition">
                      Call
                    </span>
                  </a>

                  {/* Taral Shah */}
                  <a
                    href={company.contacts.taral.phoneTel}
                    className="focus-ring group flex items-center justify-between rounded-lg border border-border bg-white p-2.5 shadow-sm transition hover:border-gold hover:shadow-md"
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition">
                        <PhoneIcon size={14} />
                      </div>
                      <div>
                        <p className="text-[0.72rem] font-bold text-navy">{company.contacts.taral.name}</p>
                        <p className="text-[0.7rem] font-semibold text-text-muted group-hover:text-navy">
                          {company.contacts.taral.phone}
                        </p>
                      </div>
                    </div>
                    <span className="rounded bg-navy/5 px-1.5 py-0.5 text-[0.65rem] font-bold text-navy group-hover:bg-navy group-hover:text-white transition">
                      Call
                    </span>
                  </a>
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="rounded-xl border border-gold/40 bg-gradient-to-r from-gold/10 via-amber-500/5 to-transparent p-4 shadow-sm">
                <div className="flex items-center justify-between border-b border-gold/20 pb-2.5">
                  <div className="flex items-center gap-2">
                    <ClockIcon size={18} className="text-gold" />
                    <span className="text-xs font-bold uppercase tracking-wider text-navy">
                      Store Working Hours
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[0.68rem] font-bold text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Open Today
                  </span>
                </div>
                <div className="mt-3 grid grid-cols-1 gap-2 text-xs sm:grid-cols-2">
                  <div className="rounded-md bg-white/80 p-2 border border-gold/20">
                    <span className="block text-[0.68rem] font-bold uppercase text-text-muted">
                      Monday – Saturday
                    </span>
                    <span className="font-bold text-navy">9:00 AM – 7:30 PM</span>
                  </div>
                  <div className="rounded-md bg-white/80 p-2 border border-gold/20">
                    <span className="block text-[0.68rem] font-bold uppercase text-text-muted">
                      Sunday
                    </span>
                    <span className="font-bold text-navy">9:00 AM – 12:30 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

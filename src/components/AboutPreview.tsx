import Image from "next/image";
import Link from "next/link";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import { ShieldIcon } from "./Icons";

export default function AboutPreview() {
  return (
    <section className="section-pad bg-white">
      <div className="container-site">
        <FadeIn>
          <SectionHeading
            align="center"
            eyebrow="Our Legacy"
            title="70+ Years of Trust & Quality Pipe Supplies"
            subtitle="Established in 1955 in Ahmedabad, Mahagujarat Pipe Company is Gujarat’s premier stockist of MS, GI, PVC, UPVC, and CPVC pipes, fittings, valves, and flanges."
          />
        </FadeIn>

        <div className="mt-8 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <FadeIn>
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-border bg-slate-50 shadow-md">
              <Image
                src="/images/company/mahagujrat_logo.png"
                alt="Mahagujarat Pipe Company shop sign board"
                fill
                className="object-contain p-2"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute left-3 top-3 flex items-center gap-2 rounded-md bg-navy-deep/90 px-3 py-1.5 text-xs font-semibold text-white shadow-md">
                <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
                <span>Established 1955 · 70+ Years</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={60}>
            <div className="flex flex-col gap-5">
              <h3 className="text-2xl font-bold leading-snug text-navy sm:text-3xl">
                Ahmedabad&apos;s Trusted Supplier of Industrial &amp; Plumbing Piping
              </h3>
              <p className="text-sm leading-relaxed text-text-muted sm:text-base">
                We carry extensive ready stock of MS &amp; GI pipes (round &amp; square), Asian Tubes, PVC, UPVC, and CPVC pipes along with heavy-duty valves, flanges, and fittings for water, steam, and industrial systems.
              </p>

              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                <div className="flex items-center gap-2.5 rounded-md border border-border bg-bg px-3 py-2 text-xs font-semibold text-navy">
                  <ShieldIcon size={16} className="text-gold shrink-0" />
                  <span>Asian Tubes &amp; Pipes Stockist</span>
                </div>
                <div className="flex items-center gap-2.5 rounded-md border border-border bg-bg px-3 py-2 text-xs font-semibold text-navy">
                  <ShieldIcon size={16} className="text-gold shrink-0" />
                  <span>Vatva GIDC &amp; Pankor Naka Branches</span>
                </div>
                <div className="flex items-center gap-2.5 rounded-md border border-border bg-bg px-3 py-2 text-xs font-semibold text-navy">
                  <ShieldIcon size={16} className="text-gold shrink-0" />
                  <span>Heavy-Duty Valves &amp; Flanges</span>
                </div>
                <div className="flex items-center gap-2.5 rounded-md border border-border bg-bg px-3 py-2 text-xs font-semibold text-navy">
                  <ShieldIcon size={16} className="text-gold shrink-0" />
                  <span>Ready Stock &amp; Immediate Supply</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-navy px-6 text-sm font-semibold text-white transition hover:bg-navy-mid"
                >
                  <span>Learn More About Us</span>
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

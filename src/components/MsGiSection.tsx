import Image from "next/image";
import Link from "next/link";
import { whatsappEnquireUrl } from "@/data/company";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

export default function MsGiSection() {
  return (
    <section className="section-pad bg-bg" id="ms-gi">
      <div className="container-site space-y-10">
        <FadeIn>
          <SectionHeading
            eyebrow="Steel Range"
            title="MS & GI Pipes and Fittings"
            subtitle="Mild steel and galvanized pipes with matching fittings for construction, fabrication and utility work."
          />
        </FadeIn>

        {/* MS Pipes */}
        <FadeIn>
          <article className="overflow-hidden border border-border bg-white">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[260px] lg:min-h-[380px]">
                <Image
                  src="/images/mspipe.png"
                  alt="MS mild steel pipes stock"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-gold">
                  Mild Steel
                </p>
                <h3 className="mt-2 text-2xl font-bold text-navy md:text-3xl">
                  MS Pipes
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-text-muted sm:text-base">
                  Reliable MS pipe solutions for construction, fabrication,
                  engineering and industrial requirements.
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {["Round MS Pipes", "Square MS Pipes", "Rectangle MS Pipes"].map(
                    (item) => (
                      <li
                        key={item}
                        className="border border-border bg-bg px-3 py-1.5 text-xs font-semibold text-navy"
                      >
                        {item}
                      </li>
                    ),
                  )}
                </ul>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/products/ms-pipes"
                    className="focus-ring inline-flex min-h-11 items-center justify-center bg-navy px-5 text-sm font-semibold text-white"
                  >
                    Explore MS Pipes
                  </Link>
                  <a
                    href={whatsappEnquireUrl("MS Pipes")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring inline-flex min-h-11 items-center justify-center border border-navy px-5 text-sm font-semibold text-navy"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            </div>
          </article>
        </FadeIn>

        {/* GI Pipes */}
        <FadeIn>
          <article className="overflow-hidden border border-border bg-white">
            <div className="grid lg:grid-cols-2">
              <div className="relative order-1 min-h-[260px] lg:order-2 lg:min-h-[380px]">
                <Image
                  src="/images/gipipe.png"
                  alt="GI galvanized pipes"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 50vw"
                />
              </div>
              <div className="order-2 flex flex-col justify-center p-6 sm:p-8 lg:order-1 lg:p-10">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-gold">
                  Galvanized
                </p>
                <h3 className="mt-2 text-2xl font-bold text-navy md:text-3xl">
                  GI Pipes
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-text-muted sm:text-base">
                  Galvanized iron pipes and related accessories for water supply,
                  plumbing and utility installations.
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {["GI Pipes", "GI Fittings", "GI Accessories"].map((item) => (
                    <li
                      key={item}
                      className="border border-border bg-bg px-3 py-1.5 text-xs font-semibold text-navy"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/products/gi-pipes"
                    className="focus-ring inline-flex min-h-11 items-center justify-center bg-navy px-5 text-sm font-semibold text-white"
                  >
                    Explore GI Pipes
                  </Link>
                  <a
                    href={whatsappEnquireUrl("GI Pipes")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring inline-flex min-h-11 items-center justify-center border border-navy px-5 text-sm font-semibold text-navy"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            </div>
          </article>
        </FadeIn>
      </div>
    </section>
  );
}

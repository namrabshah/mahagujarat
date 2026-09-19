import Image from "next/image";
import { products } from "@/data/products";
import { whatsappEnquireUrl } from "@/data/company";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

const fittings = products.filter((p) => p.category === "Pipe Fittings");
const valvesFlanges = products.filter(
  (p) => p.category === "Valves & Cocks" || p.category === "Flanges",
);

export function PipeFittingsSection() {
  return (
    <section className="section-pad bg-bg" id="pipe-fittings">
      <div className="container-site">
        <FadeIn>
          <SectionHeading
            eyebrow="Connections"
            title="Pipe Fittings"
            subtitle="Elbows, tees, couplings, reducers, unions, nipples, bushes, caps and bends."
          />
        </FadeIn>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {fittings.map((p, i) => (
            <FadeIn key={p.slug} delay={(i % 4) * 30}>
              <article className="border border-border bg-white p-3 sm:p-4">
                <div className="relative mb-3 aspect-square overflow-hidden bg-bg-alt">
                  <Image src={p.image} alt={p.name} fill className="object-cover" sizes="25vw" />
                </div>
                <h3 className="text-sm font-bold text-navy sm:text-base">{p.name}</h3>
                <a
                  href={whatsappEnquireUrl(p.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring mt-3 inline-block text-xs font-semibold text-navy underline"
                >
                  Enquire Now
                </a>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ValvesFlangesSection() {
  return (
    <section className="section-pad bg-white" id="valves-flanges">
      <div className="container-site">
        <FadeIn>
          <SectionHeading
            eyebrow="Flow & Joints"
            title="Valves & Flanges"
            subtitle="Ball valves, gate valves, GM valves, gas cocks, MS/GI flanges and related products."
          />
        </FadeIn>
        <div className="grid grid-cols-1 gap-4 min-[400px]:grid-cols-2 lg:grid-cols-3">
          {valvesFlanges.map((p, i) => (
            <FadeIn key={p.slug} delay={(i % 3) * 40}>
              <article className="overflow-hidden border border-border bg-bg">
                <div className="relative aspect-[16/10]">
                  <Image src={p.image} alt={p.name} fill className="object-cover" sizes="33vw" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-navy">{p.name}</h3>
                  <p className="mt-2 text-sm text-text-muted">{p.shortDescription}</p>
                  <a
                    href={whatsappEnquireUrl(p.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring mt-3 inline-flex bg-navy px-3 py-2 text-xs font-semibold text-white"
                  >
                    Enquire Now
                  </a>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

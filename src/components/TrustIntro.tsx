import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import {
  CalendarIcon,
  HandshakeIcon,
  LayersIcon,
  ShieldIcon,
} from "./Icons";

const items = [
  {
    title: "Since 1955",
    text: "An established Ahmedabad pipe trading business with long local presence.",
    icon: CalendarIcon,
  },
  {
    title: "Wide Product Range",
    text: "MS, GI, PVC, UPVC, CPVC pipes, fittings, valves, flanges and plumbing products.",
    icon: LayersIcon,
  },
  {
    title: "Quality-Focused Products",
    text: "Practical industrial and plumbing products for dependable installations.",
    icon: ShieldIcon,
  },
  {
    title: "Customer-Focused Service",
    text: "Clear guidance to help you choose the right pipe or fitting for your need.",
    icon: HandshakeIcon,
  },
];

export default function TrustIntro() {
  return (
    <section className="section-pad bg-white" id="trust">
      <div className="container-site">
        <FadeIn>
          <SectionHeading
            eyebrow="Trust"
            title="Your Partner Since 1955"
            subtitle="Mahagujarat Pipe Company supplies pipes, fittings, valves, flanges and plumbing products from Ahmedabad."
          />
        </FadeIn>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 50}>
              <article className="h-full border border-border bg-bg px-5 py-6">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center bg-navy text-gold">
                  <item.icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-text-muted">{item.text}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  return (
    <section className="section-pad bg-navy text-white" id="why-choose-us">
      <div className="container-site">
        <FadeIn>
          <SectionHeading
            light
            eyebrow="Why Us"
            title="Why Choose Mahagujarat Pipe Company?"
            subtitle="Established supply of industrial and plumbing pipe products with two Ahmedabad locations."
          />
        </FadeIn>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 50}>
              <article className="h-full border border-white/10 bg-navy-mid/40 p-5">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center bg-gold/15 text-gold">
                  <item.icon size={22} />
                </div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-steel-light">{item.text}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

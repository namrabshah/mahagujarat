import { company } from "@/data/company";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

export const FAQS = [
  {
    question: "Where can I buy pipes in Ahmedabad?",
    answer:
      "You can buy high-quality MS, GI, PVC, UPVC, and CPVC pipes directly from Mahagujarat Pipe Company. We operate two locations in Ahmedabad: our industrial branch at Plot No. 87/1, Vatva GIDC Phase 1, and our city branch at Pankor Naka, Ahmedabad.",
  },
  {
    question: "Where is Mahagujarat Pipe Company located?",
    answer:
      "Mahagujarat Pipe Company has two physical branches in Ahmedabad, Gujarat: 1) Vatva Industrial Branch: Plot No. 87/1, B/S Shree Ram Krupa Weigh Bridge, Near Neeka Tube Chowkdi, Vatva GIDC Phase 1, Ahmedabad - 382445. 2) Pankor Naka Branch: 2HGP+7MH, Nr. Sahjanand Market, Pankor Naka, Ahmedabad - 380001.",
  },
  {
    question: "What types of pipes are available at Mahagujarat Pipe Company?",
    answer:
      "We supply a comprehensive range of pipes including Mild Steel (MS) round, square, and rectangular ERW pipes, Galvanized Iron (GI) pipes, PVC pipes, UPVC pressure pipes, and CPVC hot/cold water plumbing pipes.",
  },
  {
    question: "Do you supply MS and GI pipes?",
    answer:
      "Yes, we are a major dealer and stockist of MS (Mild Steel) ERW pipes and GI (Galvanized Iron) pipes in Ahmedabad. As authorized stockists for Asian Tubes & Pipes, we provide certified pipes for industrial, construction, and plumbing applications.",
  },
  {
    question: "Do you supply PVC, UPVC and CPVC pipes?",
    answer:
      "Yes, we stock complete ranges of PVC, UPVC, and CPVC plumbing pipes suitable for residential plumbing, commercial water supply lines, chemical drainage, and hot/cold water distribution systems.",
  },
  {
    question: "Do you supply pipe fittings?",
    answer:
      "Yes, we supply a wide array of pipe fittings including elbows, tees, reducers, couplings, unions, hex nipples, bushes, caps, and pipe bends in MS, GI, PVC, UPVC, and CPVC materials.",
  },
  {
    question: "Do you supply valves and flanges?",
    answer:
      "Yes, we offer industrial flow-control valves (ball valves, gate valves, GM valves, check/NRV valves) as well as pipe flanges (Weld Neck, Slip On, Blind, Threaded, Plate flanges in MS and GI).",
  },
  {
    question: "Do you serve customers in Vatva and Ahmedabad?",
    answer:
      "Yes, we serve industrial units in Vatva GIDC (Phases 1-4), Odhav, Naroda, Changodar, as well as contractors, plumbing engineers, fabricators, and commercial buyers across Ahmedabad and all of Gujarat.",
  },
];

export default function FaqSection() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <section className="section-pad bg-bg" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container-site max-w-4xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Pipes & Plumbing FAQ — Ahmedabad & Vatva"
            subtitle="Clear answers about our product inventory, locations, order delivery, and supply capabilities."
          />
        </FadeIn>

        <div className="mt-10 space-y-4">
          {FAQS.map((faq, idx) => (
            <FadeIn key={idx} delay={idx * 50}>
              <details className="group rounded-md border border-border bg-white p-5 transition duration-200 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between font-bold text-navy text-base sm:text-lg hover:text-gold transition-colors">
                  <span>{faq.question}</span>
                  <span className="ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-bg text-navy group-open:rotate-180 transition-transform">
                    ↓
                  </span>
                </summary>
                <div className="mt-3 border-t border-border/50 pt-3 text-sm sm:text-base leading-relaxed text-text-muted">
                  {faq.answer}
                </div>
              </details>
            </FadeIn>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-text-muted">
            Have a specific requirement or bulk order inquiry?{" "}
            <a href={company.primaryPhoneTel} className="font-bold text-navy hover:underline">
              Call {company.primaryPhoneDisplay}
            </a>{" "}
            or{" "}
            <a
              href={`https://wa.me/${company.primaryWhatsApp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-navy hover:underline"
            >
              WhatsApp Us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

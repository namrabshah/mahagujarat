import Image from "next/image";
import Link from "next/link";
import { categoryCards } from "@/data/products";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

export default function ProductCategories() {
  return (
    <section className="section-pad bg-white" id="product-categories">
      <div className="container-site">
        <FadeIn>
          <SectionHeading
            eyebrow="What We Supply"
            title="Product Categories"
            subtitle="Pipes, fittings, valves, flanges and plumbing products for industrial and residential needs."
          />
        </FadeIn>
        <div className="grid grid-cols-1 gap-4 min-[400px]:grid-cols-2 lg:grid-cols-4">
          {categoryCards.map((card, i) => (
            <FadeIn key={card.title} delay={(i % 4) * 40}>
              <Link
                href={card.href}
                className="group focus-ring block h-full overflow-hidden border border-border bg-bg transition hover:border-navy/30 hover:shadow-md"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-bold text-navy">{card.title}</h3>
                  <p className="mt-1.5 text-sm text-text-muted">{card.text}</p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

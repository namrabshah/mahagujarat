import Image from "next/image";
import Link from "next/link";
import { categoryCards } from "@/data/products";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

export default function FeaturedProductsPreview() {
  // Show 4 key featured categories on homepage
  const featuredCards = categoryCards.slice(0, 4);

  return (
    <section className="section-pad bg-bg">
      <div className="container-site">
        <FadeIn>
          <SectionHeading
            align="center"
            eyebrow="Product Catalog"
            title="Featured Product Categories"
            subtitle="Complete range of MS, GI, PVC, UPVC, CPVC pipes, fittings, valves, and flanges."
          />
        </FadeIn>

        <div className="mt-8 grid grid-cols-1 gap-4 min-[400px]:grid-cols-2 lg:grid-cols-4">
          {featuredCards.map((card, i) => (
            <FadeIn key={card.title} delay={i * 40}>
              <Link
                href={card.href}
                className="group focus-ring flex h-full flex-col overflow-hidden border border-border bg-white rounded-lg transition hover:border-gold hover:shadow-md"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-navy group-hover:text-gold transition">
                      {card.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-text-muted leading-relaxed">
                      {card.text}
                    </p>
                  </div>
                  <span className="mt-4 inline-flex items-center text-xs font-bold text-navy group-hover:text-gold">
                    View Details →
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/products"
            className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-navy px-7 text-sm font-bold text-white transition hover:bg-navy-mid"
          >
            <span>Explore All Products</span>
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

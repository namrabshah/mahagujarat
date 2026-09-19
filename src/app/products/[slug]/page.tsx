import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { company, whatsappEnquireUrl } from "@/data/company";
import { getProductBySlug, getRelatedProducts, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product" };
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(slug);

  return (
    <>
      <div className="border-b border-border bg-navy text-white">
        <div className="container-site py-8 md:py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
            {product.category}
          </p>
          <h1 className="mt-2 text-3xl font-bold md:text-4xl">{product.name}</h1>
        </div>
      </div>

      <section className="section-pad bg-white">
        <div className="container-site grid gap-8 lg:grid-cols-2">
          <div className="relative aspect-square overflow-hidden border border-border bg-bg-alt lg:aspect-[4/3]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
              priority
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              {product.category}
            </p>
            <h2 className="mt-2 text-2xl font-bold text-navy md:text-3xl">
              {product.name}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-text-muted sm:text-base">
              {product.description}
            </p>

            <div className="mt-6">
              <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-navy">
                Applications
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {product.applications.map((app) => (
                  <li
                    key={app}
                    className="border border-border bg-bg px-3 py-1.5 text-xs font-semibold text-navy"
                  >
                    {app}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappEnquireUrl(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex min-h-11 items-center justify-center bg-navy px-5 text-sm font-semibold text-white"
              >
                Enquire Now
              </a>
              <a
                href={company.secondaryPhoneTel}
                className="focus-ring inline-flex min-h-11 items-center justify-center border border-navy px-5 text-sm font-semibold text-navy"
              >
                Call Now · {company.secondaryPhoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {related.length ? (
        <section className="section-pad bg-bg">
          <div className="container-site">
            <div className="mb-8 flex items-end justify-between gap-4">
              <h2 className="text-2xl font-bold text-navy">Related Products</h2>
              <Link href="/products" className="text-sm font-semibold text-navy underline">
                View all
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 min-[400px]:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}

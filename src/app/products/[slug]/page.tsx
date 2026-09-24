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

  const titleMap: Record<string, string> = {
    "ms-pipes": "MS Pipes | MS Pipe Dealer & Supplier in Ahmedabad, Vatva",
    "gi-pipes": "GI Pipes | GI Pipe Dealer & Supplier in Ahmedabad, Gujarat",
    "pvc-pipes": "PVC Pipes | PVC Plumbing Pipe Supplier in Ahmedabad",
    "cpvc-pipes": "CPVC Pipes | Hot & Cold CPVC Water Pipe Supplier Ahmedabad",
    "upvc-pipes": "UPVC Pipes | UPVC Pressure Pipe Supplier Ahmedabad",
    "pipe-flanges": "Pipe Flanges | MS & GI Flange Supplier in Ahmedabad",
    "ms-elbow": "MS Elbow | Mild Steel Pipe Fitting Supplier Ahmedabad",
    "gi-elbow": "GI Elbow | Galvanized Iron Fitting Supplier Ahmedabad",
    "pvc-elbow": "PVC Elbow | PVC Plumbing Fitting Supplier Ahmedabad",
    "tee": "Pipe Tee | MS, GI & PVC Equal & Reducing Tee Supplier Ahmedabad",
    "coupling": "Pipe Coupling | MS, GI & PVC Joint Socket Supplier Ahmedabad",
    "reducer": "Pipe Reducer | Concentric & Eccentric Reducer Supplier Ahmedabad",
    "union": "Pipe Union | Threaded Pipe Union Fitting Supplier Ahmedabad",
    "nipple": "Pipe Nipple | Threaded Hex & Barrel Nipple Supplier Ahmedabad",
    "bush": "Pipe Bush | Reducing Bush Fitting Supplier Ahmedabad",
    "bend": "Pipe Bend | Long Radius Pipe Bend Supplier Ahmedabad",
    "ball-valve": "Ball Valve | Industrial Ball Valve Supplier Ahmedabad",
    "gate-valve": "Gate Valve | Industrial Gate Valve Supplier Ahmedabad",
    "gm-valve": "GM Valve | Gunmetal Steam & Water Valve Supplier Ahmedabad",
    "water-valve": "Water Valve | Water Line Valve Supplier Ahmedabad",
    "bathroom-fittings": "Bathroom Fittings | Sanitary & Plumbing Supplier Ahmedabad",
    "water-accessories": "Water Meter & Accessories Supplier Ahmedabad",
    "plumbing-accessories": "Plumbing Accessories & Support Material Ahmedabad",
  };

  const seoTitle =
    titleMap[slug] || `${product.name} Supplier in Ahmedabad & Vatva GIDC`;

  const description = `${product.name} in Ahmedabad, Gujarat. ${product.shortDescription} Supplied by Mahagujarat Pipe Company (Estd. 1955) in Vatva GIDC & Pankor Naka.`;

  return {
    title: seoTitle,
    description: description,
    alternates: {
      canonical: `${company.domain}/products/${slug}`,
    },
    openGraph: {
      title: seoTitle,
      description: description,
      url: `${company.domain}/products/${slug}`,
      siteName: company.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: product.image.startsWith("/") ? `${company.domain}${product.image}` : product.image,
          alt: `${product.name} — Mahagujarat Pipe Company Ahmedabad`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: description,
      images: [product.image.startsWith("/") ? `${company.domain}${product.image}` : product.image],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(slug);
  const canonicalUrl = `${company.domain}/products/${slug}`;
  const imageUrl = product.image.startsWith("/") ? `${company.domain}${product.image}` : product.image;

  // JSON-LD Product Schema (Only genuine product data, no fake reviews or fake ratings)
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": imageUrl,
    "description": product.description,
    "category": product.category,
    "brand": {
      "@type": "Brand",
      "name": company.authorizedBrand || company.name,
    },
    "offers": {
      "@type": "Offer",
      "url": canonicalUrl,
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "seller": {
        "@type": "LocalBusiness",
        "name": company.name,
        "telephone": `+91${company.primaryPhone}`,
      },
    },
  };

  // JSON-LD Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": company.domain,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Products",
        "item": `${company.domain}/products`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": product.name,
        "item": canonicalUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Header Banner */}
      <div className="border-b border-border bg-navy text-white">
        <div className="container-site py-6 md:py-8">
          {/* Breadcrumb UI */}
          <nav aria-label="Breadcrumb" className="mb-3">
            <ol className="flex items-center gap-2 text-xs text-gold/80">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/products" className="hover:underline">
                  Products
                </Link>
              </li>
              <li>/</li>
              <li className="font-semibold text-white">{product.name}</li>
            </ol>
          </nav>

          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
            {product.category}
          </p>
          <h1 className="mt-1 text-3xl font-bold md:text-4xl">
            {product.name} Supplier in Ahmedabad
          </h1>
        </div>
      </div>

      <section className="section-pad bg-white">
        <div className="container-site grid gap-8 lg:grid-cols-2">
          <div className="relative aspect-square overflow-hidden border border-border bg-bg-alt lg:aspect-[4/3]">
            <Image
              src={product.image}
              alt={`${product.name} dealer stockist in Vatva Ahmedabad — Mahagujarat Pipe Company`}
              fill
              className="object-contain p-2"
              sizes="(max-width:1024px) 100vw, 50vw"
              priority
            />
          </div>
          <div>
            <span className="inline-block rounded-sm bg-gold/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-navy border border-gold/30">
              {product.category}
            </span>
            <h2 className="mt-2 text-2xl font-bold text-navy md:text-3xl">
              {product.name}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-text-muted sm:text-base">
              {product.description}
            </p>

            <div className="mt-6 border-t border-border pt-4">
              <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-navy">
                Key Applications &amp; Use Cases
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {product.applications.map((app) => (
                  <li
                    key={app}
                    className="border border-border bg-bg px-3 py-1.5 text-xs font-semibold text-navy rounded-sm"
                  >
                    {app}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 border-t border-border pt-4 text-xs text-text-muted space-y-1">
              <p><strong>Stock Location:</strong> Vatva GIDC Phase 1 &amp; Pankor Naka, Ahmedabad</p>
              <p><strong>Brand Availability:</strong> Asian Tubes &amp; Pipes Authorized Stockist</p>
              <p><strong>Supply Radius:</strong> Vatva, Ahmedabad, Gujarat &amp; All India Shipping</p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappEnquireUrl(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex min-h-11 items-center justify-center bg-navy px-5 text-sm font-semibold text-white transition hover:bg-navy-mid"
              >
                Enquire via WhatsApp
              </a>
              <a
                href={company.secondaryPhoneTel}
                className="focus-ring inline-flex min-h-11 items-center justify-center border border-navy px-5 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
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
              <h2 className="text-2xl font-bold text-navy">
                Related Pipe &amp; Fitting Products
              </h2>
              <Link href="/products" className="text-sm font-semibold text-navy underline">
                View all products
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

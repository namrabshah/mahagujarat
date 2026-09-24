import type { Metadata } from "next";
import { Suspense } from "react";
import EnquiryCTA from "@/components/EnquiryCTA";
import PageHero from "@/components/PageHero";
import ProductSection from "@/components/ProductSection";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Pipes, Fittings, Valves & Flanges Catalog | Mahagujarat Pipe Company Ahmedabad",
  description:
    "Explore MS, GI, PVC, UPVC, CPVC pipes, pipe fittings, valves, flanges and plumbing products from Mahagujarat Pipe Company in Vatva GIDC & Pankor Naka, Ahmedabad, Gujarat.",
  alternates: {
    canonical: `${company.domain}/products`,
  },
  openGraph: {
    title: "Pipes, Fittings, Valves & Flanges Catalog | Mahagujarat Pipe Company Ahmedabad",
    description:
      "Full product catalog of MS, GI, PVC, UPVC, CPVC pipes, pipe fittings, industrial valves and flanges from Mahagujarat Pipe Company in Ahmedabad & Vatva.",
    url: `${company.domain}/products`,
    siteName: company.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pipes, Fittings, Valves & Flanges Catalog | Mahagujarat Pipe Company Ahmedabad",
    description:
      "Buy MS, GI, PVC, UPVC, CPVC pipes, pipe fittings, valves, flanges and plumbing accessories in Vatva GIDC & Pankor Naka, Ahmedabad.",
  },
};

export default function ProductsPage() {
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
        "name": "Products Catalog",
        "item": `${company.domain}/products`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHero
        eyebrow="Complete Catalog"
        title="Pipes, Pipe Fittings, Valves & Flanges"
        description="Browse our extensive stock of MS, GI, PVC, UPVC, CPVC pipes, fittings, valves, flanges and plumbing materials in Ahmedabad."
      />
      <Suspense fallback={<div className="section-pad bg-bg" />}>
        <ProductSection showHeading={false} />
      </Suspense>
      <EnquiryCTA />
    </>
  );
}

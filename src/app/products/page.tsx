import type { Metadata } from "next";
import { Suspense } from "react";
import EnquiryCTA from "@/components/EnquiryCTA";
import PageHero from "@/components/PageHero";
import ProductSection from "@/components/ProductSection";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse MS, GI, PVC, UPVC, CPVC pipes, fittings, valves, flanges and plumbing products from Mahagujarat Pipe Company.",
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Catalog"
        title="Our Products"
        description="Complete range of pipes, fittings, valves, flanges and plumbing products."
      />
      <Suspense fallback={<div className="section-pad bg-bg" />}>
        <ProductSection showHeading={false} />
      </Suspense>
      <EnquiryCTA />
    </>
  );
}

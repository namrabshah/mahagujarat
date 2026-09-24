import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";
import EnquiryCTA from "@/components/EnquiryCTA";
import PageHero from "@/components/PageHero";
import StoreGallery from "@/components/StoreGallery";
import { WhyChooseUs } from "@/components/TrustIntro";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "About Mahagujarat Pipe Company | Pipe Supplier in Ahmedabad Since 1955",
  description:
    "Mahagujarat Pipe Company, established in 1955, is a premier pipe dealer and supplier in Ahmedabad, Gujarat. Authorized stockist of MS, GI, PVC, UPVC, CPVC pipes, fittings, valves and flanges in Vatva GIDC & Pankor Naka.",
  alternates: {
    canonical: `${company.domain}/about`,
  },
  openGraph: {
    title: "About Mahagujarat Pipe Company | Pipe Supplier in Ahmedabad Since 1955",
    description:
      "Established in 1955, Mahagujarat Pipe Company is a leading pipe dealer and stockist in Ahmedabad, Gujarat, operating branches at Vatva GIDC Phase 1 and Pankor Naka.",
    url: `${company.domain}/about`,
    siteName: company.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Mahagujarat Pipe Company | Pipe Supplier in Ahmedabad Since 1955",
    description:
      "Mahagujarat Pipe Company (Estd. 1955) — Leading stockist & supplier of MS, GI, PVC, UPVC, CPVC pipes, fittings, valves and flanges in Vatva & Ahmedabad.",
  },
};

export default function AboutPage() {
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
        "name": "About Us",
        "item": `${company.domain}/about`,
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
        eyebrow="Established 1955"
        title="About Mahagujarat Pipe Company"
        description="Seven decades of trust as a leading pipe dealer, stockist, and supplier in Ahmedabad, Gujarat."
      />
      <AboutSection hideHeading />
      <StoreGallery />
      <WhyChooseUs />
      <EnquiryCTA />
    </>
  );
}

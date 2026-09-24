import type { Metadata } from "next";
import EnquiryCTA from "@/components/EnquiryCTA";
import LocationsSection from "@/components/LocationsSection";
import PageHero from "@/components/PageHero";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Pipe Dealer Locations in Ahmedabad | Vatva GIDC & Pankor Naka",
  description:
    "Visit Mahagujarat Pipe Company branches at Plot 87/1 Vatva GIDC Phase 1 and Pankor Naka, Ahmedabad. Contact Ketan Shah (7016633874) & Bhaven Shah (9377147202) for pipe supplies.",
  alternates: {
    canonical: `${company.domain}/locations`,
  },
  openGraph: {
    title: "Pipe Dealer Locations in Ahmedabad | Vatva GIDC & Pankor Naka",
    description:
      "Find location details, directions, phone numbers, and working hours for Mahagujarat Pipe Company branches in Vatva GIDC Phase 1 and Pankor Naka, Ahmedabad.",
    url: `${company.domain}/locations`,
    siteName: company.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pipe Dealer Locations in Ahmedabad | Vatva GIDC & Pankor Naka",
    description:
      "Visit our stockyards in Vatva GIDC Phase 1 & Pankor Naka, Ahmedabad. Call 7016633874 or 9377147202 for MS, GI, PVC, UPVC, CPVC pipe supplies.",
  },
};

export default function LocationsPage() {
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
        "name": "Locations",
        "item": `${company.domain}/locations`,
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
        eyebrow="Branch Locations"
        title="Our Locations in Ahmedabad & Vatva GIDC"
        description="Two strategic branches in Ahmedabad: Industrial stockyard in Vatva GIDC Phase 1 and City office at Pankor Naka."
      />
      <LocationsSection hideHeading />
      <EnquiryCTA />
    </>
  );
}

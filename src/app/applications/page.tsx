import type { Metadata } from "next";
import Applications from "@/components/Applications";
import EnquiryCTA from "@/components/EnquiryCTA";
import PageHero from "@/components/PageHero";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Industrial & Plumbing Applications | Mahagujarat Pipe Company Ahmedabad",
  description:
    "Piping solutions for construction, industrial plants, water supply pipelines, commercial buildings and residential plumbing across Vatva GIDC & Ahmedabad, Gujarat.",
  alternates: {
    canonical: `${company.domain}/applications`,
  },
  openGraph: {
    title: "Industrial & Plumbing Applications | Mahagujarat Pipe Company Ahmedabad",
    description:
      "Explore MS, GI, PVC, UPVC, CPVC pipe applications for construction, plumbing, chemical plants, steam lines, and water distribution in Ahmedabad & Vatva.",
    url: `${company.domain}/applications`,
    siteName: company.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial & Plumbing Applications | Mahagujarat Pipe Company Ahmedabad",
    description:
      "Pipes and fittings supplied for industrial plants, construction projects, commercial buildings and water supply in Ahmedabad & Vatva GIDC.",
  },
};

export default function ApplicationsPage() {
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
        "name": "Applications",
        "item": `${company.domain}/applications`,
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
        eyebrow="Industry Use Cases"
        title="Industrial & Plumbing Applications"
        description="High-grade pipes, fittings, valves, and flanges tailored for construction, chemical manufacturing, water supply, and building plumbing."
      />
      <Applications hideHeading />
      <EnquiryCTA />
    </>
  );
}

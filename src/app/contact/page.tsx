import type { Metadata } from "next";
import { Suspense } from "react";
import ContactSection from "@/components/ContactSection";
import EnquiryCTA from "@/components/EnquiryCTA";
import PageHero from "@/components/PageHero";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact Mahagujarat Pipe Company | Pipe Supplier in Ahmedabad",
  description:
    "Contact Mahagujarat Pipe Company in Ahmedabad, Gujarat. Call 9904796732 or 9377147202, send WhatsApp enquiries, or visit our Vatva GIDC Phase 1 & Pankor Naka branches.",
  alternates: {
    canonical: `${company.domain}/contact`,
  },
  openGraph: {
    title: "Contact Mahagujarat Pipe Company | Pipe Supplier in Ahmedabad",
    description:
      "Get phone numbers, email, WhatsApp contact details, and branch addresses for Mahagujarat Pipe Company in Vatva GIDC & Pankor Naka, Ahmedabad.",
    url: `${company.domain}/contact`,
    siteName: company.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Mahagujarat Pipe Company | Pipe Supplier in Ahmedabad",
    description:
      "Contact Ketan Shah (9904796732), Bhaven Shah (9377147202), or Taral Shah (9979258422) for pipes, fittings, valves & flanges in Ahmedabad & Vatva.",
  },
};

export default function ContactPage() {
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
        "name": "Contact Us",
        "item": `${company.domain}/contact`,
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
        eyebrow="Get In Touch"
        title="Contact Mahagujarat Pipe Company"
        description="Call, WhatsApp or visit our branches in Vatva GIDC Phase 1 and Pankor Naka, Ahmedabad for quotations and order inquiries."
      />
      <Suspense fallback={<div className="section-pad bg-white" />}>
        <ContactSection hideHeading />
      </Suspense>
      <EnquiryCTA />
    </>
  );
}

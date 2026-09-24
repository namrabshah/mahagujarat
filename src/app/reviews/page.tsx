import type { Metadata } from "next";
import EnquiryCTA from "@/components/EnquiryCTA";
import PageHero from "@/components/PageHero";
import ReviewsSection from "@/components/ReviewsSection";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Customer Reviews | Mahagujarat Pipe Company Ahmedabad",
  description:
    "Read public customer reviews and feedback for Mahagujarat Pipe Company, trusted pipe dealer and supplier in Vatva GIDC & Pankor Naka, Ahmedabad.",
  alternates: {
    canonical: `${company.domain}/reviews`,
  },
  openGraph: {
    title: "Customer Reviews | Mahagujarat Pipe Company Ahmedabad",
    description:
      "Customer reviews and testimonials for Mahagujarat Pipe Company — pipe stockist and supplier in Ahmedabad, Gujarat.",
    url: `${company.domain}/reviews`,
    siteName: company.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Reviews | Mahagujarat Pipe Company Ahmedabad",
    description:
      "Read customer feedback for Mahagujarat Pipe Company in Ahmedabad & Vatva GIDC.",
  },
};

export default function ReviewsPage() {
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
        "name": "Customer Reviews",
        "item": `${company.domain}/reviews`,
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
        eyebrow="Customer Testimonials"
        title="Customer Reviews & Feedback"
        description="Read public reviews from contractors, engineers, and industrial buyers across Ahmedabad."
      />
      <ReviewsSection hideHeading />
      <EnquiryCTA />
    </>
  );
}

import type { Metadata } from "next";
import AboutPreview from "@/components/AboutPreview";
import ApplicationsPreview from "@/components/ApplicationsPreview";
import EnquiryCTA from "@/components/EnquiryCTA";
import FaqSection from "@/components/FaqSection";
import FeaturedProductsPreview from "@/components/FeaturedProductsPreview";
import Hero from "@/components/Hero";
import HomeContent from "@/components/HomeContent";
import LocationsPreview from "@/components/LocationsPreview";
import ProductMarquee from "@/components/ProductMarquee";
import ReviewsPreview from "@/components/ReviewsPreview";
import { WhyChooseUs } from "@/components/TrustIntro";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Mahagujarat Pipe Company | Pipe Dealer & Supplier in Ahmedabad, Gujarat",
  description:
    "Mahagujarat Pipe Company is a trusted pipe dealer and supplier in Ahmedabad, Gujarat. Buy MS, GI, PVC, UPVC, CPVC pipes, pipe fittings, valves, flanges and plumbing products in Vatva, Ahmedabad.",
  alternates: {
    canonical: company.domain,
  },
  openGraph: {
    title: "Mahagujarat Pipe Company | Pipe Dealer & Supplier in Ahmedabad, Gujarat",
    description:
      "Mahagujarat Pipe Company is a trusted pipe dealer and supplier in Ahmedabad, Gujarat. Buy MS, GI, PVC, UPVC, CPVC pipes, pipe fittings, valves, flanges and plumbing products in Vatva, Ahmedabad.",
    url: company.domain,
    siteName: company.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${company.domain}/images/logo.png`,
        alt: "Mahagujarat Pipe Company — Pipe Dealer & Supplier in Ahmedabad, Gujarat",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductMarquee />
      <HomeContent />
      <AboutPreview />
      <FeaturedProductsPreview />
      <ApplicationsPreview />
      <WhyChooseUs />
      <ReviewsPreview />
      <LocationsPreview />
      <FaqSection />
      <EnquiryCTA />
    </>
  );
}

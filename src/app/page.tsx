import type { Metadata } from "next";
import AboutPreview from "@/components/AboutPreview";
import ApplicationsPreview from "@/components/ApplicationsPreview";
import EnquiryCTA from "@/components/EnquiryCTA";
import FeaturedProductsPreview from "@/components/FeaturedProductsPreview";
import Hero from "@/components/Hero";
import LocationsPreview from "@/components/LocationsPreview";
import ProductMarquee from "@/components/ProductMarquee";
import ReviewsPreview from "@/components/ReviewsPreview";
import { WhyChooseUs } from "@/components/TrustIntro";

export const metadata: Metadata = {
  title: "Mahagujarat Pipe Company | Pipe Dealer & Supplier in Ahmedabad",
  description:
    "Mahagujarat Pipe Company (Estd. 1955) is a trusted pipe dealer and supplier in Ahmedabad. We supply MS, GI, PVC, UPVC, CPVC pipes, fittings, valves and flanges in Vatva GIDC & Pankor Naka.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductMarquee />
      <AboutPreview />
      <FeaturedProductsPreview />
      <ApplicationsPreview />
      <WhyChooseUs />
      <ReviewsPreview />
      <LocationsPreview />
      <EnquiryCTA />
    </>
  );
}

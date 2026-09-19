import AboutPreview from "@/components/AboutPreview";
import ApplicationsPreview from "@/components/ApplicationsPreview";
import EnquiryCTA from "@/components/EnquiryCTA";
import FeaturedProductsPreview from "@/components/FeaturedProductsPreview";
import Hero from "@/components/Hero";
import LocationsPreview from "@/components/LocationsPreview";
import ProductMarquee from "@/components/ProductMarquee";
import ReviewsPreview from "@/components/ReviewsPreview";
import { WhyChooseUs } from "@/components/TrustIntro";

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

import type { Metadata } from "next";
import EnquiryCTA from "@/components/EnquiryCTA";
import PageHero from "@/components/PageHero";
import ReviewsSection from "@/components/ReviewsSection";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "View and write Google reviews for Mahagujarat Pipe Company. Reviews are submitted on Google, not on this website.",
  alternates: {
    canonical: "/reviews",
  },
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Feedback"
        title="Customer Reviews"
        description="Read public reviews and write a review on Google Maps."
      />
      <ReviewsSection hideHeading />
      <EnquiryCTA />
    </>
  );
}

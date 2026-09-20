import type { Metadata } from "next";
import EnquiryCTA from "@/components/EnquiryCTA";
import PageHero from "@/components/PageHero";
import ReviewsSection from "@/components/ReviewsSection";

export const metadata: Metadata = {
  title: "Customer Reviews | Mahagujarat Pipe Company Ahmedabad",
  description:
    "Read verified Google & Justdial customer reviews for Mahagujarat Pipe Company, your trusted pipe and fitting dealer in Ahmedabad.",
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

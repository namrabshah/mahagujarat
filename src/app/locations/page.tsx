import type { Metadata } from "next";
import EnquiryCTA from "@/components/EnquiryCTA";
import LocationsSection from "@/components/LocationsSection";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Mahagujarat Pipe Company | Pipe Dealer in Ahmedabad & Vatva",
  description:
    "Visit Mahagujarat Pipe Company at Vatva GIDC (Phase 1) and Pankor Naka, Ahmedabad. Get directions, contact phone numbers, and branch business hours.",
  alternates: {
    canonical: "/locations",
  },
};

export default function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Branches"
        title="Our Locations"
        description="Two Ahmedabad locations — Vatva GIDC and Pankor Naka."
      />
      <LocationsSection hideHeading />
      <EnquiryCTA />
    </>
  );
}

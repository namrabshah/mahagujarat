import type { Metadata } from "next";
import EnquiryCTA from "@/components/EnquiryCTA";
import LocationsSection from "@/components/LocationsSection";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Visit Mahagujarat Pipe Company at Vatva GIDC and Pankor Naka, Ahmedabad. Get directions on Google Maps.",
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

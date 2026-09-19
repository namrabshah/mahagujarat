import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";
import EnquiryCTA from "@/components/EnquiryCTA";
import PageHero from "@/components/PageHero";
import StoreGallery from "@/components/StoreGallery";
import { WhyChooseUs } from "@/components/TrustIntro";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "About Mahagujarat Pipe Company — established 1955 in Ahmedabad. MS, GI, PVC pipes, fittings, valves and flanges.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Since 1955"
        title="About Mahagujarat Pipe Company"
        description="An established Ahmedabad business for pipes, fittings, valves, flanges and plumbing products."
      />
      <AboutSection hideHeading />
      <StoreGallery />
      <WhyChooseUs />
      <EnquiryCTA />
    </>
  );
}

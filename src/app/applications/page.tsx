import type { Metadata } from "next";
import Applications from "@/components/Applications";
import EnquiryCTA from "@/components/EnquiryCTA";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Applications | Pipe & Fitting Use Cases | Mahagujarat Pipe Company",
  description:
    "Explore pipe and fitting applications for residential plumbing, commercial buildings, industrial piping, and municipal infrastructure across Ahmedabad & Vatva GIDC.",
  alternates: {
    canonical: "/applications",
  },
};

export default function ApplicationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Use Cases"
        title="Applications"
        description="Pipes and fittings for construction, plumbing, industry and infrastructure."
      />
      <Applications hideHeading />
      <EnquiryCTA />
    </>
  );
}

import type { Metadata } from "next";
import Applications from "@/components/Applications";
import EnquiryCTA from "@/components/EnquiryCTA";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Applications",
  description:
    "Applications for Mahagujarat Pipe Company products — residential, commercial, industrial, plumbing and more.",
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

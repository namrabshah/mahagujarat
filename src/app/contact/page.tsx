import type { Metadata } from "next";
import { Suspense } from "react";
import ContactSection from "@/components/ContactSection";
import EnquiryCTA from "@/components/EnquiryCTA";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Mahagujarat Pipe Company — call 9377147202 , WhatsApp, or send an enquiry.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Contact Us"
        description="Call, WhatsApp or send your pipe and fitting requirement."
      />
      <Suspense fallback={<div className="section-pad bg-white" />}>
        <ContactSection hideHeading />
      </Suspense>
      <EnquiryCTA />
    </>
  );
}

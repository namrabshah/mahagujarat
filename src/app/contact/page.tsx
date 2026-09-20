import type { Metadata } from "next";
import { Suspense } from "react";
import ContactSection from "@/components/ContactSection";
import EnquiryCTA from "@/components/EnquiryCTA";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact Mahagujarat Pipe Company | Ahmedabad Pipe Supplier",
  description:
    "Contact Mahagujarat Pipe Company in Ahmedabad. Call 8320622941 or 9377147202, WhatsApp us, or visit our Vatva GIDC & Pankor Naka branches.",
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

import type { Metadata } from "next";
import { Barlow_Condensed, Source_Sans_3 } from "next/font/google";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import Navbar from "@/components/Navbar";
import { company } from "@/data/company";
import "./globals.css";

const display = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const body = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mahagujaratpipe.com"),
  title: {
    default:
      "Mahagujarat Pipe Company | MS, GI & PVC Pipes & Pipe Fittings",
    template: "%s | Mahagujarat Pipe Company",
  },
  description:
    "Mahagujarat Pipe Company, established in 1955, offers MS, GI, PVC and related pipes, pipe fittings, valves, flanges and plumbing products in Ahmedabad, Gujarat.",
  openGraph: {
    title: "Mahagujarat Pipe Company | MS, GI & PVC Pipes & Pipe Fittings",
    description:
      "Mahagujarat Pipe Company, established in 1955, offers MS, GI, PVC and related pipes, pipe fittings, valves, flanges and plumbing products in Ahmedabad, Gujarat.",
    type: "website",
    locale: "en_IN",
    siteName: company.name,
    images: [{ url: company.logo, alt: company.name }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}

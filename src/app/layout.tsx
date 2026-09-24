import type { Metadata } from "next";
import Script from "next/script";
import { Barlow_Condensed, Source_Sans_3 } from "next/font/google";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import Navbar from "@/components/Navbar";
import { company } from "@/data/company";
import JsonLd from "@/components/JsonLd";
import GoogleAnalytics from "@/components/GoogleAnalytics";
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
  metadataBase: new URL(company.domain),

  title: {
    default:
      "Mahagujarat Pipe Company | Pipe Dealer & Supplier in Ahmedabad, Gujarat",
    template: "%s | Mahagujarat Pipe Company",
  },

  description:
    "Mahagujarat Pipe Company is a trusted pipe dealer and supplier in Ahmedabad, Gujarat. Buy MS, GI, PVC, UPVC, CPVC pipes, pipe fittings, valves, flanges and plumbing products in Vatva, Ahmedabad.",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
      {
        url: "/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/favicon-48x48.png",
        type: "image/png",
        sizes: "48x48",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
  },

  openGraph: {
    title:
      "Mahagujarat Pipe Company | Pipe Dealer & Supplier in Ahmedabad, Gujarat",

    description:
      "Mahagujarat Pipe Company is a trusted pipe dealer and supplier in Ahmedabad, Gujarat. Buy MS, GI, PVC, UPVC, CPVC pipes, pipe fittings, valves, flanges and plumbing products in Vatva, Ahmedabad.",

    url: company.domain,

    siteName: company.name,

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: `${company.domain}/images/logo.png`,
        alt: "Mahagujarat Pipe Company — Pipe Dealer & Supplier in Ahmedabad, Gujarat",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Mahagujarat Pipe Company | Pipe Dealer & Supplier in Ahmedabad, Gujarat",
    description:
      "Mahagujarat Pipe Company is a trusted pipe dealer and supplier in Ahmedabad, Gujarat. Buy MS, GI, PVC, UPVC, CPVC pipes, pipe fittings, valves, flanges and plumbing products in Vatva, Ahmedabad.",
    images: [`${company.domain}/images/logo.png`],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <JsonLd />

        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S48PRHH4DR"
          strategy="beforeInteractive"
        />

        <Script id="google-analytics" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-S48PRHH4DR');
          `}
        </Script>
      </head>

      <body
        className="flex min-h-full flex-col antialiased"
        suppressHydrationWarning
      >
        <GoogleAnalytics />

        <Navbar />

        <main className="flex-1">{children}</main>

        <Footer />

        <MobileActionBar />
      </body>
    </html>
  );
}
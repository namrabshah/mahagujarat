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
  metadataBase: new URL("https://www.mahagujaratpipe.in"),

  title: {
    default:
      "Mahagujarat Pipe Company | Pipe Dealer & Supplier in Ahmedabad Since 1955",
    template: "%s | Mahagujarat Pipe Company",
  },

  description:
    "Mahagujarat Pipe Company, established in 1955, is a pipe dealer and supplier in Ahmedabad, Gujarat, offering MS, GI, PVC, UPVC and CPVC pipes, pipe fittings, valves, flanges and plumbing products.",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },

  openGraph: {
    title:
      "Mahagujarat Pipe Company | Pipe Dealer & Supplier in Ahmedabad Since 1955",

    description:
      "Established in 1955, Mahagujarat Pipe Company supplies MS, GI, PVC, UPVC and CPVC pipes, pipe fittings, valves, flanges and plumbing products in Ahmedabad, Gujarat.",

    url: "https://www.mahagujaratpipe.in",

    siteName: company.name,

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: company.logo,
        alt: "Mahagujarat Pipe Company",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
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
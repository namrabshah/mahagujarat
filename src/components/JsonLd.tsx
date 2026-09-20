import { company } from "@/data/company";

export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "Store"],
        "@id": "https://mahagujaratpipe.in/#organization",
        "name": company.name,
        "alternateName": [company.shortName, company.nameGu],
        "url": "https://mahagujaratpipe.in",
        "logo": "https://mahagujaratpipe.in/images/logo.png",
        "image": "https://mahagujaratpipe.in/images/logo.png",
        "email": company.email,
        "telephone": `+91${company.primaryPhone}`,
        "foundingDate": company.established,
        "description": company.detailedDescription,
        "priceRange": "₹₹",
        "address": {
          "@type": "PostalAddress",
          "streetAddress":
            "Plot No. 87/1, B/S Shree Ram Krupa Weigh Bridge, Near NeekaTube Chowkdi, Vatva GIDC Phase 1",
          "addressLocality": "Ahmedabad",
          "addressRegion": "Gujarat",
          "postalCode": "382445",
          "addressCountry": "IN",
        },
        "department": [
          {
            "@type": "LocalBusiness",
            "name": `${company.name} - Vatva GIDC Branch`,
            "telephone": `+91${company.locations.vatva.phone}`,
            "address": {
              "@type": "PostalAddress",
              "streetAddress":
                "Plot No. 87/1, B/S Shree Ram Krupa Weigh Bridge, Near NeekaTube Chowkdi, Vatva GIDC Phase 1",
              "addressLocality": "Ahmedabad",
              "addressRegion": "Gujarat",
              "postalCode": "382445",
              "addressCountry": "IN",
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                "opens": "09:00",
                "closes": "19:30",
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Sunday"],
                "opens": "09:00",
                "closes": "12:30",
              },
            ],
          },
          {
            "@type": "LocalBusiness",
            "name": `${company.name} - Pankor Naka Branch`,
            "telephone": `+91${company.locations.pankor.phone}`,
            "address": {
              "@type": "PostalAddress",
              "streetAddress":
                "2HGP+7MH, Nr. Sahjanand Market, Pankor Naka",
              "addressLocality": "Ahmedabad",
              "addressRegion": "Gujarat",
              "postalCode": "380001",
              "addressCountry": "IN",
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                "opens": "10:00",
                "closes": "19:30",
              },
            ],
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

import { company } from "@/data/company";

export default function JsonLd() {
  const domain = company.domain; // https://www.mahagujaratpipe.in

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${domain}/#organization`,
        "name": company.name,
        "alternateName": [company.shortName, company.nameGu, company.nameUpper],
        "url": domain,
        "logo": {
          "@type": "ImageObject",
          "url": `${domain}/images/logo.png`,
          "caption": company.name,
        },
        "image": `${domain}/images/logo.png`,
        "email": company.email,
        "telephone": `+91${company.primaryPhone}`,
        "foundingDate": company.established,
        "description": company.detailedDescription,
        "knowsAbout": [
          "Pipe dealer and supplier in Ahmedabad",
          "MS pipes and fittings",
          "GI pipes and fittings",
          "PVC, UPVC and CPVC plumbing pipes",
          "Industrial valves and flanges",
          "Plumbing material supplier",
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": `+91${company.contacts.ketan.phone}`,
            "contactType": "sales",
            "name": company.contacts.ketan.name,
            "areaServed": "IN",
            "availableLanguage": ["en", "gu", "hi"],
          },
          {
            "@type": "ContactPoint",
            "telephone": `+91${company.contacts.bhaven.phone}`,
            "contactType": "customer service",
            "name": company.contacts.bhaven.name,
            "areaServed": "IN",
            "availableLanguage": ["en", "gu", "hi"],
          },
          {
            "@type": "ContactPoint",
            "telephone": `+91${company.contacts.taral.phone}`,
            "contactType": "sales",
            "name": company.contacts.taral.name,
            "areaServed": "IN",
            "availableLanguage": ["en", "gu", "hi"],
          },
        ],
      },
      {
        "@type": ["LocalBusiness", "WholesaleStore", "PlumbingSupplyStore"],
        "@id": `${domain}/#localbusiness`,
        "name": company.name,
        "alternateName": [company.shortName, company.nameGu],
        "url": domain,
        "logo": `${domain}/images/logo.png`,
        "image": `${domain}/images/logo.png`,
        "email": company.email,
        "telephone": `+91${company.primaryPhone}`,
        "foundingDate": company.established,
        "description": company.detailedDescription,
        "priceRange": "₹₹",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Pipes, Fittings, Valves & Flanges Catalog",
          "itemListElement": [
            {
              "@type": "OfferCatalog",
              "name": "MS Pipes & Fittings",
            },
            {
              "@type": "OfferCatalog",
              "name": "GI Pipes & Fittings",
            },
            {
              "@type": "OfferCatalog",
              "name": "PVC, UPVC & CPVC Pipes",
            },
            {
              "@type": "OfferCatalog",
              "name": "Industrial Valves & Flanges",
            },
          ],
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress":
            "Plot No. 87/1, B/S Shree Ram Krupa Weigh Bridge, Near NeekaTube Chowkdi, Vatva GIDC Phase 1",
          "addressLocality": "Ahmedabad",
          "addressRegion": "Gujarat",
          "postalCode": "382445",
          "addressCountry": "IN",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": company.locations.vatva.geo.latitude,
          "longitude": company.locations.vatva.geo.longitude,
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
        "department": [
          {
            "@type": ["LocalBusiness", "PlumbingSupplyStore"],
            "name": `${company.name} — Vatva GIDC Branch`,
            "telephone": `+91${company.locations.vatva.phone}`,
            "url": `${domain}/locations`,
            "address": {
              "@type": "PostalAddress",
              "streetAddress":
                "Plot No. 87/1, B/S Shree Ram Krupa Weigh Bridge, Near NeekaTube Chowkdi, Vatva GIDC Phase 1",
              "addressLocality": "Ahmedabad",
              "addressRegion": "Gujarat",
              "postalCode": "382445",
              "addressCountry": "IN",
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": company.locations.vatva.geo.latitude,
              "longitude": company.locations.vatva.geo.longitude,
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
            "@type": ["LocalBusiness", "PlumbingSupplyStore"],
            "name": `${company.name} — Pankor Naka Branch`,
            "telephone": `+91${company.locations.pankor.phone}`,
            "url": `${domain}/locations`,
            "address": {
              "@type": "PostalAddress",
              "streetAddress":
                "2HGP+7MH, Nr. Sahjanand Market, Pankor Naka",
              "addressLocality": "Ahmedabad",
              "addressRegion": "Gujarat",
              "postalCode": "380001",
              "addressCountry": "IN",
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": company.locations.pankor.geo.latitude,
              "longitude": company.locations.pankor.geo.longitude,
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

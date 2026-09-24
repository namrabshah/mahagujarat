/**
 * Central company configuration for Mahagujarat Pipe Company.
 * All phone numbers, emails, addresses and Maps links must come from here.
 * Do not hardcode contact details in individual components.
 */

export const company = {
  name: "Mahagujarat Pipe Company",
  shortName: "Mahagujarat Pipe Co.",
  nameGu: "મહાગુજરાત પાઈપ કંપની",
  nameUpper: "MAHAGUJARAT PIPE COMPANY",
  established: "1955",
  tagline: "Your Trusted Partner for Pipes & Pipe Fittings",
  email: "mahagujarat1955@gmail.com",
  emailMailto: "mailto:mahagujarat1955@gmail.com",
  domain: "https://www.mahagujaratpipe.in",
  city: "Ahmedabad, Gujarat, India",
  gstin: "24AAEFM7426J1Z7",
  logo: "/images/logo.png",

  /** Primary customer contact */
  primaryPhone: "7016633874",
  primaryPhoneDisplay: "7016633874",
  primaryPhoneTel: "tel:+917016633874",

  /** Primary WhatsApp number — MUST BE 9377147202 */
  primaryWhatsApp: "919377147202",

  /** Secondary company number */
  secondaryPhone: "9377147202",
  secondaryPhoneDisplay: "9377147202",
  secondaryPhoneTel: "tel:+919377147202",

  /** Business Working Hours */
  workingHours: {
    weekdays: "Mon – Sat: 9:00 AM – 7:30 PM",
    sunday: "Sunday: 9:00 AM – 12:30 PM",
    display: "Mon–Sat: 9:00 AM – 7:30 PM | Sun: 9:00 AM – 12:30 PM",
    shortDisplay: "Mon–Sat: 9 AM – 7:30 PM, Sun: 9 AM – 12:30 PM",
  },

  /** Key Contact Persons */
  contacts: {
    ketan: {
      name: "Ketan Shah",
      phone: "7016633874",
      phoneTel: "tel:+917016633874",
    },
    bhaven: {
      name: "Bhaven Shah",
      phone: "9377147202",
      phoneTel: "tel:+919377147202",
    },
    taral: {
      name: "Taral Shah",
      phone: "9979258422",
      phoneTel: "tel:+919979258422",
    },
  },

  /** Authorized Brand & Detailed Description */
  authorizedBrand: "Asian Tubes & Pipes",
  detailedDescription:
    "Mahagujarat Pipe Company (Estd. 1955) is a leading stockist and supplier of G.I. & M.S. Round & Square Pipes & Fittings for Water & Steam, Flanges, G.M. Valves & Cocks, Water Meters, PVC, UPVC & CPVC pipes & plumbing solutions in Ahmedabad. Authorized stockist for Asian Tubes & Pipes.",

  productLine:
    "MS, GI, PVC, UPVC, CPVC pipes, fittings, valves, flanges and plumbing products",

  locations: {
    vatva: {
      id: "vatva",
      name: "Vatva GIDC",
      label: "Industrial Branch",
      addressLines: [
        "Plot No. 87/1,",
        "B/S Shree Ram Krupa Weigh Bridge,",
        "Near NeekaTube Chowkdi,",
        "Vatva GIDC Phase 1,",
        "Ahmedabad-382445, Gujarat",
      ],
      address:
        "Plot No.87/1, B/S Shree Ram Krupa WeighBridge,Near Neeka Tube Chowkdi,Vatva GIDC Phase1, Ahmedabad-382445, Gujarat",
      contacts: [
        { name: "Ketan Shah", phone: "7016633874", phoneTel: "tel:+917016633874" },
        { name: "Bhaven Shah", phone: "9377147202", phoneTel: "tel:+919377147202" },
      ],
      phone: "7016633874",
      phoneTel: "tel:+917016633874",
      hours: "Mon–Sat: 9:00 AM – 7:30 PM | Sun: 9:00 AM – 12:30 PM",
      mapsSearchUrl:
        "https://www.google.com/maps/search/?api=1&query=Mahagujarat+Pipe+Company+87%2F1+Vatva+GIDC+Ahmedabad",
      directionsUrl:
        "https://www.google.com/maps/dir/?api=1&destination=Mahagujarat+Pipe+Company+87%2F1+B%2Fs.+Shree+Ram+krupa+Weigh+bridge+Near+neeka+tube+chokdi+phase-1+vatva",
      geo: {
        latitude: "22.9566",
        longitude: "72.6341",
      },
      image: "/images/company/mahagujrat_logo.png",
    },
    pankor: {
      id: "pankor",
      name: "Pankor Naka",
      label: "City Branch",
      addressLines: [
        "2HGP+7MH, Nr. Sahjanand Market,",
        "Pankor Naka,",
        "Ahmedabad - 380001, Gujarat",
      ],
      address:
        "2HGP+7MH, Nr. Sahjanand Market, Pankor Naka, Ahmedabad - 380001, Gujarat",
      phone: "9979258422",
      phoneTel: "tel:+919979258422",
      contactPerson: "Taral Shah",
      hours: "Mon–Sat: 10:00 AM – 7:30 PM | Sunday: Closed",
      geo: {
        latitude: "23.0248",
        longitude: "72.5861",
      },
      mapsSearchUrl:
        "https://www.google.com/maps/search/?api=1&query=2HGP%2B7MH+Mahagujrat+Pipe+Company+Ahmedabad",
      directionsUrl:
        "https://www.google.com/maps/dir/?api=1&destination=2HGP%2B7MH,+Ahmedabad,+Gujarat+380001",
      image: "/images/company/mahagujarat_pankornaka.png",
    },
  },

  reviews: {
    viewUrl:
      "https://www.google.com/maps/search/?api=1&query=Mahagujarat%20Pipe%20Company%20Vatva%20Ahmedabad",
    writeUrl:
      "https://www.google.com/maps/search/?api=1&query=Mahagujarat%20Pipe%20Company%20Ahmedabad",
    researchedOn: "September 2026",
  },
} as const;

export type CompanyLocation =
  (typeof company.locations)[keyof typeof company.locations];

export function whatsappEnquireUrl(productName?: string) {
  const text = productName
    ? `Hello Mahagujarat Pipe Company, I would like to enquire about ${productName}.`
    : "Hello Mahagujarat Pipe Company, I would like to enquire about your pipes and pipe fittings.";
  return `https://wa.me/${company.primaryWhatsApp}?text=${encodeURIComponent(text)}`;
}

export function whatsappFormUrl(data: {
  name: string;
  mobile: string;
  email?: string;
  product: string;
  message: string;
}) {
  const text = `Hello Mahagujarat Pipe Company,\n\nI would like to make an enquiry.\n\n*Customer Details*\nName: ${data.name.trim()}\nMobile: ${data.mobile.trim()}\nEmail: ${data.email?.trim() || "Not provided"}\n\n*Requirement*\nProduct: ${data.product.trim()}\n\nMessage:\n${data.message.trim()}\n\nThank you.`;

  return `https://wa.me/${company.primaryWhatsApp}?text=${encodeURIComponent(text)}`;
}

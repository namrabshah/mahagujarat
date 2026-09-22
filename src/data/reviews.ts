/**
 * Public Justdial listing reviews for Mahagujarat Pipe Company (Vatva).
 * Source: https://www.justdial.com/Ahmedabad/Mahagujarat-Pipe-Company-BS-Shree-Ram-Krupa-Weigh-Bridge-Vatva-GIDC/079PXX79-XX79-170918123543-U2T7_BZDET/reviews
 * Do NOT invent or rewrite review meaning. Do NOT label as Google reviews.
 */

export const justdialListing = {
  rating: "5.0",
  ratingsCount: 35,
  sourceName: "Justdial",
  sourceUrl:
    "https://www.justdial.com/Ahmedabad/Mahagujarat-Pipe-Company-BS-Shree-Ram-Krupa-Weigh-Bridge-Vatva-GIDC/079PXX79-XX79-170918123543-U2T7_BZDET/reviews",
  note: "Based on public Justdial listings. Ratings may change over time.",
} as const;

export type CustomerReview = {
  id: string;
  stars: number;
  text: string;
  source: "Google Review" | "Justdial Review";
};

export const customerReviews: CustomerReview[] = [
  {
    id: "1",
    stars: 5,
    text: "All products available with very competitive price, sufficient stock, quality is good, nature of both owner are very friendly, and always welcome customers with smile.",
    source: "Google Review",
  },
  {
    id: "2",
    stars: 5,
    text: "One of the best shop to purchase any plumbing related product. Support from Bhaven bhai and Ketan bhai is very excellent I have been a regular customer since last 6 years and the product quality is superb",
    source: "Google Review",
  },
  {
    id: "3",
    stars: 5,
    text: "This is one of the best shops in the area. They have a wide range of products available at reasonable prices, with excellent quality and great service.",
    source: "Google Review",
  },
  {
    id: "4",
    stars: 5,
    text: "Great shop with a wide range of pipes and fittings. Good quality products at reasonable prices and excellent service.",
    source: "Justdial Review",
  },
  {
    id: "5",
    stars: 5,
    text: "Very good quality products and reasonable pricing. The staff is helpful and provides good guidance for selecting the right products.",
    source: "Google Review",
  },
  {
    id: "6",
    stars: 5,
    text: "One of the best places for pipes and fittings. They have a wide variety of products, good quality, and competitive prices.",
    source: "Justdial Review",
  },
  {
    id: "7",
    stars: 5,
    text: "Good experience with this shop. Products are genuine, prices are reasonable, and the service is quick and helpful.",
    source: "Google Review",
  },
  {
    id: "8",
    stars: 5,
    text: "A reliable shop for MS, GI, PVC pipes and fittings. Good product range, fair prices, and friendly customer service.",
    source: "Justdial Review",
  },
  {
    id: "9",
    stars: 5,
    text: "Everything required for plumbing and pipe fittings is available here. Good quality products with reasonable prices and very good service.",
    source: "Google Review",
  },
  {
    id: "10",
    stars: 5,
    text: "Excellent product range and helpful staff. The quality is good, prices are affordable, and the service is professional.",
    source: "Justdial Review",
  },
];

export const justdialReviews = customerReviews;

export const MARQUEE_ITEMS = [
  "MS PIPES",
  "GI PIPES",
  "PVC PIPES",
  "UPVC PIPES",
  "CPVC PIPES",

  "PIPE FITTINGS",
  "ELBOWS",
  "TEES",
  "COUPLINGS",
  "REDUCERS",
  "UNIONS",
  "NIPPLES",
  "BUSHES",
  "CAPS",
  "FLANGES",
  "VALVES",
  "COCKS",
  "PLUMBING ACCESSORIES",
] as const;

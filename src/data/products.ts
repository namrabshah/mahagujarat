export type ProductFilter =
  | "All"
  | "MS"
  | "GI"
  | "PVC"
  | "UPVC"
  | "CPVC"
  | "Fittings"
  | "Valves"
  | "Flanges"
  | "Plumbing";

export type ProductGroup =
  | "Pipes"
  | "Pipe Fittings"
  | "Valves & Cocks"
  | "Flanges"
  | "Plumbing / Bathroom";

export type Product = {
  slug: string;
  name: string;
  category: ProductGroup;
  materials: ProductFilter[];
  filterTags: ProductFilter[];
  image: string;
  shortDescription: string;
  description: string;
  applications: string[];
};

export const PRODUCT_FILTERS: ProductFilter[] = [
  "All",
  "MS",
  "GI",
  "PVC",
  "UPVC",
  "CPVC",
  "Fittings",
  "Valves",
  "Flanges",
  "Plumbing",
];

export const PRODUCT_DROPDOWN = [
  { label: "MS Pipes", href: "/products/ms-pipes" },
  { label: "GI Pipes", href: "/products/gi-pipes" },
  { label: "PVC Pipes", href: "/products/pvc-pipes" },
  { label: "UPVC / CPVC", href: "/products?filter=UPVC" },
  { label: "Pipe Fittings", href: "/products?filter=Fittings" },
  { label: "Valves", href: "/products?filter=Valves" },
  { label: "Flanges", href: "/products?filter=Flanges" },
  { label: "Accessories", href: "/products?filter=Plumbing" },
] as const;

const IMG = {
  steel: "/images/mspipe.png",
  fittings: "/images/pipefitting.jpg",
  pvc: "/images/pvcc.png",
  upvc: "/images/cpvcc.png",
  cpvc: "/images/cpvcc.png",
  valves: "/images/products-photo/valves.jpg",
  flange: "/images/flange.png",
  plumbing: "/images/plumbing.png",
  water: "/images/water.png",
  watervalve: "/images/watervalve.png",
  ballvalve: "/images/ball.png",
  gatevalve: "/images/gatevalve.jpg",
  gmvalve: "/images/gmvalue.png",
  bathroom: "/images/bathroom.png",
  workshop: "/images/products-photo/warehouse.jpg",
  hero: "/images/hero/hero-pipe-fittings.png",
  gi: "/images/gipipe.png",
  stock: "/images/products-photo/steel-stock.jpg",
  mselbow: "/images/mselbow.png",
  gielbow: "/images/gielbow.png",
  pvcelbow: "/images/pvcelbow.png",
  tee: "/images/tee.png",
  coupling: "/images/coupling.png",
  reducer: "/images/reducer.png",
  union: "/images/union.png",
  nipple: "/images/nipple.png",
  bush: "/images/bushh.png",
  cap: "/images/cap.png",
  bend: "/images/pipebend.png",
} as const;

export const products: Product[] = [
  {
    slug: "ms-pipes",
    name: "MS Pipes",
    category: "Pipes",
    materials: ["MS"],
    filterTags: ["MS"],
    image: IMG.steel,
    shortDescription: "Mild steel round, square and rectangle pipes.",
    description:
      "MS pipes for construction, fabrication and industrial piping. Available in round, square and rectangle sections for structural and utility applications.",
    applications: ["Construction", "Fabrication", "Industrial piping"],
  },
  {
    slug: "gi-pipes",
    name: "GI Pipes",
    category: "Pipes",
    materials: ["GI"],
    filterTags: ["GI"],
    image: IMG.gi,
    shortDescription: "Galvanized iron pipes for water and utility lines.",
    description:
      "GI pipes suited for water supply, plumbing and general utility installations where galvanized finish is preferred.",
    applications: ["Water supply", "Plumbing", "Utility lines"],
  },
  {
    slug: "pvc-pipes",
    name: "PVC Pipes",
    category: "Pipes",
    materials: ["PVC"],
    filterTags: ["PVC"],
    image: "/images/pvcc.png",
    shortDescription: "PVC pipes for plumbing and drainage systems.",
    description:
      "PVC pipes for residential and commercial plumbing, drainage and related water systems.",
    applications: ["Plumbing", "Drainage", "Residential projects"],
  },
  {
    slug: "upvc-pipes",
    name: "UPVC Pipes",
    category: "Pipes",
    materials: ["UPVC"],
    filterTags: ["UPVC", "PVC"],
    image: "/images/cpvcc.png",
    shortDescription: "UPVC pipes for pressure and plumbing applications.",
    description:
      "UPVC pipe products for plumbing and related installations in residential and commercial projects.",
    applications: ["Plumbing", "Commercial buildings", "Water lines"],
  },
  {
    slug: "cpvc-pipes",
    name: "CPVC Pipes",
    category: "Pipes",
    materials: ["CPVC"],
    filterTags: ["CPVC", "PVC"],
    image: "/images/cpvcc.png",
    shortDescription: "CPVC pipes for hot and cold water plumbing.",
    description:
      "CPVC pipes suitable for hot and cold water plumbing systems in buildings and industrial utility areas.",
    applications: ["Hot & cold water", "Bathroom plumbing", "Buildings"],
  },

  {
    slug: "ms-elbow",
    name: "MS Elbow",
    category: "Pipe Fittings",
    materials: ["MS"],
    filterTags: ["MS", "Fittings"],
    image: IMG.mselbow,
    shortDescription: "MS elbows for direction change in steel lines.",
    description:
      "MS elbows used to change pipe direction in mild steel piping layouts for industrial and construction work.",
    applications: ["Industrial piping", "Fabrication", "Construction"],
  },
  {
    slug: "gi-elbow",
    name: "GI Elbow",
    category: "Pipe Fittings",
    materials: ["GI"],
    filterTags: ["GI", "Fittings"],
    image: IMG.gielbow,
    shortDescription: "GI elbows for galvanized pipe systems.",
    description:
      "Galvanized elbows for water and utility lines using GI pipes and fittings.",
    applications: ["Water supply", "Plumbing", "Utility"],
  },
  {
    slug: "pvc-elbow",
    name: "PVC Elbow",
    category: "Pipe Fittings",
    materials: ["PVC"],
    filterTags: ["PVC", "Fittings"],
    image: IMG.pvcelbow,
    shortDescription: "PVC elbows for plumbing direction changes.",
    description:
      "PVC elbows for residential and commercial plumbing layouts.",
    applications: ["Plumbing", "Drainage", "Residential"],
  },
  {
    slug: "tee",
    name: "Tee",
    category: "Pipe Fittings",
    materials: ["MS", "GI", "PVC"],
    filterTags: ["Fittings", "MS", "GI", "PVC"],
    image: IMG.tee,
    shortDescription: "Pipe tees for branching lines.",
    description:
      "Equal and reducing tees for branching pipe networks in MS, GI and PVC systems.",
    applications: ["Distribution lines", "Plumbing", "Industrial"],
  },
  {
    slug: "coupling",
    name: "Coupling",
    category: "Pipe Fittings",
    materials: ["MS", "GI", "PVC"],
    filterTags: ["Fittings"],
    image: IMG.coupling,
    shortDescription: "Couplings for joining straight pipe runs.",
    description:
      "Pipe couplings used to join straight sections in steel and PVC piping.",
    applications: ["Installation", "Repair", "Plumbing"],
  },
  {
    slug: "reducer",
    name: "Reducer",
    category: "Pipe Fittings",
    materials: ["MS", "GI"],
    filterTags: ["Fittings", "MS", "GI"],
    image: IMG.reducer,
    shortDescription: "Reducers for size transitions.",
    description:
      "Reducers to connect pipes of different diameters in industrial and plumbing systems.",
    applications: ["Size transition", "Industrial", "Water lines"],
  },
  {
    slug: "union",
    name: "Union",
    category: "Pipe Fittings",
    materials: ["MS", "GI"],
    filterTags: ["Fittings"],
    image: IMG.union,
    shortDescription: "Unions for removable pipe joints.",
    description:
      "Pipe unions for joints that may need to be opened for maintenance or assembly.",
    applications: ["Maintenance", "Installation", "Utility"],
  },
  {
    slug: "nipple",
    name: "Nipple",
    category: "Pipe Fittings",
    materials: ["MS", "GI"],
    filterTags: ["Fittings"],
    image: IMG.nipple,
    shortDescription: "Threaded nipples for pipe extensions.",
    description:
      "Threaded pipe nipples for connecting and extending pipe sections.",
    applications: ["Plumbing", "Industrial fittings", "Connections"],
  },
  {
    slug: "bush",
    name: "Bush",
    category: "Pipe Fittings",
    materials: ["MS", "GI"],
    filterTags: ["Fittings"],
    image: IMG.bush,
    shortDescription: "Reducing bushes for threaded transitions.",
    description:
      "Bushes for threaded size transitions in pipe and fitting assemblies.",
    applications: ["Threaded joints", "Plumbing", "Industrial"],
  },
  {
    slug: "bend",
    name: "Bend",
    category: "Pipe Fittings",
    materials: ["MS", "GI", "PVC"],
    filterTags: ["Fittings", "PVC"],
    image: IMG.bend,
    shortDescription: "Pipe bends for smooth direction changes.",
    description:
      "Pipe bends for layouts that need a smoother turn than a sharp elbow.",
    applications: ["Plumbing", "Water lines", "Utility"],
  },
  {
    slug: "ball-valve",
    name: "Ball Valve",
    category: "Valves & Cocks",
    materials: ["MS", "GI"],
    filterTags: ["Valves"],
    image: IMG.ballvalve,
    shortDescription: "Ball valves for reliable shut-off control.",
    description:
      "Ball valves used for on/off control in water and industrial pipe lines.",
    applications: ["Flow control", "Water lines", "Industrial"],
  },
  {
    slug: "gate-valve",
    name: "Gate Valve",
    category: "Valves & Cocks",
    materials: ["MS", "GI"],
    filterTags: ["Valves"],
    image: IMG.gatevalve,
    shortDescription: "Gate valves for isolation duties.",
    description:
      "Gate valves for isolation in utility and industrial piping systems.",
    applications: ["Isolation", "Utility", "Industrial"],
  },
  {
    slug: "gm-valve",
    name: "GM Valve",
    category: "Valves & Cocks",
    materials: [],
    filterTags: ["Valves"],
    image: IMG.gmvalve,
    shortDescription: "Gunmetal valves for water and steam lines.",
    description:
      "GM valves for water, steam and related line control applications.",
    applications: ["Water", "Steam", "Utility"],
  },
  {
    slug: "water-valve",
    name: "Water Valve",
    category: "Valves & Cocks",
    materials: [],
    filterTags: ["Valves", "Plumbing"],
    image: IMG.watervalve,
    shortDescription: "Valves for water supply systems.",
    description:
      "Water valves for plumbing and water distribution requirements.",
    applications: ["Water supply", "Plumbing", "Buildings"],
  },
  {
    slug: "other-valves",
    name: "Other Valves",
    category: "Valves & Cocks",
    materials: [],
    filterTags: ["Valves"],
    image: IMG.valves,
    shortDescription: "Additional valve types for pipe systems.",
    description:
      "Related valve products to support industrial and plumbing installations.",
    applications: ["Industrial", "Plumbing", "Utility"],
  },
  {
    slug: "pipe-flanges",
    name: "Pipe Flanges",
    category: "Flanges",
    materials: ["MS", "GI"],
    filterTags: ["Flanges", "MS", "GI"],
    image: IMG.flange,
    shortDescription: "Complete range of pipe flanges for strong, reliable connections.",
    description:
      "Wide range of pipe flanges including Weld Neck, Slip On, Blind, Socket Weld, Threaded, Lap Joint, Plate, Orifice, Spectacle Blind, and Reducing Flanges. Available in Carbon Steel, Stainless Steel, Alloy Steel, Cast Iron, PVC, CPVC, UPVC, and Brass materials with RFF, FF, RTJ, M&F, and T&G facing types.",
    applications: [
      "Industrial Piping",
      "High Pressure Systems",
      "Water Supply & Plumbing",
      "Chemical & Utility Lines",
    ],
  },
  {
    slug: "bathroom-fittings",
    name: "Bathroom Fittings",
    category: "Plumbing / Bathroom",
    materials: [],
    filterTags: ["Plumbing"],
    image: IMG.bathroom,
    shortDescription: "Bathroom fitting related products.",
    description:
      "Bathroom and sanitary related fittings for residential and commercial plumbing needs.",
    applications: ["Bathroom", "Residential", "Commercial"],
  },
  {
    slug: "water-accessories",
    name: "Water-related Accessories",
    category: "Plumbing / Bathroom",
    materials: [],
    filterTags: ["Plumbing"],
    image: IMG.water,
    shortDescription: "Water meter and water-line accessories.",
    description:
      "Water-related accessories including products associated with water lines and metering setups.",
    applications: ["Water supply", "Plumbing", "Utility"],
  },
  {
    slug: "plumbing-accessories",
    name: "Plumbing Accessories",
    category: "Plumbing / Bathroom",
    materials: [],
    filterTags: ["Plumbing", "Fittings"],
    image: IMG.plumbing,
    shortDescription: "General plumbing accessories and support items.",
    description:
      "Supporting plumbing accessories for installation and everyday pipe work.",
    applications: ["Plumbing", "Installation", "Maintenance"],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(slug: string, limit = 4) {
  const current = getProductBySlug(slug);
  if (!current) return products.slice(0, limit);
  return products
    .filter(
      (p) =>
        p.slug !== slug &&
        (p.category === current.category ||
          p.filterTags.some((t) => current.filterTags.includes(t))),
    )
    .slice(0, limit);
}

export function filterProducts(filter: ProductFilter) {
  if (filter === "All") return products;
  return products.filter((p) => p.filterTags.includes(filter));
}

export const categoryCards = [
  {
    title: "MS Pipes",
    href: "/products/ms-pipes",
    image: "/images/mspipe.png",
    text: "Round, square & rectangle mild steel pipes.",
  },
  {
    title: "GI Pipes",
    href: "/products/gi-pipes",
    image: "/images/gipipe.png",
    text: "Galvanized pipes for water & utility lines.",
  },
  {
    title: "PVC / UPVC / CPVC",
    href: "/products?filter=PVC",
    image: "/images/pvc.png",
    text: "Plastic piping for plumbing & drainage.",
  },
  {
    title: "Pipe Fittings",
    href: "/products?filter=Fittings",
    image: "/images/pipefitting.jpg",
    text: "Elbows, tees, couplings, reducers & more.",
  },
  {
    title: "Valves & Cocks",
    href: "/products?filter=Valves",
    image: "/images/products-photo/valves.jpg",
    text: "Ball, gate, GM valves and gas cocks.",
  },
  {
    title: "Flanges",
    href: "/products?filter=Flanges",
    image: "/images/products-photo/flanges.jpg",
    text: "MS & GI flanges for bolted joints.",
  },

  {
    title: "Bathroom & Plumbing",
    href: "/products?filter=Plumbing",
    image: "/images/products-photo/plumbing.jpg",
    text: "Bathroom fittings & plumbing accessories.",
  },
] as const;

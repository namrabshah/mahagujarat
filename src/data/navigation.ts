import { company } from "./company";

export const NAV_LINKS = [
  { href: "/", label: "Home", match: "exact" as const },
  { href: "/about", label: "About", match: "prefix" as const },
  {
    href: "/products",
    label: "Products",
    match: "prefix" as const,
    children: [
      { href: "/products/ms-pipes", label: "MS Pipes" },
      { href: "/products/gi-pipes", label: "GI Pipes" },
      { href: "/products/pvc-pipes", label: "PVC Pipes" },
      { href: "/products?filter=UPVC", label: "UPVC / CPVC" },
      { href: "/products?filter=Fittings", label: "Pipe Fittings" },
      { href: "/products?filter=Valves", label: "Valves" },
      { href: "/products?filter=Flanges", label: "Flanges" },
      { href: "/products?filter=Plumbing", label: "Plumbing Accessories" },
    ],
  },
  { href: "/applications", label: "Applications", match: "prefix" as const },
  { href: "/locations", label: "Locations", match: "prefix" as const },
  { href: "/reviews", label: "Reviews", match: "prefix" as const },
  { href: "/contact", label: "Contact", match: "prefix" as const },
] as const;

/**
 * Exactly one primary nav item can be active.
 * Home is exact-only. Products covers /products and /products/*.
 * Other routes use prefix matching against their own path only.
 */
export function isNavActive(
  pathname: string,
  href: string,
  match: "exact" | "prefix",
): boolean {
  if (href === "/") {
    return pathname === "/";
  }
  if (href === "/products") {
    return pathname === "/products" || pathname.startsWith("/products/");
  }
  if (match === "exact") {
    return pathname === href;
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export const FOOTER_COMPANY = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Locations", href: "/locations" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const FOOTER_PRODUCTS = [
  { label: "MS Pipes", href: "/products/ms-pipes" },
  { label: "GI Pipes", href: "/products/gi-pipes" },
  { label: "PVC Pipes", href: "/products/pvc-pipes" },
  { label: "UPVC / CPVC", href: "/products?filter=UPVC" },
  { label: "Pipe Fittings", href: "/products?filter=Fittings" },
  { label: "Valves", href: "/products?filter=Valves" },
  { label: "Flanges", href: "/products?filter=Flanges" },
  { label: "Plumbing", href: "/products?filter=Plumbing" },
] as const;

export const FOOTER_LINKS = [
  { label: "Products", href: "/products" },
  { label: "Applications", href: "/applications" },
  { label: "Customer Reviews", href: "/reviews" },
] as const;

export { company };

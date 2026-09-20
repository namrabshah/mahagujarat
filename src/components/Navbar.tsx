"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { company } from "@/data/company";
import { isNavActive, NAV_LINKS } from "@/data/navigation";
import { CloseIcon, MenuIcon, PhoneIcon } from "./Icons";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownId = useId();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    setMobileProductsOpen(false);
    setProductsOpen(false);
  };

  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setProductsOpen(true);
  };

  const scheduleCloseDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setProductsOpen(false), 180);
  };

  return (
    <header
      className={`sticky top-0 z-[1000] border-b border-border bg-white transition-shadow duration-300 ${scrolled ? "shadow-md" : "shadow-sm"
        }`}
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8">
        <div className="flex min-h-[76px] items-center justify-between gap-3 md:min-h-[96px] md:gap-6">
          <Link
            href="/"
            className="focus-ring shrink-0 rounded-sm py-1"
            aria-label={`${company.name} home`}
            onClick={closeMenu}
          >
            <Image
              src={company.logo}
              alt="Mahagujarat Pipe Company logo — Since 1955"
              width={441}
              height={234}
              className="navbar-logo block h-[56px] w-auto object-contain sm:h-[68px] md:h-[78px] lg:h-[86px]"
              priority
            />
          </Link>

          <nav
            className="hidden items-center gap-1 xl:flex xl:gap-2"
            aria-label="Primary"
          >
            {NAV_LINKS.map((link) => {
              const active = isNavActive(pathname, link.href, link.match);
              const hasChildren = "children" in link && !!link.children;

              if (hasChildren) {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={openDropdown}
                    onMouseLeave={scheduleCloseDropdown}
                  >
                    <button
                      type="button"
                      className={`nav-item focus-ring inline-flex items-center rounded-sm px-3 py-2.5 text-[15px] font-semibold tracking-wide ${active ? "nav-item-active" : ""
                        }`}
                      aria-expanded={productsOpen}
                      aria-haspopup="menu"
                      aria-controls={dropdownId}
                      onClick={() => setProductsOpen((v) => !v)}
                      onFocus={openDropdown}
                    >
                      <span>{link.label}</span>
                      <svg
                        className={`ml-1.5 h-4 w-4 fill-current transition-transform duration-200 ${productsOpen ? "rotate-180 text-gold" : "opacity-80"
                          }`}
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <div
                      id={dropdownId}
                      role="menu"
                      className={`absolute left-0 top-full z-[9999] min-w-[15rem] pt-2 transition ${productsOpen
                          ? "pointer-events-auto visible opacity-100"
                          : "pointer-events-none invisible opacity-0"
                        }`}
                      onMouseEnter={openDropdown}
                      onMouseLeave={scheduleCloseDropdown}
                    >
                      <div className="rounded-lg border border-[#e5e7eb] bg-white py-3 shadow-[0_15px_40px_rgba(0,0,0,0.12)]">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            role="menuitem"
                            className="focus-ring block px-4 py-2.5 text-sm text-text-muted transition hover:bg-bg-alt hover:text-navy"
                            onClick={closeMenu}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-item focus-ring rounded-sm px-3 py-2.5 text-[15px] font-semibold tracking-wide ${active ? "nav-item-active" : ""
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a
              href={company.secondaryPhoneTel}
              className="focus-ring hidden items-center gap-2 rounded-sm text-sm font-semibold text-navy lg:inline-flex"
            >
              <PhoneIcon size={17} className="text-gold" />
              <span>{company.secondaryPhoneDisplay}</span>
            </a>
            <a
              href={company.secondaryPhoneTel}
              className="focus-ring hidden h-11 items-center justify-center rounded-sm bg-navy px-4 text-sm font-semibold text-white transition hover:bg-navy-mid md:inline-flex"
            >
              Call Now
            </a>
            <button
              type="button"
              className="focus-ring inline-flex h-12 w-12 items-center justify-center rounded-sm border border-border text-navy xl:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`max-h-[min(78vh,36rem)] overflow-y-auto border-t border-border bg-white xl:hidden ${open ? "block" : "hidden"
          }`}
      >
        <nav
          className="container-site flex flex-col gap-0.5 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
          aria-label="Mobile"
        >
          {NAV_LINKS.map((link) => {
            const active = isNavActive(pathname, link.href, link.match);
            const hasChildren = "children" in link && !!link.children;

            if (hasChildren) {
              return (
                <div key={link.href} className="border-b border-border/60">
                  <button
                    type="button"
                    className={`focus-ring flex w-full items-center justify-between px-3 py-3.5 text-left text-sm font-semibold ${active ? "bg-bg-alt text-navy" : "text-text-muted"
                      }`}
                    aria-expanded={mobileProductsOpen}
                    onClick={() => setMobileProductsOpen((v) => !v)}
                  >
                    <span>{link.label}</span>
                    <span aria-hidden className="text-gold">
                      {mobileProductsOpen ? "−" : "+"}
                    </span>
                  </button>
                  {mobileProductsOpen ? (
                    <div className="mb-2 ml-2 flex flex-col border-l-2 border-gold/40 pl-2">
                      <Link
                        href="/products"
                        onClick={closeMenu}
                        className="focus-ring px-3 py-2.5 text-sm text-text-muted hover:text-navy"
                      >
                        All Products
                      </Link>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={closeMenu}
                          className="focus-ring px-3 py-2.5 text-sm text-text-muted hover:text-navy"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`focus-ring px-3 py-3.5 text-sm font-semibold ${active
                    ? "border-l-2 border-gold bg-bg-alt text-navy"
                    : "text-text-muted hover:bg-bg-alt hover:text-navy"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={company.secondaryPhoneTel}
            onClick={closeMenu}
            className="focus-ring mt-3 rounded-sm bg-navy px-3 py-3.5 text-center text-sm font-semibold text-white"
          >
            Call {company.secondaryPhoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}

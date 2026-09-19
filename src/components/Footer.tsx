import Image from "next/image";
import Link from "next/link";
import { company, whatsappEnquireUrl } from "@/data/company";
import {
  FOOTER_COMPANY,
  FOOTER_LINKS,
  FOOTER_PRODUCTS,
} from "@/data/navigation";
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="container-site pb-10 pt-12 md:pt-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-1 xl:col-span-1">
            <div className="inline-block rounded-md bg-white p-2.5">
              <Image
                src={company.logo}
                alt="Mahagujarat Pipe Company logo"
                width={441}
                height={234}
                className="h-16 w-auto object-contain sm:h-[76px]"
              />
            </div>
            <p className="mt-4 font-display text-lg font-bold leading-tight">
              {company.name}
            </p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              Since {company.established}
            </p>
            <p className="mt-3 max-w-xs text-sm text-steel-light">
              {company.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-gold">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_COMPANY.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="focus-ring text-sm text-steel-light hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-gold">
              Products
            </h3>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_PRODUCTS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="focus-ring text-sm text-steel-light hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-gold">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="focus-ring text-sm text-steel-light hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-gold">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-steel-light">
              <li>
                <a
                  href={company.primaryPhoneTel}
                  className="focus-ring inline-flex items-center gap-2 hover:text-white"
                >
                  <PhoneIcon size={16} className="text-gold" />
                  {company.primaryPhoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={company.secondaryPhoneTel}
                  className="focus-ring inline-flex items-center gap-2 hover:text-white"
                >
                  <PhoneIcon size={16} className="text-gold" />
                  {company.secondaryPhoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={company.emailMailto}
                  className="focus-ring inline-flex items-start gap-2 hover:text-white"
                >
                  <MailIcon size={16} className="mt-0.5 shrink-0 text-gold" />
                  <span className="break-all">{company.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPinIcon size={16} className="mt-0.5 shrink-0 text-gold" />
                <span>
                  Vatva GIDC
                  <br />
                  Pankor Naka
                </span>
              </li>
              <li className="flex items-start gap-2 pt-1 border-t border-white/10">
                <ClockIcon size={16} className="mt-0.5 shrink-0 text-gold" />
                <div className="text-xs">
                  <span className="block font-semibold text-white">Mon – Sat:</span>
                  <span className="text-steel-light">9:00 AM – 7:30 PM</span>
                  <span className="block font-semibold text-white mt-1">Sunday:</span>
                  <span className="text-steel-light">9:00 AM – 12:30 PM</span>
                </div>
              </li>
            </ul>
            <a
              href={whatsappEnquireUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-4 inline-flex rounded-sm bg-gold px-3 py-2 text-sm font-bold text-navy-deep"
            >
              WhatsApp Enquiry
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-steel-light/80">
          © 2026 Mahagujarat Pipe Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

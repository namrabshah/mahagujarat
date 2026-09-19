import Image from "next/image";
import Link from "next/link";
import { company } from "@/data/company";
import { PhoneIcon } from "./Icons";

const HERO_IMG = "/images/hero/hero-pipe-fittings.png";

export default function Hero() {
  return (
    <section className="relative bg-navy-deep text-white">
      {/* Soft background — low opacity so it does not compete with content */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <Image
          src={HERO_IMG}
          alt=""
          fill
          priority
          className="object-cover object-center opacity-[0.1]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy-deep/90" />
      </div>

      <div className="relative mx-auto w-full max-w-[1400px] px-4 py-12 sm:px-8 sm:py-14 md:px-10 lg:px-10 lg:py-[70px]">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
          {/* Text */}
          <div className="order-1 min-w-0">
            <span className="inline-flex rounded-sm border border-gold/45 bg-gold/10 px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold-soft">
              Established Since {company.established}
            </span>

            <h1 className="mt-5 text-[1.75rem] font-bold leading-[1.12] sm:text-4xl md:text-[2.6rem] lg:text-[2.85rem]">
              Your Trusted Partner for Pipes &amp; Pipe Fittings
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-steel-light sm:text-base md:text-lg">
              MS, GI, PVC, UPVC, CPVC pipes, fittings, valves, flanges and
              plumbing products for industrial, commercial and residential
              requirements.
            </p>

            {/* Desktop CTAs stay with text */}
            <div className="mt-8 hidden flex-wrap gap-3 lg:flex">
              <HeroButtons />
            </div>
          </div>

          {/* Full hero image — no fixed height crop */}
          <div className="order-2 mx-auto w-full min-w-0 max-w-[680px] lg:mx-0 lg:max-w-none">
            <div className="overflow-hidden rounded-xl border border-white/15 bg-[#0a2038] shadow-2xl shadow-black/30">
              <Image
                src={HERO_IMG}
                alt="MS, GI and PVC pipes, pipe fittings, valves and flanges — Mahagujarat Pipe Company"
                width={1600}
                height={900}
                priority
                className="h-auto w-full"
                sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 680px"
              />
            </div>
          </div>

          {/* Mobile CTAs after image */}
          <div className="order-3 flex flex-col gap-3 min-[440px]:flex-row min-[440px]:flex-wrap lg:hidden">
            <HeroButtons />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroButtons() {
  return (
    <>
      <a
        href={company.primaryPhoneTel}
        className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-gold px-5 py-3 text-sm font-bold text-navy-deep transition hover:bg-gold-soft"
      >
        <PhoneIcon size={17} />
        Call Now · {company.primaryPhoneDisplay}
      </a>
      <Link
        href="/products"
        className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm border border-white/35 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
      >
        Explore Products
      </Link>
      <Link
        href="/locations"
        className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm border border-white/20 px-5 py-3 text-sm font-semibold text-steel-light transition hover:border-white/40 hover:text-white"
      >
        Get Directions
      </Link>
    </>
  );
}

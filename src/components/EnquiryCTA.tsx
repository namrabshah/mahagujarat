import Link from "next/link";
import { company } from "@/data/company";
import FadeIn from "./FadeIn";
import { PhoneIcon } from "./Icons";

export default function EnquiryCTA() {
  return (
    <section className="relative overflow-hidden bg-navy-mid">
      <div className="absolute inset-0 industrial-grid opacity-25" />
      <div className="container-site relative py-12 md:py-16">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center text-white">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
              Looking for Pipes or Pipe Fittings?
            </h2>
            <p className="mt-4 text-sm text-steel-light sm:text-base">
              Share your requirement — MS, GI, PVC, fittings, valves or flanges —
              and we will help you with the right product.
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
              <a
                href={company.primaryPhoneTel}
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-gold px-5 text-sm font-bold text-navy-deep"
              >
                <PhoneIcon size={18} />
                Call {company.primaryPhoneDisplay}
              </a>
              <Link
                href="/contact#send-enquiry"
                className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm border border-white/35 bg-white/5 px-6 text-sm font-bold text-white transition hover:bg-white/15"
              >
                Send Enquiry
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

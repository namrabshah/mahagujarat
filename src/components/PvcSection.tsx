import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { whatsappEnquireUrl } from "@/data/company";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

const items = products.filter((p) =>
  [
    "pvc-pipes",
    "upvc-pipes",
    "cpvc-pipes",
    "pvc-elbow",
    "tee",
    "coupling",
    "bend",
    "plumbing-accessories",
  ].includes(p.slug),
);

export default function PvcSection() {
  return (
    <section className="section-pad bg-white" id="pvc">
      <div className="container-site">
        <FadeIn>
          <SectionHeading
            eyebrow="Plastic Piping"
            title="PVC, UPVC & CPVC Pipes & Fittings"
            subtitle="PVC, UPVC and CPVC pipes with elbows, tees, couplings, bends and accessories."
          />
        </FadeIn>

        <FadeIn>
          <div className="mb-8 overflow-hidden border border-border">
            <div className="relative aspect-[21/9] min-h-[180px] sm:min-h-[220px]">
              <Image
                src="/images/pvcc.png"
                alt="PVC pipes for plumbing applications"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-4 min-[400px]:grid-cols-2 lg:grid-cols-4">
          {items.map((p, i) => (
            <FadeIn key={p.slug} delay={(i % 4) * 40}>
              <article className="flex h-full flex-col border border-border bg-bg">
                <div className="relative aspect-[5/4] overflow-hidden bg-white">
                  <Image
                    src={
                      p.slug === "upvc-pipes" || p.slug === "cpvc-pipes"
                        ? "/images/cpvcc.png"
                        : p.slug === "pvc-pipes"
                        ? "/images/pvcc.png"
                        : p.image
                    }
                    alt={p.name}
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="font-bold text-navy">{p.name}</h3>
                  <p className="mt-2 flex-1 text-sm text-text-muted">
                    {p.shortDescription}
                  </p>
                  <a
                    href={whatsappEnquireUrl(p.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring mt-3 inline-flex justify-center bg-navy py-2.5 text-xs font-semibold text-white"
                  >
                    Enquire Now
                  </a>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/products?filter=PVC"
            className="focus-ring text-sm font-semibold text-navy underline"
          >
            View all PVC products
          </Link>
        </div>
      </div>
    </section>
  );
}

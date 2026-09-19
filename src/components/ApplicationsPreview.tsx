import Image from "next/image";
import Link from "next/link";
import { applications } from "@/data/applications";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

export default function ApplicationsPreview() {
  // Show first 4 applications on preview
  const previewApps = applications.slice(0, 4);

  return (
    <section className="section-pad bg-white">
      <div className="container-site">
        <FadeIn>
          <SectionHeading
            align="center"
            eyebrow="Where We Serve"
            title="Key Industry Applications"
            subtitle="High-performance piping solutions engineered for industrial, commercial, residential, and infrastructure applications."
          />
        </FadeIn>

        <div className="mt-8 grid grid-cols-1 gap-4 min-[400px]:grid-cols-2 lg:grid-cols-4">
          {previewApps.map((app, i) => (
            <FadeIn key={app.id} delay={i * 40}>
              <div className="overflow-hidden border border-border bg-bg rounded-lg h-full flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src={app.image}
                    alt={app.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-navy text-base">{app.name}</h3>
                    <p className="mt-1.5 text-xs text-text-muted leading-relaxed">
                      {app.description}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/applications"
            className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-sm border border-navy bg-white px-7 text-sm font-semibold text-navy transition hover:bg-bg"
          >
            <span>View All Applications</span>
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

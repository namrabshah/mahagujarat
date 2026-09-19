import Image from "next/image";
import { applications } from "@/data/applications";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

type Props = { hideHeading?: boolean };

export default function Applications({ hideHeading = false }: Props) {
  return (
    <section className="section-pad bg-bg" id="applications">
      <div className="container-site">
        {!hideHeading ? (
          <FadeIn>
            <SectionHeading
              eyebrow="Where We Serve"
              title="Applications"
              subtitle="Pipes and fittings for residential, commercial, industrial and plumbing projects."
            />
          </FadeIn>
        ) : null}
        <div className="grid grid-cols-1 gap-4 min-[400px]:grid-cols-2 lg:grid-cols-3">
          {applications.map((app, i) => (
            <FadeIn key={app.id} delay={(i % 3) * 40}>
              <article className="overflow-hidden border border-border bg-white">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={app.image}
                    alt={app.name}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-navy">{app.name}</h3>
                  <p className="mt-2 text-sm text-text-muted">{app.description}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

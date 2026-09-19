import Link from "next/link";
import { customerReviews } from "@/data/reviews";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

function Stars({ count }: { count: number }) {
  return (
    <span className="tracking-wide text-gold" aria-label={`${count} stars`}>
      {"★".repeat(count)}
    </span>
  );
}

export default function ReviewsPreview() {
  // Show 3 distinct reviews in preview
  const topReviews = customerReviews.slice(0, 3);

  return (
    <section className="section-pad bg-bg">
      <div className="container-site">
        <FadeIn>
          <SectionHeading
            align="center"
            eyebrow="Customer Feedback"
            title="What Our Clients Say"
            subtitle="Rated 5/5 based on public customer reviews on Google & Justdial."
          />
        </FadeIn>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {topReviews.map((review, i) => (
            <FadeIn key={review.id} delay={i * 40}>
              <blockquote className="flex flex-col justify-between h-full border border-border bg-white p-5 rounded-lg shadow-sm">
                <div>
                  <Stars count={review.stars} />
                  <p className="mt-3 text-sm leading-relaxed font-medium text-navy">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-[0.7rem] text-text-muted">
                  <span className="font-semibold text-navy">Public Review</span>
                  <span className="rounded bg-bg px-2 py-0.5 font-semibold text-gold border border-border/80">
                    Source: {review.source}
                  </span>
                </div>
              </blockquote>
            </FadeIn>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/reviews"
            className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-navy px-7 text-sm font-semibold text-white transition hover:bg-navy-mid"
          >
            <span>View All Reviews</span>
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

import { company } from "@/data/company";
import { justdialListing, customerReviews } from "@/data/reviews";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

function Stars({ count }: { count: number }) {
  return (
    <span className="tracking-wide text-gold" aria-label={`${count} stars`}>
      {"★".repeat(count)}
    </span>
  );
}

type Props = { hideHeading?: boolean };

export default function ReviewsSection({ hideHeading = false }: Props) {
  // 7 reviews for marquee track, 3 stable reviews for static grid below
  const marqueeReviews = customerReviews.slice(3, 10);
  const stableReviews = customerReviews.slice(0, 3);

  return (
    <section className="section-pad bg-white" id="reviews">
      <div className="container-site">
        {!hideHeading ? (
          <FadeIn>
            <SectionHeading
              eyebrow="Customer Feedback"
              title="Customer Reviews"
              subtitle="Public reviews from our valued customers on Google & Justdial."
            />
          </FadeIn>
        ) : null}

        {/* Marquee Track with 7 Reviews */}
        <FadeIn>
          <div className="mb-10 overflow-hidden border border-border bg-bg rounded-lg shadow-sm">
            <div className="marquee-track flex w-max gap-4 py-4 hover:[animation-play-state:paused]">
              {[...marqueeReviews, ...marqueeReviews].map((review, i) => (
                <blockquote
                  key={`${review.id}-${i}`}
                  className="mx-2 w-[280px] shrink-0 flex flex-col justify-between border border-border bg-white p-4 rounded-md shadow-sm sm:w-[320px]"
                >
                  <div>
                    <Stars count={review.stars} />
                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed font-medium text-navy">
                      &ldquo;{review.text}&rdquo;
                    </p>
                  </div>
                 
                </blockquote>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* 3 Stable Review Cards Below */}
        <div className="grid gap-5 sm:grid-cols-3">
          {stableReviews.map((review, i) => (
            <FadeIn key={review.id} delay={i * 50}>
              <blockquote className="flex flex-col justify-between h-full border border-border bg-bg p-5 rounded-lg shadow-sm">
                <div>
                  <Stars count={review.stars} />
                  <p className="mt-3 text-sm leading-relaxed font-medium text-navy">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>
               
              </blockquote>
            </FadeIn>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={justdialListing.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex min-h-11 items-center justify-center rounded-sm border border-navy px-5 text-sm font-semibold text-navy hover:bg-bg transition"
          >
            View Reviews on Justdial
          </a>
          <a
            href={company.reviews.viewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex min-h-11 items-center justify-center rounded-sm bg-navy px-5 text-sm font-semibold text-white hover:bg-navy-mid transition"
          >
            View Google Reviews
          </a>
          <a
            href={company.reviews.writeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex min-h-11 items-center justify-center rounded-sm bg-gold px-5 text-sm font-bold text-navy-deep hover:bg-gold/90 transition"
          >
            Review Us on Google
          </a>
        </div>
      </div>
    </section>
  );
}

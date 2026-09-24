import Link from "next/link";
import { company } from "@/data/company";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

export default function HomeContent() {
  return (
    <section className="section-pad bg-white" id="overview">
      <div className="container-site">
        <FadeIn>
          <SectionHeading
            eyebrow="Trusted Stockist & Distributor"
            title="Leading Pipe Dealer & Supplier in Ahmedabad, Gujarat"
            subtitle="Supplying MS, GI, PVC, UPVC, CPVC pipes, pipe fittings, industrial valves and flanges across Vatva GIDC & Ahmedabad."
          />
        </FadeIn>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          {/* Main Business Profile */}
          <FadeIn delay={100}>
            <div className="space-y-4 text-sm leading-relaxed text-text-muted sm:text-base">
              <h3 className="text-xl font-bold text-navy">
                About Mahagujarat Pipe Company
              </h3>
              <p>
                Established in 1955, <strong>Mahagujarat Pipe Company</strong> is a premier{" "}
                <strong>pipe dealer and supplier in Ahmedabad, Gujarat</strong>. With over seven decades 
                of industry experience, we serve industrial, commercial, residential, and infrastructure projects 
                with high-grade piping solutions and plumbing materials.
              </p>
              <p>
                Operating from two prime commercial hubs — our industrial stockyard in <strong>Vatva GIDC Phase 1</strong>{" "}
                and our city office at <strong>Pankor Naka, Ahmedabad</strong> — we maintain extensive stocks of 
                mild steel (MS), galvanized iron (GI), PVC, UPVC, and CPVC piping systems to ensure prompt delivery across Gujarat.
              </p>
              <p>
                As an authorized stockist for <strong>Asian Tubes &amp; Pipes</strong>, we supply certified products 
                engineered for water supply pipelines, high-pressure steam systems, chemical process lines, fire safety networks, 
                and general building plumbing.
              </p>
            </div>
          </FadeIn>

          {/* Product Categories Summary */}
          <FadeIn delay={200}>
            <div className="rounded-lg border border-border bg-bg p-6 sm:p-8">
              <h3 className="text-xl font-bold text-navy mb-4">
                Our Complete Product Spectrum
              </h3>
              <ul className="space-y-3 text-sm sm:text-base text-text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-1 font-bold text-gold">✓</span>
                  <span>
                    <strong className="text-navy">MS Pipes (Mild Steel):</strong> ERW round, square, and rectangular pipes for structural fabrication, construction, and heavy industrial piping.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 font-bold text-gold">✓</span>
                  <span>
                    <strong className="text-navy">GI Pipes (Galvanized Iron):</strong> Heavy-duty zinc-coated pipes for potable water distribution, plumbing, and rust-resistant utility setups.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 font-bold text-gold">✓</span>
                  <span>
                    <strong className="text-navy">PVC, UPVC &amp; CPVC Pipes:</strong> Corrosion-free thermoplastic pipes for domestic water supply, hot &amp; cold water plumbing, and chemical drainage.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 font-bold text-gold">✓</span>
                  <span>
                    <strong className="text-navy">Pipe Fittings:</strong> Forged and malleable elbows, tees, reducers, couplings, unions, nipples, bushes, caps, and pipe bends.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 font-bold text-gold">✓</span>
                  <span>
                    <strong className="text-navy">Industrial Valves &amp; Flanges:</strong> Ball valves, gate valves, gunmetal (GM) valves, water meters, and MS/GI pipe flanges for leak-proof joints.
                  </span>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* Detailed Material Breakdown Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FadeIn delay={100}>
            <div className="h-full rounded-md border border-border bg-white p-6 shadow-sm">
              <h4 className="text-lg font-bold text-navy mb-2">MS Pipe Supplier in Vatva &amp; Ahmedabad</h4>
              <p className="text-xs text-gold uppercase tracking-wider font-semibold mb-3">Industrial &amp; Fabrication Steel</p>
              <p className="text-sm text-text-muted leading-relaxed">
                We stock heavy-grade MS round, square, and rectangular ERW pipes for structural fabrication, warehouse construction, equipment frames, and fluid conveyance in Vatva GIDC industrial belt.
              </p>
              <Link href="/products/ms-pipes" className="mt-4 inline-block text-xs font-bold uppercase tracking-wider text-navy hover:underline">
                Explore MS Pipes →
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="h-full rounded-md border border-border bg-white p-6 shadow-sm">
              <h4 className="text-lg font-bold text-navy mb-2">GI Pipe Dealer in Ahmedabad</h4>
              <p className="text-xs text-gold uppercase tracking-wider font-semibold mb-3">Galvanized Water &amp; Steam Lines</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Galvanized iron pipes designed to prevent internal corrosion in municipal water mains, fire hydrant networks, agricultural irrigation, and industrial steam supply lines.
              </p>
              <Link href="/products/gi-pipes" className="mt-4 inline-block text-xs font-bold uppercase tracking-wider text-navy hover:underline">
                Explore GI Pipes →
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="h-full rounded-md border border-border bg-white p-6 shadow-sm">
              <h4 className="text-lg font-bold text-navy mb-2">PVC, UPVC &amp; CPVC Plumbing Pipes</h4>
              <p className="text-xs text-gold uppercase tracking-wider font-semibold mb-3">Residential &amp; Commercial Plumbing</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Unplasticized and Chlorinated PVC plumbing pipes ideal for hot/cold water supply, sanitary lines, rainwater harvesting, and chemical processing in residential and commercial buildings.
              </p>
              <Link href="/products/pvc-pipes" className="mt-4 inline-block text-xs font-bold uppercase tracking-wider text-navy hover:underline">
                Explore Plastic Pipes →
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={250}>
            <div className="h-full rounded-md border border-border bg-white p-6 shadow-sm">
              <h4 className="text-lg font-bold text-navy mb-2">Pipe Fitting Supplier Ahmedabad</h4>
              <p className="text-xs text-gold uppercase tracking-wider font-semibold mb-3">Complete Range of Connectors</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Precision-engineered elbows, tees, reducers, couplings, unions, hex nipples, bushes, caps, and long-radius bends in MS, GI, and PVC to ensure seamless directional changes.
              </p>
              <Link href="/products?filter=Fittings" className="mt-4 inline-block text-xs font-bold uppercase tracking-wider text-navy hover:underline">
                Explore Pipe Fittings →
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="h-full rounded-md border border-border bg-white p-6 shadow-sm">
              <h4 className="text-lg font-bold text-navy mb-2">Industrial Valve &amp; Flange Stockist</h4>
              <p className="text-xs text-gold uppercase tracking-wider font-semibold mb-3">Flow Control &amp; Flanged Joints</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Gunmetal (GM) valves, brass ball valves, cast iron gate valves, non-return valves (NRV), water meters, and weld-neck, slip-on, blind MS/GI flanges for industrial pipelines.
              </p>
              <Link href="/products?filter=Valves" className="mt-4 inline-block text-xs font-bold uppercase tracking-wider text-navy hover:underline">
                Explore Valves &amp; Flanges →
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={350}>
            <div className="h-full rounded-md border border-border bg-white p-6 shadow-sm">
              <h4 className="text-lg font-bold text-navy mb-2">Plumbing Material Supplier Vatva</h4>
              <p className="text-xs text-gold uppercase tracking-wider font-semibold mb-3">Turnkey Supply Solutions</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Serving contractors, plumbing engineers, fabricators, and factory managers across Vatva GIDC Phase 1, Phase 2, Phase 3, Odhav, Naroda, Changodar, and greater Ahmedabad.
              </p>
              <Link href="/locations" className="mt-4 inline-block text-xs font-bold uppercase tracking-wider text-navy hover:underline">
                Visit Our Branches →
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

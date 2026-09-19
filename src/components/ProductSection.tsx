"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  filterProducts,
  PRODUCT_FILTERS,
  type ProductFilter,
} from "@/data/products";
import FadeIn from "./FadeIn";
import ProductCard from "./ProductCard";
import SectionHeading from "./SectionHeading";

type Props = {
  showHeading?: boolean;
};

export default function ProductSection({ showHeading = true }: Props) {
  const searchParams = useSearchParams();
  const query = searchParams.get("filter");
  const queryFilter =
    query && PRODUCT_FILTERS.includes(query as ProductFilter)
      ? (query as ProductFilter)
      : null;

  const [manualFilter, setManualFilter] = useState<ProductFilter | null>(null);
  const filter = manualFilter ?? queryFilter ?? "All";

  const filtered = useMemo(() => filterProducts(filter), [filter]);

  return (
    <section className="section-pad bg-bg" id="products">
      <div className="container-site">
        {showHeading ? (
          <FadeIn>
            <SectionHeading
              eyebrow="Product Catalog"
              title="Our Products"
              subtitle="MS, GI, PVC, UPVC, CPVC pipes, fittings, valves, flanges and plumbing products."
            />
          </FadeIn>
        ) : null}

        <div className="mb-8">
          <label htmlFor="product-filter" className="sr-only">
            Filter products
          </label>
          <div className="sm:hidden">
            <select
              id="product-filter"
              value={filter}
              onChange={(e) => setManualFilter(e.target.value as ProductFilter)}
              className="focus-ring w-full rounded-sm border border-border bg-white px-3 py-3 text-sm font-semibold text-navy"
            >
              {PRODUCT_FILTERS.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
          </div>
          <div
            className="scrollbar-hide hidden gap-2 overflow-x-auto pb-1 sm:flex"
            role="tablist"
            aria-label="Product filters"
          >
            {PRODUCT_FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={filter === f}
                onClick={() => setManualFilter(f)}
                className={`focus-ring shrink-0 rounded-sm border px-4 py-2.5 text-sm font-semibold transition ${
                  filter === f
                    ? "border-navy bg-navy text-white"
                    : "border-border bg-white text-text-muted hover:text-navy"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 min-[400px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((product, i) => (
            <FadeIn key={product.slug} delay={(i % 4) * 40}>
              <ProductCard product={product} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { whatsappEnquireUrl } from "@/data/company";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden border border-border bg-white transition hover:-translate-y-0.5 hover:border-navy/25 hover:shadow-md">
      <Link href={`/products/${product.slug}`} className="relative block aspect-[4/3] overflow-hidden bg-slate-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-1 transition duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </Link>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-gold">
          {product.category}
        </p>
        <h3 className="mt-1.5 text-lg font-bold text-navy">
          <Link href={`/products/${product.slug}`} className="focus-ring hover:underline">
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
          {product.shortDescription}
        </p>
        <a
          href={whatsappEnquireUrl(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring mt-4 inline-flex min-h-10 items-center justify-center rounded-sm bg-navy px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-mid"
        >
          Enquire Now
        </a>
      </div>
    </article>
  );
}

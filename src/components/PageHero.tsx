type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
}: PageHeroProps) {
  return (
    <div className="relative overflow-hidden border-b border-border bg-navy text-white">
      <div className="absolute inset-0 industrial-grid opacity-20" aria-hidden />
      <div className="container-site relative flex flex-col items-center text-center py-10 sm:py-12 md:py-16">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold sm:text-xs">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
          {title}
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-steel-light sm:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-20">
      <span className="uppercase tracking-widest text-xs text-[#6b6b6b]">
        {subtitle}
      </span>
      <h1 className="font-serif text-4xl mt-2 mb-6">{title}</h1>
      <div className="space-y-6">{children}</div>
    </section>
  );
}

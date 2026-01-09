export function Event({
  title,
  theory,
  children,
}: {
  title: string;
  theory: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative pl-8 border-l border-[#d6d3cd]">
      <div className="absolute -left-[6px] top-1 w-3 h-3 bg-[#8b5e3c] rounded-full" />
      <h3 className="font-serif text-xl">{title}</h3>
      <p className="text-xs text-[#6b6b6b] italic">{theory}</p>
      <p>{children}</p>
    </div>
  );
}

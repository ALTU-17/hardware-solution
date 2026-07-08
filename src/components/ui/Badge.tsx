interface Props {
  children: React.ReactNode;
}

export default function Badge({
  children,
}: Props) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#C89B3C]/30 bg-[#C89B3C]/10 px-4 py-2 text-xs font-medium uppercase tracking-[3px] text-[#C89B3C]">
      {children}
    </span>
  );
}
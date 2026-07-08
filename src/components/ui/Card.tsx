import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-[#141414] p-8 transition-all duration-300 hover:border-[#C89B3C]/40 hover:shadow-[0_10px_50px_rgba(200,155,60,.15)] ${className}`}
    >
      {children}
    </div>
  );
}
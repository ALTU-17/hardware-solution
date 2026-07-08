import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`mx-auto w-full max-w-[1500px] px-6 md:px-8 xl:px-12 ${className}`}
    >
      {children}
    </div>
  );
}
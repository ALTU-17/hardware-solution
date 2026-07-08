import { ReactNode } from "react";

interface Props {
  id?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  id,
  children,
  className = "",
}: Props) {
  return (
    <section
      id={id}
      className={`py-24 md:py-32 xl:py-40 ${className}`}
    >
      {children}
    </section>
  );
}
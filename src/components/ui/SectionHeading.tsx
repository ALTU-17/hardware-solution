interface Props {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  center = true,
}: Props) {
  return (
    <div
      className={`mb-16 ${
        center ? "text-center" : ""
      }`}
    >
      {subtitle && (
        <p className="uppercase tracking-[8px] text-[#C89B3C] text-sm font-medium mb-4">
          {subtitle}
        </p>
      )}

      <h2 className="text-4xl md:text-5xl xl:text-6xl font-black leading-tight">
        {title}
      </h2>
    </div>
  );
}
type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="text-center py-16">

      <p className="text-[#C89B3C] uppercase tracking-[5px]">
        {subtitle}
      </p>

      <h2 className="text-5xl font-bold mt-3">
        {title}
      </h2>

    </div>
  );
} 
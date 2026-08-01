type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-16 max-w-3xl">
      {eyebrow && (
        <p className="mb-3 font-medium uppercase tracking-widest text-cyan-400">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-bold">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-5 text-lg leading-8 text-slate-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}
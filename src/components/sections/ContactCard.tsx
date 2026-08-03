type Props = {
  title: string;
  value: string;
  href: string;
};

export default function ContactCard({
  title,
  value,
  href,
}: Props) {
  const isExternal =
    href.startsWith("http") || href.startsWith("mailto:");

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="block rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-[0_25px_60px_rgba(6,182,212,0.12)]"
    >
      <p className="text-sm uppercase tracking-wider text-cyan-400">
        {title}
      </p>

      <h3 className="mt-3 break-all text-lg font-semibold">
        {value}
      </h3>
    </a>
  );
}
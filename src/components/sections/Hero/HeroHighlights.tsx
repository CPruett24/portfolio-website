export default function HeroHighlights() {
  const stats = [
    {
      value: "3+",
      label: "Major Projects",
    },
    {
      value: "50K+",
      label: "Vehicle Knowledge Base",
    },
    {
      value: "4+",
      label: "Core Languages",
    },
    {
      value: "AI",
      label: "Focused Development",
    },
  ];

  return (
    <dl className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 text-center backdrop-blur-xl"
        >
          <dt className="mt-2 text-sm font-medium text-slate-400">
            {stat.label}
          </dt>

          <dd className="mt-2 text-3xl font-black text-cyan-400">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
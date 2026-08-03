export default function HeroStats() {
  const stats = [
    {
      value: "3+",
      label: "Major Projects",
    },
    {
      value: "CS",
      label: "Computer Science",
    },
    {
      value: "AI",
      label: "Machine Learning & Automation",
    },
  ];

  return (
    <div className="mt-16 grid grid-cols-3 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-white/10 bg-slate-900/60 p-6"
        >
          <h3 className="text-3xl font-bold text-cyan-400">
            {stat.value}
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
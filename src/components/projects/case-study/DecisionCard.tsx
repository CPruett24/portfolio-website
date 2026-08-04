type Props = {
  title: string;
  why: string;
  tradeoffs: string[];
  usedFor: string[];
};

export default function DecisionCard({
  title,
  why,
  tradeoffs,
  usedFor,
}: Props) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40">
      <h3 className="text-2xl font-bold text-cyan-400">
        {title}
      </h3>

      <div className="mt-6">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
          Why I Chose It
        </h4>

        <p className="mt-2 leading-7 text-slate-400">
          {why}
        </p>
      </div>

      <div className="mt-6">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
          Trade-offs
        </h4>

        <ul className="mt-2 list-disc space-y-2 pl-5 text-slate-400">
          {tradeoffs.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
          Used For
        </h4>

        <ul className="mt-2 list-disc space-y-2 pl-5 text-slate-400">
          {usedFor.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
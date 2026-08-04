type Props = {
  title: string;
  reason: string;
};

export default function DecisionCard({
  title,
  reason,
}: Props) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_20px_40px_rgba(6,182,212,0.12)]">
      <h3 className="text-xl font-bold text-cyan-400">
        {title}
      </h3>

      <p className="mt-4 leading-8 text-slate-400">
        {reason}
      </p>
    </div>
  );
}
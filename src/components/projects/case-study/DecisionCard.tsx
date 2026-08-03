type Props = {
  title: string;
  reason: string;
};

export default function DecisionCard({
  title,
  reason,
}: Props) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 transition hover:border-cyan-500/40">
      <h3 className="text-xl font-bold text-cyan-400">
        {title}
      </h3>

      <p className="mt-4 leading-8 text-slate-400">
        {reason}
      </p>
    </div>
  );
}
type Props = {
  steps: string[];
};

export default function ArchitectureFlow({
  steps,
}: Props) {
  return (
    <div className="mx-auto mt-8 flex max-w-2xl flex-col items-center">
      {steps.map((step, index) => (
        <div
          key={step}
          className="flex w-full flex-col items-center"
        >
          <div className="w-full rounded-2xl border border-cyan-500/20 bg-slate-900/60 px-6 py-5 text-center font-semibold backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">
            {step}
          </div>

          {index < steps.length - 1 && (
            <div className="flex flex-col items-center py-3">
              <div className="h-8 w-px bg-cyan-500/40" />
              <div className="text-cyan-400 text-sm">▼</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
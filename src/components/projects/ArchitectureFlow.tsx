type Props = {
  steps: string[];
};

export default function ArchitectureFlow({
  steps,
}: Props) {
  return (
    <div className="mt-8">
      {steps.map((step, index) => (
        <div
          key={step}
          className="flex flex-col items-center"
        >
          <div className="w-full max-w-xl rounded-2xl border border-white/10 bg-slate-900/60 px-6 py-5 text-center font-semibold backdrop-blur-xl">
            {step}
          </div>

          {index < steps.length - 1 && (
            <div className="h-8 w-px bg-cyan-500/40" />
          )}
        </div>
      ))}
    </div>
  );
}
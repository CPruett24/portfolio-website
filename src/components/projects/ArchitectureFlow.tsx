type Props = {
  steps: string[];
};

function getNodeType(step: string) {
  const lower = step.toLowerCase();

  if (
    lower.includes("input") ||
    lower.includes("speech") ||
    lower.includes("user")
  ) {
    return {
      badge: "INPUT",
      border: "border-blue-500/40",
      bg: "bg-blue-500/10",
      text: "text-blue-300",
    };
  }

  if (
    lower.includes("database") ||
    lower.includes("sqlite") ||
    lower.includes("storage")
  ) {
    return {
      badge: "STORAGE",
      border: "border-emerald-500/40",
      bg: "bg-emerald-500/10",
      text: "text-emerald-300",
    };
  }

  if (
    lower.includes("llm") ||
    lower.includes("ollama") ||
    lower.includes("ai")
  ) {
    return {
      badge: "AI",
      border: "border-violet-500/40",
      bg: "bg-violet-500/10",
      text: "text-violet-300",
    };
  }

  if (
    lower.includes("output") ||
    lower.includes("response") ||
    lower.includes("text-to-speech")
  ) {
    return {
      badge: "OUTPUT",
      border: "border-amber-500/40",
      bg: "bg-amber-500/10",
      text: "text-amber-300",
    };
  }

  return {
    badge: "PROCESS",
    border: "border-cyan-500/40",
    bg: "bg-cyan-500/10",
    text: "text-cyan-300",
  };
}

export default function ArchitectureFlow({
  steps,
}: Props) {
  return (
    <div className="mx-auto mt-12 max-w-3xl">
      {steps.map((step, index) => {
        const style = getNodeType(step);

        return (
          <div
            key={step}
            className="flex flex-col items-center"
          >
            <div
              className={`
                w-full
                rounded-3xl
                border
                ${style.border}
                ${style.bg}
                p-6
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              `}
            >
              <span
                className={`
                  rounded-full
                  border
                  border-white/10
                  px-3
                  py-1
                  text-xs
                  font-semibold
                  tracking-widest
                  ${style.text}
                `}
              >
                {style.badge}
              </span>

              <h3 className="mt-5 text-center text-xl font-bold">
                {step}
              </h3>
            </div>

            {index !== steps.length - 1 && (
              <div className="flex flex-col items-center py-4">
                <div className="h-8 w-px bg-cyan-500/40" />
                <div className="text-cyan-400">
                  ▼
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
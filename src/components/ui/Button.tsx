import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: Props) {
  return (
    <button
      className={clsx(
        "group relative overflow-hidden rounded-xl px-7 py-4 text-sm font-semibold transition-all duration-300",

        variant === "primary"
          ? "bg-cyan-500 text-white hover:-translate-y-1 hover:bg-cyan-400 hover:shadow-[0_15px_50px_rgba(6,182,212,.45)]"
          : "border border-white/10 bg-white/5 hover:border-cyan-400 hover:bg-cyan-500/10"
      )}
    >
      {children}
    </button>
  );
}
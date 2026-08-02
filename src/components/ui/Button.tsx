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
        "rounded-xl px-7 py-4 text-sm font-semibold transition-all duration-300",

        variant === "primary"
          ? "bg-cyan-500 text-white hover:scale-105 hover:bg-cyan-400 hover:shadow-xl hover:shadow-cyan-500/30"
          : "border border-white/10 bg-white/5 hover:border-cyan-400 hover:bg-cyan-500/10"
      )}
    >
      {children}
    </button>
  );
}
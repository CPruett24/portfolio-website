import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({
  children,
  className,
}: Props) {
  return (
    <div
      className={clsx(
        `
          group
          rounded-3xl
          border
          border-white/10
          bg-slate-900/60
          p-6
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-cyan-500/40
          hover:shadow-[0_25px_60px_rgba(6,182,212,0.12)]
        `,
        className
      )}
    >
      {children}
    </div>
  );
}
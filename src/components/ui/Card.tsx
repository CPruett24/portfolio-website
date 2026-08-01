type Props = {
  children: React.ReactNode;
};

export default function Card({
  children,
}: Props) {
  return (
    <div
      className="
      rounded-3xl
      border
      border-white/10
      bg-slate-900/60
      p-8
      backdrop-blur-md
      transition
      duration-300
      hover:-translate-y-2
      hover:border-cyan-500/30
      "
    >
      {children}
    </div>
  );
}
type BadgeProps = {
  children: React.ReactNode;
};

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">
      {children}
    </span>
  );
}
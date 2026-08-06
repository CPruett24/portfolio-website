export default function HeroBackground() {
  return (
    <>
      {/* Main Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

      {/* Cyan Glow */}
      <div className="absolute left-1/2 top-40 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      {/* Blue Glow */}
      <div className="absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[120px]" />

      {/* Purple Glow */}
      <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-violet-500/10 blur-[120px]" />

      {/* Grid Overlay */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.05]
          [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          [background-size:60px_60px]
        "
      />
    </>
  );
}
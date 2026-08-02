export default function HeroBackground() {
  return (
    <>
      {/* Cyan glow */}
      <div className="absolute left-1/2 top-28 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[180px]" />

      {/* Purple glow */}
      <div className="absolute right-0 top-10 h-[350px] w-[350px] rounded-full bg-violet-500/15 blur-[150px]" />

      {/* Left glow */}
      <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-cyan-400/10 blur-[140px]" />

      {/* Grid */}
      <div
        className="
        absolute inset-0
        opacity-[0.04]
        [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)]
        [background-size:50px_50px]
        "
      />
    </>
  );
}
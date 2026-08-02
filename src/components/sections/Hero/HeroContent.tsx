import HeroButtons from "./HeroButtons";

export default function HeroContent() {
  return (
    <>
      <p className="mb-5 font-semibold uppercase tracking-[0.35em] text-cyan-400">
        Software Engineer • AI Developer
      </p>

      <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl lg:text-8xl">
        Building Intelligent
        <br />
        Software That Solves
        <br />
        Real Problems.
      </h1>

      <p className="mt-8 max-w-3xl text-lg leading-9 text-slate-400 md:text-xl">
        Computer Science student passionate about artificial
        intelligence, backend engineering, and full-stack
        development. I enjoy designing scalable software,
        solving challenging problems, and continuously
        learning new technologies.
      </p>

      <HeroButtons />
    </>
  );
}
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";
import SocialLinks from "./SocialLinks";
import ProfileCard from "./ProfileCard";

export default function HeroContent() {
  return (
  <div className="grid items-center gap-16 lg:grid-cols-2">
    <div>
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
        Computer Science student passionate about AI,
        backend engineering, and full-stack development.
        I enjoy designing scalable software, solving
        challenging problems, and continuously learning
        new technologies.
      </p>

      <SocialLinks />

      <HeroButtons />

      <HeroStats />
    </div>

    <ProfileCard />
  </div>
);
}
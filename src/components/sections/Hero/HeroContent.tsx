import { siteConfig } from "@/config/site";

import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";
import ProfileCard from "./ProfileCard";
import SocialLinks from "./SocialLinks";

export default function HeroContent() {
  return (
    <div className="grid items-center gap-20 lg:grid-cols-2">

      <div>

        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
          {siteConfig.title}
        </p>

        <h1 className="text-5xl font-black leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
          Building
          <span className="text-cyan-400"> AI-Powered </span>
          Software
          <br />
          That Solves
          <br />
          Real Problems.
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-400">
          Computer Science senior specializing in artificial intelligence,
          backend engineering, and scalable software systems.

          <br />
          <br />

          Currently developing AI assistants, semantic search platforms,
          and modern web applications while pursuing a career in Software
          Engineering.
        </p>

        <SocialLinks />

        <div className="mt-10">
          <HeroButtons />
        </div>

        <HeroStats />

      </div>

      <ProfileCard />

    </div>
  );
}
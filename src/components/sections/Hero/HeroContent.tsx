import { siteConfig } from "@/config/site";

import HeroButtons from "./HeroButtons";
import DeveloperDashboard from "./DeveloperDashboard";
import SocialLinks from "./SocialLinks";
import HeroSkills from "./HeroSkills";

export default function HeroContent() {
  return (
    <div className="grid items-center gap-20 lg:grid-cols-[1.15fr_0.85fr]">

      {/* Left */}

      <div>

        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
          {siteConfig.title}
        </p>

        <h1 className="text-5xl font-black leading-[1.02] tracking-tight md:text-7xl lg:text-8xl">
          Building
          <span className="text-cyan-400"> AI-Powered </span>
          Software
          <br />
          That Solves
          <br />
          Real Problems.
        </h1>

        <p className="mt-10 max-w-2xl text-xl leading-9 text-slate-400">
          I build intelligent software that combines artificial intelligence,
          scalable backend systems, and thoughtful software architecture.

          <br />
          <br />

          My work focuses on creating practical AI applications—from local
          language model assistants and semantic search platforms to secure
          full-stack web applications.


          <br />
          <br />

          I'm currently developing <span className="font-semibold text-white">JARVIS</span>,
          a modular AI assistant exploring voice interaction, persistent memory,
          intelligent automation, and future computer vision capabilities.
        </p>

        <div className="mt-8">
          <SocialLinks />
        </div>

        <div className="mt-12">
          <HeroButtons />
        </div>

        <HeroSkills />

      </div>

      {/* Right */}

      <DeveloperDashboard />

    </div>
  );
}
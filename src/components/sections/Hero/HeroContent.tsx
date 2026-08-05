import { siteConfig } from "@/config/site";

import HeroButtons from "./HeroButtons";
import DeveloperDashboard from "./DeveloperDashboard";
import SocialLinks from "./SocialLinks";
import HeroHighlights from "./HeroHighlights";

export default function HeroContent() {
  return (
    <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">

      {/* Left */}

      <div>

        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
          {siteConfig.title}
        </p>

        <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
          Building
          <span className="text-cyan-400"> AI-Powered </span>
          Software
          <br />
          That Solves
          <br />
          Real Problems.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl sm:leading-9">
          I build intelligent software that combines artificial intelligence,
          scalable backend systems, and clean software architecture.

          <br />
          <br />

          My projects focus on solving real-world problems through local AI,
          semantic search, modern web applications, and thoughtful engineering.

          <br />
          <br />

          Currently building{" "}
          <span className="font-semibold text-white">
            JARVIS
          </span>
          , a modular AI assistant exploring voice interaction,
          persistent memory, intelligent automation,
          and future computer vision.
        </p>

        <div className="mt-8">
          <SocialLinks />
        </div>

        <div className="mt-12">
          <HeroButtons />
        </div>

        <HeroHighlights />

      </div>

      {/* Right */}

      <DeveloperDashboard />

    </div>
  );
}
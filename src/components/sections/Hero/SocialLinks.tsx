import Link from "next/link";

import { siteConfig } from "@/config/site";

export default function SocialLinks() {
  return (
    <div className="mt-8 flex gap-6 text-slate-400">
      <Link
        href={siteConfig.github}
        target="_blank"
        className="transition hover:text-cyan-400"
      >
        GitHub
      </Link>

      <Link
        href={siteConfig.linkedin}
        target="_blank"
        className="transition hover:text-cyan-400"
      >
        LinkedIn
      </Link>

      <a
        href={`mailto:${siteConfig.email}`}
        className="transition hover:text-cyan-400"
      >
        Email
      </a>
    </div>
  );
}
import Link from "next/link";

import Button from "@/components/ui/Button";

export default function HeroButtons() {
  return (
    <div className="mt-12 flex flex-wrap gap-4">
      <Link href="#projects">
        <Button>
          View My Work
        </Button>
      </Link>

      <a
        href="/resume.pdf"
        download
      >
        <Button variant="secondary">
          Download Resume
        </Button>
      </a>
    </div>
  );
}
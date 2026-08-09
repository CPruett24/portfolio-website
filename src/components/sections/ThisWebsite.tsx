import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Vercel",
];

const engineeringHighlights = [
  {
    title: "Modern Architecture",
    description:
      "Built with the Next.js App Router using reusable components, centralized configuration, structured project data, and a maintainable component architecture.",
  },
  {
    title: "Performance",
    description:
      "Optimized for fast loading and efficient rendering, with Lighthouse testing used to identify and improve performance bottlenecks.",
  },
  {
    title: "Accessibility",
    description:
      "Designed with semantic HTML, keyboard navigation, visible focus states, accessible controls, and skip navigation support.",
  },
  {
    title: "SEO & Discoverability",
    description:
      "Includes structured metadata, canonical URLs, Open Graph, Twitter cards, sitemap and robots configuration, structured data, and an LLM-readable site description.",
  },
  {
    title: "Security",
    description:
      "Uses security-focused HTTP headers including Content Security Policy, HSTS, X-Frame-Options, Referrer Policy, and Permissions Policy.",
  },
  {
    title: "Responsive Design",
    description:
      "Designed to provide a consistent experience across desktop, tablet, and mobile devices with responsive layouts and navigation.",
  },
];

export default function ThisWebsite() {
  return (
    <Section id="this-website">
      <SectionHeading
        eyebrow="Built With Purpose"
        title="This Website"
        subtitle="The portfolio itself is an engineering project—designed to demonstrate modern frontend architecture, performance, accessibility, SEO, security, and production deployment."
      />

      <div className="mt-12">
        <Card className="p-8">
          <div className="flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <Badge key={technology}>{technology}</Badge>
            ))}
          </div>

          <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-300">
            Rather than treating the portfolio as a static collection of
            projects, I built it as a real software system. The architecture
            emphasizes reusable components, maintainable data structures,
            responsive interfaces, accessibility, search optimization, and
            security-conscious deployment practices.
          </p>
        </Card>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {engineeringHighlights.map((highlight) => (
          <Card key={highlight.title} className="p-6">
            <h3 className="text-xl font-semibold text-white">
              {highlight.title}
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              {highlight.description}
            </p>
          </Card>
        ))}
      </div>

      <div className="mt-10">
        <a
            href="https://github.com/CPruett24/portfolio-website"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl border border-cyan-500/30 px-5 py-3 font-medium transition hover:bg-cyan-500 hover:text-white"
        >
            View Source on GitHub
        </a>
      </div>
    </Section>
  );
}
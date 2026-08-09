import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About Me"
        title="Building Software That Makes an Impact"
        subtitle="I enjoy solving challenging problems through software engineering, with a focus on AI, backend systems, and scalable applications."
      />

      <div className="mt-16 grid gap-10 lg:grid-cols-2">

        <div className="space-y-6 text-lg leading-8 text-slate-400">

          <p>
            I'm a Computer Science student focused on building intelligent
            software that solves real-world problems. My work spans AI
            assistants, backend APIs, machine learning applications, and
            full-stack systems, with an emphasis on understanding how the
            pieces fit together and turning ideas into reliable software.
          </p>

          <p>
            My professional experience has given me exposure to structured
            engineering environments, quality-focused workflows, technical
            documentation, and collaborative problem solving. Alongside that
            experience, I've continued building software projects that
            challenge me to apply what I've learned and develop stronger
            engineering skills.
          </p>

          <p>
            I'm especially interested in the intersection of artificial
            intelligence, software architecture, and automation — building
            systems that are not only technically interesting, but useful,
            maintainable, and capable of evolving over time.
          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl">

          <h3 className="text-2xl font-bold">
            Current Focus
          </h3>

          <ul className="mt-6 space-y-4 text-slate-300">
            <li>• Artificial Intelligence</li>

            <li>• Backend Development</li>

            <li>• Full-Stack Applications</li>

            <li>• Machine Learning</li>

            <li>• Software Architecture</li>

            <li>• Intelligent Automation</li>
            
          </ul>

        </div>

      </div>
    </Section>
  );
}
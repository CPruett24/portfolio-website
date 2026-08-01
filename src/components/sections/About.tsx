import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

export default function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About"
        title="Building software with curiosity and purpose."
        subtitle="I'm passionate about creating practical software that solves real-world problems. Whether I'm building AI-powered applications, backend systems, or learning new technologies, I enjoy understanding how things work and finding better ways to build them."
      />

      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="mb-4 text-xl font-semibold text-white">
            Who I Am
          </h3>

          <p className="leading-8 text-slate-400">
            I'm a Computer Science student with interests in artificial
            intelligence, backend engineering, and full-stack application
            development. I enjoy building projects that challenge me to learn
            something new while creating software that's genuinely useful.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-white">
            What Drives Me
          </h3>

          <p className="leading-8 text-slate-400">
            I believe software should solve problems—not just demonstrate
            technology. Every project I build starts with understanding a
            problem and designing a solution that's clean, maintainable, and
            practical.
          </p>
        </div>
      </div>
    </Section>
  );
}
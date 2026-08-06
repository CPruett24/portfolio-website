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
            I'm a Computer Science student with a passion for designing
            intelligent software that solves real-world problems. Whether
            I'm developing AI assistants, backend APIs, or machine learning
            applications, I enjoy learning how complex systems work and
            turning ideas into reliable software.
          </p>

          <p>
            During my internship, I've gained experience
            working in collaborative environments to build and test assemblies, 
            while also continuing to build personal projects that challenge me 
            to learn new technologies and improve my engineering skills.
          </p>

          <p>
            My long-term goal is to build scalable software that combines
            artificial intelligence with practical applications that improve
            people's everyday lives.
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

            <li>• Cloud Technologies</li>

          </ul>

        </div>

      </div>
    </Section>
  );
}
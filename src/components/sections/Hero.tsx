import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import HeroBackground from "./HeroBackground";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">

      <HeroBackground />

      <Container>

        <div className="relative z-10 max-w-4xl pt-24">

          <p className="mb-6 font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Software Engineer • AI Developer
          </p>

          <h1 className="text-6xl font-black leading-none tracking-tight md:text-8xl">
            Building
            <br />
            Intelligent
            <br />
            Software.
          </h1>

          <p className="mt-10 max-w-2xl text-xl leading-9 text-slate-400">
            I build AI-powered applications, backend systems, and modern web
            experiences focused on solving real-world problems through clean,
            scalable software engineering.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">
            <Button>View Projects</Button>

            <Button variant="secondary">
              Download Resume
            </Button>
          </div>

        </div>

      </Container>

    </section>
  );
}
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-950">

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-40 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[160px]" />

        <div className="absolute right-20 top-20 h-72 w-72 rounded-full bg-purple-500/20 blur-[150px]" />

      </div>

      <Container>

        <div className="relative z-10 max-w-4xl">

          <p className="mb-6 font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Software Engineer • AI Developer
          </p>

          <h1 className="text-6xl font-black leading-none md:text-8xl">

            Building

            <br />

            Intelligent

            <br />

            Software.

          </h1>

          <p className="mt-10 max-w-2xl text-xl leading-9 text-slate-400">
            Computer Science student passionate about artificial intelligence,
            backend engineering, and creating software that solves real-world
            problems.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">

            <Button>
              View Projects
            </Button>

            <Button variant="secondary">
              Download Resume
            </Button>

          </div>

        </div>

      </Container>

    </section>
  );
}
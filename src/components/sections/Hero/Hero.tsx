import Container from "@/components/ui/Container";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">

      <HeroBackground />

      <Container>

        <div className="relative z-10 py-32">

          <HeroContent />

        </div>

      </Container>

    </section>
  );
}
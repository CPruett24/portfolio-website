import Container from "@/components/ui/Container";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <HeroBackground />

      <Container>
        <div className="relative z-10 flex min-h-screen items-center py-24">
          <HeroContent />
        </div>
      </Container>
    </section>
  );
}
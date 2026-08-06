import Container from "./Container";
import FadeIn from "./FadeIn";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
};

export default function Section({
  id,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className="py-28"
    >
      <Container>
        <FadeIn>
          {children}
        </FadeIn>
      </Container>
    </section>
  );
}
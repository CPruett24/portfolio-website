import Container from "./Container";

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
        {children}
      </Container>
    </section>
  );
}
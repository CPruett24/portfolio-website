import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

export default function Contact() {
  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Connect"
        subtitle="Feel free to reach out."
      />

      <p className="text-slate-400">
        Email • GitHub • LinkedIn
      </p>
    </Section>
  );
}
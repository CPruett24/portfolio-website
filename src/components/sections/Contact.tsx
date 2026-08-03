import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import ContactCard from "./ContactCard";

import { contact } from "@/data/contact";

export default function Contact() {
  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title={contact.title}
        subtitle={contact.description}
      />

      <div className="mt-8 inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">
        ● {contact.availability}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {contact.links.map((link) => (
          <ContactCard
            key={link.title}
            title={link.title}
            value={link.value}
            href={link.href}
          />
        ))}
      </div>
    </Section>
  );
}
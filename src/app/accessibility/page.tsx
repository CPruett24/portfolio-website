import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Accessibility Statement",
  description:
    "Accessibility statement for Chandler Pruett's portfolio website.",
  alternates: {
    canonical: "/accessibility",
  },
};

export default function AccessibilityPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Accessibility"
        title="Accessibility Statement"
        subtitle="I strive to make this website accessible and usable for as many people as possible."
      />

      <div className="mt-12 max-w-4xl space-y-10 text-lg leading-8 text-slate-400">
        <section>
          <h2 className="text-2xl font-bold text-white">
            Our Commitment
          </h2>

          <p className="mt-4">
            I designed and developed this website with accessibility in mind.
            The goal is to provide a clear, usable experience for visitors
            regardless of the device, input method, or accessibility needs they
            may have.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">
            Accessibility Features
          </h2>

          <p className="mt-4">
            The website includes accessibility-focused features and practices
            such as:
          </p>

          <ul className="mt-5 list-disc space-y-3 pl-6">
            <li>Semantic HTML and meaningful document structure.</li>
            <li>Keyboard-accessible navigation and interactive controls.</li>
            <li>Visible focus states for interactive elements.</li>
            <li>Skip navigation support for keyboard users.</li>
            <li>Accessible labels and states for interactive controls.</li>
            <li>
              Responsive layouts designed for desktop, tablet, and mobile
              devices.
            </li>
            <li>
              Text and interface elements designed with readable contrast.
            </li>
            <li>Descriptive alternative text for meaningful images.</li>
            <li>
              Reduced reliance on visual presentation alone to communicate
              information.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">
            Accessibility Testing
          </h2>

          <p className="mt-4">
            Accessibility was evaluated throughout development using automated
            accessibility testing and manual interaction testing. The site was
            tested using Lighthouse, including its accessibility audit, and
            received a score of 100 for Accessibility in the final production
            audit.
          </p>

          <p className="mt-4">
            Manual testing was also used to verify keyboard navigation, visible
            focus states, navigation controls, interactive elements, responsive
            layouts, and the overall usability of the site across different
            screen sizes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">
            Ongoing Improvement
          </h2>

          <p className="mt-4">
            Accessibility is an ongoing process. While I have made a deliberate
            effort to build an accessible experience and test the site using
            automated and manual methods, no automated test can identify every
            possible accessibility issue.
          </p>

          <p className="mt-4">
            As the website evolves, I will continue reviewing its accessibility
            and addressing issues that are identified.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">
            Feedback and Contact
          </h2>

          <p className="mt-4">
            If you encounter an accessibility barrier or have difficulty using
            any part of this website, please reach out through the contact
            information provided on the site. Feedback is welcome and will be
            considered as part of ongoing accessibility improvements.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">
            Statement Date
          </h2>

          <p className="mt-4">
            This accessibility statement was last reviewed on August 20, 2026.
          </p>
        </section>
      </div>
    </Section>
  );
}

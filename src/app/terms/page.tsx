import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of Use for Chandler Pruett's software engineering portfolio website.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24 text-slate-300">
      <h1 className="text-4xl font-bold text-white">
        Terms of Use
      </h1>

      <p className="mt-4 text-slate-400">
        Effective Date: {new Date().toLocaleDateString()}
      </p>

      <div className="mt-10 space-y-10 leading-8">

        <section>
          <h2 className="text-2xl font-semibold text-white">
            Acceptance of These Terms
          </h2>

          <p className="mt-3">
            By accessing or using this website, you agree to these Terms of
            Use. If you do not agree with these terms, please discontinue use
            of the website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            Purpose of This Website
          </h2>

          <p className="mt-3">
            This website serves as the personal software engineering portfolio
            of Chandler Pruett. Its purpose is to present professional
            experience, technical skills, software projects, and other
            information related to career development.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            Intellectual Property
          </h2>

          <p className="mt-3">
            Unless otherwise stated, the original content on this website,
            including written material, project descriptions, graphics,
            branding, and source code created by Chandler Pruett, is protected
            by applicable intellectual property laws.
          </p>

          <p className="mt-3">
            You may view this website for personal, educational, or
            informational purposes. You may not reproduce, redistribute,
            modify, or commercially exploit original content without prior
            written permission unless otherwise permitted by an applicable
            open-source license.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            Open Source Projects
          </h2>

          <p className="mt-3">
            Certain software projects referenced on this website may be
            available through public GitHub repositories and distributed under
            their respective open-source licenses. Those licenses govern the use
            of those projects.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            Third-Party Services
          </h2>

          <p className="mt-3">
            This website contains links to third-party websites, including
            GitHub, LinkedIn, and other external resources. These websites are
            operated independently and are governed by their own terms and
            privacy policies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            Disclaimer
          </h2>

          <p className="mt-3">
            This website and its contents are provided on an "as is" and "as
            available" basis without warranties of any kind, whether express or
            implied. While reasonable efforts are made to maintain accurate and
            current information, no guarantee is made regarding the
            completeness, reliability, or accuracy of the content.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            Limitation of Liability
          </h2>

          <p className="mt-3">
            To the fullest extent permitted by applicable law, Chandler Pruett
            shall not be liable for any direct, indirect, incidental,
            consequential, or special damages arising from the use of, or
            inability to use, this website or its contents.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            Trademarks
          </h2>

          <p className="mt-3">
            All product names, company names, logos, and trademarks referenced
            throughout this website remain the property of their respective
            owners. Their appearance does not imply sponsorship, endorsement,
            or affiliation unless explicitly stated.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            Changes to These Terms
          </h2>

          <p className="mt-3">
            These Terms of Use may be updated periodically to reflect changes
            to the website or applicable laws. Continued use of the website
            following any updates constitutes acceptance of the revised terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            Contact
          </h2>

          <p className="mt-3">
            Questions regarding these Terms of Use may be directed through the
            contact information provided elsewhere on this website or via my
            LinkedIn profile.
          </p>
        </section>

      </div>
    </main>
  );
}
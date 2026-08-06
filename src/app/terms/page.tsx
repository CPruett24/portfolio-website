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
        Effective Date: August 6, 2026
      </p>

      <div className="mt-10 space-y-10 leading-8">

        <section>
          <h2 className="text-2xl font-semibold text-white">
            Acceptance of These Terms
          </h2>

          <p className="mt-3">
            By accessing or using this website, you agree to be bound by these
            Terms of Use. If you do not agree with any portion of these terms,
            please discontinue use of this website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            Purpose of This Website
          </h2>

          <p className="mt-3">
            This website serves as the personal software engineering portfolio
            of Chandler Pruett. Its purpose is to present professional
            experience, technical skills, software engineering projects,
            educational work, and other career-related information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            Intellectual Property
          </h2>

          <p className="mt-3">
            Unless otherwise indicated, all original content on this website,
            including written material, project documentation, graphics,
            branding, designs, and software created by Chandler Pruett, is
            protected under applicable intellectual property laws.
          </p>

          <p className="mt-3">
            You may view, reference, and share this website for personal,
            educational, or professional purposes. You may not reproduce,
            redistribute, modify, or commercially exploit original content
            without prior written permission unless otherwise permitted under an
            applicable open-source license.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            Open-Source Projects
          </h2>

          <p className="mt-3">
            Certain software projects featured on this website are available
            through public GitHub repositories and may be distributed under
            open-source licenses, including the MIT License or other applicable
            licenses. The terms of those individual licenses govern the use,
            modification, and distribution of those projects.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            Third-Party Links
          </h2>

          <p className="mt-3">
            This website includes links to third-party websites and services,
            including GitHub, LinkedIn, and other external resources. These
            websites are operated independently and are governed by their own
            terms, privacy policies, and practices. I am not responsible for
            the content or operation of third-party websites.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            Trademarks
          </h2>

          <p className="mt-3">
            All product names, company names, logos, service marks, and
            trademarks referenced throughout this website remain the property of
            their respective owners. Their inclusion is solely for
            identification, educational, or portfolio purposes and does not
            imply sponsorship, endorsement, or affiliation unless explicitly
            stated.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            Disclaimer of Warranties
          </h2>

          <p className="mt-3">
            This website and its contents are provided on an "as is" and "as
            available" basis without warranties of any kind, whether express or
            implied. While reasonable efforts are made to maintain accurate,
            current, and reliable information, no guarantee is made regarding
            the completeness, accuracy, availability, or reliability of the
            information presented.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            Limitation of Liability
          </h2>

          <p className="mt-3">
            To the fullest extent permitted by applicable law, Chandler Pruett
            shall not be liable for any direct, indirect, incidental,
            consequential, exemplary, or special damages arising out of or
            relating to the use of, or inability to use, this website or its
            contents.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            Governing Law
          </h2>

          <p className="mt-3">
            These Terms of Use shall be governed by and construed in accordance
            with the laws of the State of Florida, United States, without
            regard to its conflict of law principles.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            Changes to These Terms
          </h2>

          <p className="mt-3">
            These Terms of Use may be updated periodically to reflect changes
            to this website, applicable laws, or operational practices.
            Continued use of this website following any revision constitutes
            acceptance of the updated Terms of Use. The Effective Date at the
            top of this page indicates the most recent revision.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            Contact
          </h2>

          <p className="mt-3">
            Questions regarding these Terms of Use may be directed using the
            contact information provided elsewhere on this website or through my
            LinkedIn profile.
          </p>
        </section>

      </div>
    </main>
  );
}
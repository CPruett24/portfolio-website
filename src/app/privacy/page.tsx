import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Chandler Pruett's software engineering portfolio website.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24 text-slate-300">
      <h1 className="text-4xl font-bold text-white">
        Privacy Policy
      </h1>

      <p className="mt-4 text-slate-400">
        Effective Date: August 6, 2026
      </p>

      <div className="mt-10 space-y-10 leading-8">

        <section>
          <h2 className="text-2xl font-semibold text-white">
            Overview
          </h2>

          <p className="mt-3">
            Welcome to the personal software engineering portfolio of Chandler
            Pruett. This website exists to showcase software engineering
            projects, technical experience, professional qualifications, and
            related career information.
          </p>

          <p className="mt-3">
            Your privacy is respected. This Privacy Policy explains what
            information may be processed when you visit this website and how
            that information is handled.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            Information Collected
          </h2>

          <p className="mt-3">
            This website does not require user accounts, registrations,
            subscriptions, or purchases.
          </p>

          <p className="mt-3">
            No personally identifiable information is intentionally collected
            through this website unless you voluntarily contact me by email,
            LinkedIn, GitHub, or another communication method.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            Analytics
          </h2>

          <p className="mt-3">
            This website does not intentionally use visitor analytics,
            advertising trackers, behavioral profiling, or marketing analytics.
          </p>

          <p className="mt-3">
            Basic technical information may be processed by the website hosting
            provider as part of normal website delivery, security, and
            reliability. This information is not used by the website owner to
            personally identify visitors.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            Cookies
          </h2>

          <p className="mt-3">
            This website does not intentionally use cookies for analytics,
            advertising, or visitor profiling.
          </p>

          <p className="mt-3">
            Your web browser or the hosting platform may use technical cookies
            or similar technologies that are necessary for secure website
            operation and proper functionality.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            Third-Party Links
          </h2>

          <p className="mt-3">
            This website contains links to third-party websites and services,
            including GitHub, LinkedIn, and other external resources. These
            websites operate independently and maintain their own privacy
            policies. I am not responsible for the privacy practices or content
            of third-party websites.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            Security
          </h2>

          <p className="mt-3">
            Reasonable technical and organizational measures are implemented to
            help protect this website and its infrastructure. However, no method
            of transmitting information over the Internet or storing electronic
            data can be guaranteed to be completely secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            Children's Privacy
          </h2>

          <p className="mt-3">
            This website is not directed toward children under the age of 13
            and does not knowingly collect personal information from children.
            If you believe a child has provided personal information, please
            contact me so appropriate action can be taken.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            Changes to This Policy
          </h2>

          <p className="mt-3">
            This Privacy Policy may be updated from time to time to reflect
            changes to the website, applicable laws, or operational practices.
            The Effective Date at the top of this page indicates the most recent
            revision.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            Contact
          </h2>

          <p className="mt-3">
            Questions regarding this Privacy Policy may be directed using the
            contact information provided elsewhere on this website or through my
            LinkedIn profile.
          </p>
        </section>

      </div>
    </main>
  );
}
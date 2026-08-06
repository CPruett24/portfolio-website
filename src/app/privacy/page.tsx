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
        Effective Date: {new Date().toLocaleDateString()}
      </p>

      <div className="mt-10 space-y-10 leading-8">

        <section>
          <h2 className="text-2xl font-semibold text-white">
            Overview
          </h2>

          <p className="mt-3">
            This website is the personal software engineering portfolio of
            Chandler Pruett. It is intended to showcase software engineering
            projects, technical experience, and professional qualifications.
          </p>

          <p className="mt-3">
            Respecting your privacy is important. This policy explains what
            information may be collected when you visit this website and how
            that information is used.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            Information Collected
          </h2>

          <p className="mt-3">
            This website does not require user accounts, registrations, or
            purchases.
          </p>

          <p className="mt-3">
            No personally identifiable information is intentionally collected
            through this website unless you choose to contact me directly by
            email or another communication method.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            Analytics
          </h2>

          <p className="mt-3">
            This website may use privacy-conscious analytics services to
            understand overall website usage, such as page views, device types,
            browser information, approximate geographic region, and referral
            sources.
          </p>

          <p className="mt-3">
            Analytics data is used solely to improve the website and better
            understand visitor engagement. It is not used to personally identify
            visitors.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            Cookies
          </h2>

          <p className="mt-3">
            Depending on the services used, this website may utilize cookies or
            similar technologies to improve functionality, security, and
            analytics.
          </p>

          <p className="mt-3">
            Most web browsers allow you to control or disable cookies through
            your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            Third-Party Services
          </h2>

          <p className="mt-3">
            This website may link to third-party websites and services,
            including GitHub, LinkedIn, and other external resources. Those
            websites operate under their own privacy policies, and I am not
            responsible for their content or privacy practices.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            Security
          </h2>

          <p className="mt-3">
            Reasonable technical and organizational measures are taken to help
            protect this website. However, no method of transmitting or storing
            information over the Internet can be guaranteed to be completely
            secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            Children's Privacy
          </h2>

          <p className="mt-3">
            This website is not directed toward children under the age of 13,
            and no personal information is knowingly collected from children.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            Changes to This Policy
          </h2>

          <p className="mt-3">
            This Privacy Policy may be updated periodically to reflect changes
            to the website, applicable laws, or third-party services. The
            effective date at the top of this page will indicate the latest
            revision.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            Contact
          </h2>

          <p className="mt-3">
            If you have any questions regarding this Privacy Policy, please
            contact me using the information provided elsewhere on this website
            or through my LinkedIn profile.
          </p>
        </section>

      </div>
    </main>
  );
}
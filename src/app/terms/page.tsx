import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of Use for Chandler Pruett's software engineering portfolio.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24 text-slate-300">
      <h1 className="text-4xl font-bold text-white">
        Terms of Use
      </h1>

      <p className="mt-6">
        By using this website, you agree to these terms.
      </p>
    </main>
  );
}
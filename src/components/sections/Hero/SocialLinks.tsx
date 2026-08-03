import Link from "next/link";

export default function SocialLinks() {
  return (
    <div className="mt-8 flex gap-6 text-slate-400">
      <Link
        href="https://github.com/CPruett24"
        target="_blank"
        className="hover:text-cyan-400 transition"
      >
        GitHub
      </Link>

      <Link
        href="https://www.linkedin.com/in/chandler-pruett-2a1145345"
        target="_blank"
        className="hover:text-cyan-400 transition"
      >
        LinkedIn
      </Link>

      <a
        href="mailto:chandlerp.jobs@gmail.com"
        className="hover:text-cyan-400 transition"
      >
        Email
      </a>
    </div>
  );
}
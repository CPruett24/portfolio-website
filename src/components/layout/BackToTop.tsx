"use client";

export default function BackToTop() {
  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Back to top"
      className="rounded-xl border border-cyan-500/30 px-5 py-3 transition hover:bg-cyan-500 hover:text-white"
    >
      ↑ Back to Top
    </button>
  );
}
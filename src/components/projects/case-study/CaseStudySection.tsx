type Props = {
  title: string;
  children: React.ReactNode;
};

export default function CaseStudySection({
  title,
  children,
}: Props) {
  return (
    <section className="mt-24">

      <h2 className="mb-8 text-3xl font-bold">
        {title}
      </h2>

      <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-8 backdrop-blur-xl">
        {children}
      </div>

    </section>
  );
}
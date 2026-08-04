type Props = {
  id: string;
  title: string;
  children: React.ReactNode;
};

export default function ProjectSection({
  id,
  title,
  children,
}: Props) {
  return (
    <section
      id={id}
      className="scroll-mt-28 mt-20"
    >
      <h2 className="mb-6 text-3xl font-bold">
        {title}
      </h2>

      <div className="text-lg leading-8 text-slate-400">
        {children}
      </div>
    </section>
  );
}
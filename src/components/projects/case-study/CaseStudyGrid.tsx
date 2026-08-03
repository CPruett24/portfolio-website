type Props = {
  children: React.ReactNode;
};

export default function CaseStudyGrid({
  children,
}: Props) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {children}
    </div>
  );
}
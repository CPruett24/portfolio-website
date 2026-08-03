import Badge from "@/components/ui/Badge";

type Props = {
  technologies: string[];
};

export default function TechStack({
  technologies,
}: Props) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {technologies.map((technology) => (
        <Badge key={technology}>
          {technology}
        </Badge>
      ))}
    </div>
  );
}
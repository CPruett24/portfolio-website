type Props = {
  items: string[];
};

export default function BulletList({ items }: Props) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3"
        >
          <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />

          <span className="text-slate-300">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
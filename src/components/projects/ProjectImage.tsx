import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

export default function ProjectImage({
  src,
  alt,
}: Props) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10">
      <Image
        src={src}
        alt={alt}
        width={1400}
        height={900}
        className="
          aspect-video
          w-full
          object-cover
          transition-transform
          duration-700
          group-hover:scale-105
        "
      />

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
    </div>
  );
}
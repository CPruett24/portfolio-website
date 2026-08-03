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
    <div className="overflow-hidden rounded-2xl border border-white/10">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={675}
        className="
          aspect-video
          w-full
          object-cover
          transition-transform
          duration-500
          group-hover:scale-105
        "
      />
    </div>
  );
}
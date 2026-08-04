import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

export default function BrowserFrame({
  src,
  alt,
}: Props) {
  return (
    <div className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">

      <div className="flex items-center gap-2 border-b border-white/10 bg-slate-800 px-5 py-3">

        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />

        <div className="ml-5 rounded-full bg-slate-700 px-4 py-1 text-xs text-slate-400">
          Project Preview
        </div>

      </div>

      <Image
        src={src}
        alt={alt}
        width={1600}
        height={900}
        className="w-full object-cover transition duration-500 hover:scale-[1.02]"
      />

    </div>
  );
}
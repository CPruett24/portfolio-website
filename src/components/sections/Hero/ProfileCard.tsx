import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="hidden lg:flex justify-center">
      <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl">
        <Image
          src="/images/profile/profile-placeholder.png"
          alt="Profile"
          width={320}
          height={320}
          className="rounded-2xl"
        />
      </div>
    </div>
  );
}
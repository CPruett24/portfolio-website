import Image from "next/image";

import ProfileInfo from "./ProfileInfo";

export default function ProfileCard() {
  return (
    <div className="hidden lg:flex justify-center">

      <div className="rounded-[32px] border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl shadow-[0_25px_80px_rgba(6,182,212,0.15)]">

        <Image
          src="/images/profile/profile-placeholder.png"
          alt="Profile"
          width={340}
          height={340}
          className="rounded-3xl"
        />

        <ProfileInfo />

      </div>

    </div>
  );
}
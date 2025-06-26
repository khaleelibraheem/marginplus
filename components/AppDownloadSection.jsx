import Image from "next/image";

import AppDownloadButton from "./ui/AppDownloadButton";
import Avatars from "./ui/Avatars";

const avatars = [
  {
    imageUrl: "/images/avatar-1.jpg",
    profileUrl: "#",
  },
  {
    imageUrl: "/images/avatar-2.jpg",
    profileUrl: "#",
  },
  {
    imageUrl: "/images/avatar-3.jpg",
    profileUrl: "#",
  },
  {
    imageUrl: "/images/avatar-4.jpg",
    profileUrl: "#",
  },
];

export default function AppDownloadSection() {
  return (
    <section className="mt-20 lg:mt-60 lg:bg-[#004D2E]">
      {/* Phone mockup - positioned above green background on mobile/tablet */}
      <div className="flex justify-center lg:hidden">
        <Image
          src={"/images/phone-mockup2.png"}
          alt="iphone"
          height={300}
          width={300}
          priority
        />
      </div>

      <div className="bg-[#004D2E] max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center">
        {/* Phone mockup - extends above the green background on desktop */}
        <div className="hidden lg:block lg:-mt-44 lg:ml-32">
          <Image
            src={"/images/phone-mockup2.png"}
            alt="iphone"
            height={350}
            width={350}
            priority
          />
        </div>
        
        {/* Content section */}
        <div className="p-[20px] lg:px-8 lg:pb-0 lg:py-0 flex-1 max-w-xl">
          <h3 className="text-2xl lg:text-3xl leading-tight font-semibold text-white mb-6">
            Thousands of Africans are already transforming their financial future
            {" "}
            with{" "}
            <span className="text-[#B2FF96]">Marginplus.</span>
          </h3>
          
          <div className="mb-8">
            <Avatars avatarUrls={avatars} />
          </div>
          
          <div className="flex gap-4">
            <AppDownloadButton url={"/images/googleplay-white.svg"} />
            <AppDownloadButton url={"/images/appstore-white.svg"} />
          </div>
        </div>
      </div>
    </section>
  );
}
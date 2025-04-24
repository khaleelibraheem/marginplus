import Image from "next/image";
import AppDownloadButton from "../ui/AppDownloadButton";
import Avatars from "../ui/Avatars";

export default function AppDownloadSection() {
  return (
    <section className="mt-16 sm:mt-60 flex flex-col md:flex-row justify-center bg-transparent md:bg-[#004D2E] items-center md:h-[300px] md:items-end md:gap-14">
      <div>
        <Image
          src={"/images/phone-mockup2.svg"}
          alt="iphone"
          height={300}
          width={300}
        />
      </div>
      <div className="bg-[#004D2E] self-start p-5 md:max-w-[450px]">
        <h3 className="text-2xl font-semibold text-white">
          Thousands of Africans are already transforming their financial future <br />
          <span className="text-[#B2FF96]">with Marginplus.</span>
        </h3>
        <div className="mt-2 mb-3 md:mt-6">
        <Avatars />
        </div>
        <div className="flex gap-3 mt-2 md:mt-6">
          <AppDownloadButton
            platform={"Google Play"}
            ImgSrc={"/images/playstore-white.svg"}
            color={"white"}
          />
          <AppDownloadButton
            platform={"App Store"}
            ImgSrc={"/images/apple-white.svg"}
            color={"white"}
          />
        </div>
      </div>
    </section>
  );
}

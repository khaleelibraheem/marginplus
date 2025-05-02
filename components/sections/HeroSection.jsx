import Image from "next/image";
import HeroImage from "../ui/HeroImage";
import AppDownloadButton from "../ui/AppDownloadButton";

export default function HeroSection() {
  return (
    <section className="md:mt-[-45px] relative px-3 sm:px-10 overflow-hidden pb-28 sm:pb-16 max-w-[1400px] mx-auto">
      {/* WaterMark */}
      <span className="absolute text-[370px] font-extrabold text-gray-100 z-0 select-none hidden lg:block top-7 left-[-25px]">
        Invest
      </span>
      <div className="sm:mt-6 relative z-10 flex flex-col gap-18 lg:gap-8 sm:flex-row items-center sm:justify-between">
        {/* Hero-left */}
        <div className="max-w-[460px] mt-14 sm:mt-10 flex-1">
          <div>
            <h1 className="text-[42px] text-center sm:text-start sm:text-[52px] lg:text-7xl leading-[46px] md:leading-[50px] lg:leading-[65px] tracking-tight font-[900] text-[#014F2A]">
              <span className="sm:block">Smart </span>
              <span className="sm:hidden">Investments in </span>
              <span className="hidden sm:block">Investments&nbsp;in </span>
              <span className="sm:block">Agriculture</span>
            </h1>
            <p className="mt-2 sm:mt-5 font-bold sm:font-normal text-center sm:text-start text-[16px]">
              Grow your wealth by investing in profitable, secure and
              Impact-driven ventures.
            </p>
          </div>

          <div className="mt-1 sm:mt-4 flex items-center justify-center sm:justify-start gap-1">
            <Image
              src={"/images/SEC-badge.svg"}
              alt="SEC-badge"
              height={25}
              width={25}
            />
            <p className="text-[12px] font-semibold text-[#2677B7]">
              SEC Licensed
            </p>
          </div>

          <p className="sm:mt-1 text-center sm:text-left text-[12px]">
            We are SEC Licensed as a crowdfunding intermediary
          </p>

          {/* App Download Button */}
          <div className="mt-1 sm:mt-4 flex gap-3 justify-center sm:justify-start">
            <AppDownloadButton
              ImgSrc={"/images/playstore-green.svg"}
              platform={"Google Play"}
              color={"#008647"}
            />
            <AppDownloadButton
              ImgSrc={"/images/apple-green.svg"}
              platform={"App Store"}
              color={"#008647"}
            />
          </div>
        </div>

        {/* Hero-right*/}

        <div className="flex-1 w-full sm:w-1/2 lg:w-3/5 relative">
          <div className="w-full h-full">
            {/* Mobile Hero Image */}
            <div className="sm:hidden">
              <HeroImage />
            </div>
            <Image
              src={"/images/hero-image.png"}
              width={700}
              height={700}
              alt="hero-image"
              priority
              className="hidden sm:block w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

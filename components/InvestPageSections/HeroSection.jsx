import React from "react";
import AppDownloadButton from "../ui/AppDownloadButton";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="mt-20 mx-auto">
      <div className="max-w-[350px] sm:max-w-[640px] mx-auto flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl font-bold">
          Invest Ethically & <br className="sm:hidden" />{" "}
          <span className="text-[#008647]">Grow Confidently</span>
        </h1>
        <p className="max-w-[484px] mt-6 text-sm text-center leading-5 font-medium">
          Halal, secure, and impact-driven. Start with as little as ₦20,000 and
          earn up to 35% profit sharing returns
        </p>
        <div className="mt-5 flex gap-3">
          <AppDownloadButton url={"/images/googleplay.svg"} />
          <AppDownloadButton url={"/images/appstore.svg"} />
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
        <p className="sm:mt-1 text-center sm:text-left text-[12px] font-medium">
          We are SEC Licensed as a crowdfunding intermediary
        </p>
        {/* Mobile Image */}
        <div className="mt-5 lg:hidden w-full h-auto px-4">
          <Image
            src={"/images/invest-heromobile.png"}
            width={1200}
            height={500}
            alt="hero-img"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Desktop Image */}
        <div className="hidden lg:block w-[948.26px] h-[471px]">
          <Image
            src={"/images/invest-heroimg.png"}
            width={1200}
            height={500}
            alt="hero-img"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

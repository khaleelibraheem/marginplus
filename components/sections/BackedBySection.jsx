import React from "react";
import Image from "next/image";

export default function BackedBySection() {
  return (
    <section className="mt-20 max-w-[1400px] mx-auto px-7">
      <h2 className="text-[#014F2A] text-center mt-4 sm:mt-8 font-bold text-[24px] sm:text-[26px]">
        Backed by Industry Leaders
      </h2>

      {/* Desktop Text */}
      <div className="hidden sm:flex flex-col gap-1">
        <p className="bg-[#f2faf4] text-xl text-center max-w-[700px] mx-auto font-semibold">
          We collaborated with trusted financial and agricultural institutions
          ensure
        </p>
        <p className="bg-[#f2faf4] text-xl text-center max-w-[700px] mx-auto font-semibold">
          secure and profitable investments
        </p>
      </div>

      {/* Mobile Text */}
      <div className="flex sm:hidden flex-col gap-1">
        <p className="bg-[#f2faf4] text-center max-w-[550px] mx-auto font-semibold text-[16px]">
          We collaborated with trusted financial and
        </p>
        <p className="bg-[#f2faf4] text-center max-w-[550px] mx-auto font-semibold text-[16px]">
          agricultural institutions ensure secure and
        </p>
        <p className="bg-[#f2faf4] text-center max-w-[550px] mx-auto font-semibold text-[16px]">
          profitable investments
        </p>
      </div>

      <div className="mt-4 md:mt-6 flex justify-center gap-3 md:gap-6">
        <Image
          src="/images/nirsal-logo.png"
          alt="NIRSAL logo"
          width={100}
          height={100}
          className="w-[100px] h-[60px] md:w-[150px] md:h-[80px]"
        />
        <Image
          src="/images/fmard-logo.png"
          alt="FMARD logo"
          width={100}
          height={100}
          className="w-[150px] h-[60px] md:w-[200px] md:h-[80px]"
        />
        <Image
          src="/images/jaiz-logo.png"
          alt="Jaiz logo"
          width={100}
          height={100}
          className="w-[100px] h-[60px] md:w-[150px] md:h-[80px]"
        />
      </div>
    </section>
  );
}

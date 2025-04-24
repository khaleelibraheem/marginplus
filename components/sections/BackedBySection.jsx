import React from "react";
import Image from "next/image";

export default function BackedBySection() {
  return (
    <section className="mt-20 max-w-[1400px] mx-auto px-8 mb-20 sm:mb-0">
      <h2 className="text-[#014F2A] text-center mt-4 sm:mt-8 font-bold text-[26px]">
        Backed by Industry Leaders
      </h2>
      <div className="hidden sm:flex flex-col gap-1">
        <p className="bg-[#f2faf4] text-center max-w-[550px] mx-auto font-semibold">
          We collaborated with trusted financial and agricultural institutions
          ensure
        </p>
        <p className="bg-[#f2faf4] text-center max-w-[550px] mx-auto font-semibold">
          secure and profitable investments
        </p>
      </div>

      {/* Mobile Text */}
      <div className="flex sm:hidden flex-col gap-1">
        <p className="bg-[#f2faf4] text-center max-w-[550px] mx-auto font-semibold text-[17px]">
          We collaborated with trusted financial and
        </p>
        <p className="bg-[#f2faf4] text-center max-w-[550px] mx-auto font-semibold text-[17px]">
          agricultural institutions ensure secure and
        </p>
        <p className="bg-[#f2faf4] text-center max-w-[550px] mx-auto font-semibold text-[18px]">
          profitable investments
        </p>
      </div>

      <div className="mt-9 flex justify-center gap-3">
        <Image src={"/images/nirsal-logo.svg"} alt="logo" width={100} height={100} />
        <Image src={"/images/fmard-logo.svg"} alt="logo" width={100} height={100} />
        <Image src={"/images/jaiz-logo.svg"} alt="logo" width={100} height={100} />
      </div>
    </section>
  );
}

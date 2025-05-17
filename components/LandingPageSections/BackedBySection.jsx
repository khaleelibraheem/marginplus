import React from "react";
import Image from "next/image";

export default function BackedBySection() {
  return (
    <section className="mt-20">
      <div className="sm:max-w-[478.31px] mx-auto flex flex-col items-center">
        <div>
          <h2 className="text-center font-bold text-[20px] sm:text-[24px]">
            Backed by Industry Leaders
          </h2>
          <p className="mt-6 text-sm text-center leading-5 font-medium">
            We collaborated with trusted financial and agricultural institutions
            ensure <br className="sm:hidden" /> secure and profitable
            investments
          </p>
        </div>

        <div className="mt-4 flex gap-3 flex-wrap px-4 sm:px-0">
          <Image
            src="/images/nirsal-logo.png"
            alt="NIRSAL logo"
            width={100}
            height={100}
            className="w-[86.49px] h-[46.64px]"
            priority
          />
          <Image
            src="/images/fmard-logo.png"
            alt="FMARD logo"
            width={100}
            height={100}
            className="w-[121.88px] h-[53.68px]"
            priority
          />
          <Image
            src="/images/jaiz-logo.png"
            alt="Jaiz logo"
            width={100}
            height={100}
            className="w-[99.4px] h-[53.68px]"
            priority
          />
          <Image
            src="/images/taj-bank.png"
            alt="Jaiz logo"
            width={100}
            height={100}
            className="w-[128px] h-[43px]"
            priority
          />
        </div>
      </div>
    </section>
  );
}

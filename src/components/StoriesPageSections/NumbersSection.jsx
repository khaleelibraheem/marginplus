import Image from "next/image";
import React from "react";

export default function NumbersSection() {
  return (
    <section className="mt-20 mb-20">
      {/* Section Header */}
      <div className="max-w-[350px] sm:max-w-[640px] mx-auto flex flex-col items-center">
        <h2 className="text-center font-bold text-[21px] sm:text-[26px] opacity-80">
          Our Impact in Numbers
        </h2>
        <p className="mt-4 text-sm text-center leading-5">
          There numbers tell the story of how we&apos;re transforming agriculture
          through innovation, capital and collaboration
        </p>
      </div>

      <div className="mt-10 flex flex-col items-center md:flex-row gap-4 px-4 justify-center flex-wrap">
        <div className="w-[288px] h-[288px]">
          <Image
            src={"/images/number-1.png"}
            width={500}
            height={500}
            alt="numbers"
            className="w-full h-full"
            priority
          />
        </div>

        <div className="w-[336px] h-[336px]">
          <Image
            src={"/images/number-2.png"}
            width={500}
            height={500}
            alt="numbers"
            className="w-full h-full"
            priority
          />
        </div>

        <div className="w-[288px] h-[288px]">
          <Image
            src={"/images/number-3.png"}
            width={500}
            height={500}
            alt="numbers"
            className="w-full h-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}

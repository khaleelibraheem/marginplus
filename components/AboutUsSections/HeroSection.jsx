import Image from "next/image";
import React from "react";
import BackedBySection from "../LandingPageSections/BackedBySection";

export default function HeroSection() {
  return (
    <section className="mt-32 mx-auto flex flex-col items-center">
      {/* Section Header */}
      <div className="max-w-[350px] sm:max-w-[640px] mx-auto flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-center">
          Marginplus Group
        </h1>
        <p className="mt-6 text-sm text-center leading-5 font-medium">
          We’re a movement of changemakers, sowing hope, growing futures, and
          transforming Africa’s story through
          agricultural investment.
        </p>
      </div>

      <div className="px-4 mt-20 sm:max-w-[851px]">
        <Image
          src={"/images/about-us.png"}
          width={1500}
          height={500}
          alt="about-us"
          priority
        />
      </div>

      <BackedBySection />
    </section>
  );
}

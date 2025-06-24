import React from "react";
import InvestmentSteps from "../InvestmentSteps";

export default function HowitWorksSection() {
  return (
    <div className="mt-20 px-4 lg:px-6 max-w-[1400px] mx-auto">
      {/* Section Header */}
      <div className="max-w-[350px] sm:max-w-[640px] mx-auto flex flex-col items-center">
        <h2 className="text-center font-bold text-[24px] opacity-80 leading-7">
          How it works
        </h2>
        <p className="mt-6 text-sm text-center leading-5">
          Multiple paths, one goal. Building wealth through real purpose driven
          ventures across Africa.
        </p>
      </div>
      <InvestmentSteps />
    </div>
  );
}

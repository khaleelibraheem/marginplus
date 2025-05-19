import React from "react";
import OurCoreValuesCard from "./OurCoreValuesCard";

const valueCardData = [
  {
    id: 1,
    imgUrl: "/images/smart-star.svg",
    title: "Excellence",
    text: "We deliver with integrity, precision, and a commitment to quality at every step.",
    imgClassName: "w-[90.6px] h-[64px]",
  },
  {
    id: 2,
    imgUrl: "/images/smart-impact.svg",
    title: "Real Impact",
    text: "We invest in agriculture to strengthen food and economic stability across Africa.",
    imgClassName: "w-[86.11px] h-[64px]",
  },
  {
    id: 3,
    imgUrl: "/images/smarticon-2.svg",
    title: "Ethical Profit Sharing",
    text: "You earn more when the projects you back succeed—it's growth, shared.",
    imgClassName: "w-[109.94px] h-[64px]",
  },
  {
    id: 4,
    imgUrl: "/images/smart-tractor.svg",
    title: "Industry Expertise",
    text: "Our team knows the land, the market, and how to turn potential into results.",
    imgClassName: "w-[80.07px] h-[60px]",
  },
  {
    id: 5,
    imgUrl: "/images/smarticon-3.svg",
    title: "Trusted Partnerships",
    text: "We work with top institutions to ensure your investments are secure and impactful.",
    imgClassName: "w-[50.24px] h-[64px]",
  },
];

export default function OurValuesSection() {
  return (
    <section className="mt-20 max-w-[1400px] mx-auto">
      {/* Section Header */}
      <div className="max-w-[350px] sm:max-w-[640px] mx-auto flex flex-col items-center">
        <h2 className="text-center font-bold text-[21px] sm:text-[26px] opacity-80">
          Our Core Values
        </h2>
        <p className="mt-6 text-sm text-center leading-5">
          The values that guide our mission, shape our partnerships, and drive
          every investment decision.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-[1228px] mx-auto px-4 mt-10 flex flex-col md:flex-row md:flex-wrap gap-5 lg:gap-0">
        {valueCardData.map((card) => (
          <OurCoreValuesCard
            key={card.id}
            imgUrl={card.imgUrl}
            title={card.title}
            text={card.text}
            imgClassName={card.imgClassName}
          />
        ))}
      </div>
    </section>
  );
}

import React from "react";
import SmartInvestorsCard from "./SmartInvestorsCard";

const investorCardData = [
  {
    id: 1,
    imgUrl: "/images/smarticon-1.svg",
    title: "Vetted Investment Opportunities",
    text: "Handpicked agricultural investment aligned with impact and strong growth potential",
    imgClassName: "w-[75.26px] h-[60px]",
  },
  {
    id: 2,
    imgUrl: "/images/smarticon-2.svg",
    title: "Earn up to 35% Returns",
    text: "Enjoy competitive returns with flexible options tailored to your risk appetite.",
    imgClassName: "w-[103px] h-[60px]",
  },
  {
    id: 3,
    imgUrl: "/images/smarticon-3.svg",
    title: "Transparent, Secure, and Regulated",
    text: "We are SEC licensed, ensuring your investments are secure and fully transparent.",
    imgClassName: "w-[47px] h-[60px]",
  },
  {
    id: 4,
    imgUrl: "/images/smarticon-4.svg",
    title: "Invest in Africa's Future",
    text: "Invest in real agricultural projects powering Africa's future economy and food systems.",
    imgClassName: "w-[69px] h-[60px]",
  },
];

export default function SmartInvestorsSection() {
  return (
    <section className="mt-10 max-w-[1400px] mx-auto">
      {/* Section Header */}
      <div className="max-w-[350px] sm:max-w-[640px] mx-auto flex flex-col items-center">
        <h2 className="text-center font-bold text-[21px] sm:text-[26px] opacity-80">
          Smart Investors Invest With Marginplus
        </h2>
        <p className="mt-6 text-sm text-center leading-5">
          Join a community of forward-thinking investors funding real impact in
          agriculture.
        </p>
      </div>

      {/* Cards */}
      <div className="px-6 lg:px-10 mt-10 grid grid-cols-1 lg:grid-cols-4 place-items-center gap-5 lg:gap-0">
        {investorCardData.map((card) => (
          <SmartInvestorsCard
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

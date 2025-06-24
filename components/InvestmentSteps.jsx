import React from "react";

const steps = [
  {
    img: "/images/glass.svg",
    title: "Discover Opportunities",
    description: "We list high potential, expert vetted agricultural projects ready for funding.",
    bg: "bg-[#F6F6F6]",
  },
  {
    img: "/images/coins.svg",
    title: "Invest in a project",
    description: "You select the projects that align with your short or long term goals.",
    bg: "bg-[#F6F6F6]",
  },
  {
    img: "/images/magnifying-glass.svg ",
    title: "Fund and Track Progress",
    description: "You get updates and can track progress right from your dashboard.",
    bg: "bg-[#F6F6F6]",
  },
  {
    img: "/images/pie.svg",
    title: "Earn Shared Profits",
    description: "When the cycle ends, we share the profits with you.",
    bg: "bg-[#F6F6F6]",
  },
];

const InvestmentSteps = () => {
  return (
    <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-6 place-items-center">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`rounded-[28px] w-full lg:w-[292px] py-[20px] px-[21px] ${step.bg} hover:bg-[#B2FF96] transition-colors duration-300`}
        >
          <img
            src={step.img}
            alt={step.title}
            className="w-[130.55px] h-[76px] mb-3"
          />
          <h3 className="text-[20px] font-bold text-[#008647] mb-2">
            {step.title}
          </h3>
          <p className="text-sm opacity-80">{step.description}</p>
        </div>
      ))}
    </div>
  );
};

export default InvestmentSteps;

import React from "react";

export default function SoundLikeYouSection() {
  const cards = [
    {
      title: "Innovative",
      bgColor: "bg-[#00A85947]",
      textColor: "text-[#014F2A]",
      patternColor: "stroke-gray-600",
    },
    {
      title: "Curious",
      bgColor: "bg-[#FFEEBE]",
      textColor: "text-[#000000B2]",
      patternColor: "stroke-yellow-600",
    },
    {
      title: "Growth-minded",
      bgColor: "bg-[#B2FF96]",
      textColor: "text-[#014F2A]",
      patternColor: "stroke-white",
    },
    {
      title: "Solution-driven",
      bgColor: "bg-[#008647]",
      textColor: "text-white",
      patternColor: "stroke-green-500",
    },
  ];

  const DiagonalPattern = ({ patternColor }) => (
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern
          id={`diagonal-${patternColor}`}
          patternUnits="userSpaceOnUse"
          width="20"
          height="20"
          patternTransform="rotate(45)"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="20"
            className={patternColor}
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill={`url(#diagonal-${patternColor})`}
      />
    </svg>
  );
  return (
    <section className="mt-20 px-4 max-w-[1440px] mx-auto">
      {/* Section Header */}
      <div className="max-w-[350px] sm:max-w-[812px] mx-auto flex flex-col items-center">
        <h2 className="text-center text-[#004D2E] font-bold text-[21px] sm:text-[26px] opacity-80">
          Sound Like You?
        </h2>
        <p className="mt-4 text-sm text-center leading-5">
          We’re always looking for people who are
        </p>
      </div>
      <div className="mt-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`relative ${card.bgColor} rounded-[22px] overflow-hidden h-[166.44px] lg:h-[226px]`}
            >
              <DiagonalPattern patternColor={card.patternColor} />
              <div className="relative z-10 p-6 h-full flex items-center justify-center">
                <h3
                  className={`text-[24px] font-bold ${card.textColor} text-center italic`}
                >
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

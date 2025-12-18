"use client";

import Image from "next/image";
import { MeetTheTeamSection } from "./MeetTheTeamSection";
import { GetInTouchSection } from "./GetInTouchSection";

const ourValues = [
  {
    title: "Impact",
    description: "We measure success by lives improved, communities strengthened, and economies boosted.",
    bgColor: "#014F2A",
  },
  {
    title: "Empowerment",
    description: "Equipping farmers with knowledge, finance, insurance, and market access to thrive independently",
    bgColor: "#008647",
  },
  {
    title: "Profitability",
    description: "Ensuring structured farming communities generate real, sustainable financial returns.",
    bgColor: "#008647",
  },
  {
    title: "Integrity",
    description: "Transparent operations that build trust between farmers, investors, and the community.",
    bgColor: "#008647",
  },
  {
    title: "Innovation",
    description: "Leveraging technology and structured models to transform traditional agriculture into scalable, bankable enterprises.",
    bgColor: "#B2FF96",
  },
];

export const AboutUs = () => {
  return (
    <main className="pt-30 lg:pt-30 xl:pt-40 ">
      <section className="mx-auto max-w-[1200px] px-5 mb-10">
        <header className="mx-auto flex flex-col items-center px-4 mb-10 md:mb-15">
          <h1 className="text-[50px] md:text-[46px] font-bold text-center mb-4">Who We Are</h1>
          <p className="text-center text-[16px] md:text-[18px] font-medium text-gray-700">
            Marginplus is a community-owned agricultural enterprise that turns scattered smallholders into organized, profitable farming communities, creating impact, shared wealth, and long-term
            growth.
          </p>
        </header>

        <div className="hidden md:block relative w-full overflow-hidden h-[320px] rounded-[25px]">
          <Image src="/images/about-banner.png" width={1200} height={320} alt="About Marginplus" className="w-full h-full object-cover object-bottom" />
        </div>

       {/* Mobile Image */}
        <div className="block md:hidden relative w-full overflow-hidden h-[332px] rounded-[25px]">
          <Image src="/images/mobile-vision-banner.jpg" width={1200} height={320} alt="About Marginplus" className="w-full h-full object-cover object-bottom" />
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] py-10 md:py-20 pt-30 px-5">
        <article className="flex flex-col lg:flex-row gap-12 items-center w-full mb-8 md:mb-20">
          <header className="max-w-[628px] text-left">
            <h3 className="text-[40px] md:text-[40px] font-bold mb-4 text-center md:text-left">Vision</h3>
            <p className="text-[16px] md:text-[18px] font-medium text-gray-700 text-center md:text-left">
              Our vision is to make agriculture across Africa structured, profitable, and inclusive, creating shared wealth, impact, and opportunity for every farming community.
            </p>
          </header>

          <Image src={"/images/vision-2.jpg"} width={489} height={314} alt="banner" className="rounded-[18px]" />
        </article>

        <article className="flex flex-col lg:flex-row gap-12 items-center w-full mb-20">
          <Image src={"/images/vision-3.jpg"} width={489} height={314} alt="banner" className="rounded-[18px]" />

          <header className="max-w-[628px] text-left">
            <h3 className="text-[40px] md:text-[40px] font-bold mb-4 text-center md:text-left">Mission</h3>
            <p className="text-[16px] md:text-[18px] font-medium text-gray-700 text-center md:text-left">
              To build structured farming clusters through agents, equipping farmers with training, finance, insurance, and market access, turning smallholder farmers into organized, bankable, and
              profitable communities.
            </p>
          </header>
        </article>

        <p className="font-bold text-[30px] lg:text-[30px] text-black/70 text-center px-0 md:px-20">
          We believe <span className="text-secondary"> agriculture </span> becomes <span className="text-secondary"> powerful </span> when <span className="text-secondary"> farmers </span> are
          connected, not when they work alone.
        </p>
      </section>

      <section className="max-w-[1200px] mx-auto px-5 md:px-10 py-20">
        <header className="w-full mb-10">
          <h2 className="text-center font-bold text-[21px] sm:text-[26px] opacity-80">Our Values</h2>
        </header>

        <div className="block flex flex-col md:flex-row flex-wrap justify-center gap-4 md:gap-5">
          {ourValues.map((step, index) => {
            const isLast = index === ourValues.length - 1;

            return (
              <div
                key={index}
                className={`w-full md:w-[30%] px-2 md:px-5 py-5 md:py-10   rounded-[12px] md:rounded-[30px] hover:shadow-md transition-shadow duration-300 text-center ${isLast ? "text-primary" : "text-white"}`}
                style={{ backgroundColor: step.bgColor }}
              >
                <h3 className=" text-[20px] md:text-[24px] font-bold mb-2 md:mb-5">{step.title}</h3>
                <p className="text-[16px] md:text-[16px] font-medium">{step.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <MeetTheTeamSection />

      <GetInTouchSection />
    </main>
  );
};

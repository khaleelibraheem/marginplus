import { Section } from "lucide-react";
import React from "react";
import Button from "../ui/Button";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="mt-20 mx-auto flex flex-col items-center">
      <div className="max-w-[355px] sm:max-w-[640px] mx-auto flex flex-col items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-center">
            Real <span className="text-[#008647]">People.</span>{" "}
          </h1>
          <p className="mt-6 text-sm text-center leading-5 font-medium">
            At Marginplus, every investment tells a story of growth,
            transformation, and empowerment. <br className="hidden sm:block" />{" "}
            Discover how investors are building wealth, farmers{" "}
            <br className="sm:hidden" /> are scaling their businesses, and
            communities are being changed for good.
          </p>
        </div>

        <div className="flex justify-center mt-7 items-center ">
          <Link
            href={"https://www.marginplus.ng/"}
            className="cursor-pointer w-[226.8px] h-[60px]"
            target="_blank"
          >
            <button className="flex gap-2 items-center justify-center cursor-pointer px-[26px] py-[10px] rounded-xl font-bold bg-[#014D2F] text-white w-full h-full text-[13px]">
              <span>#Watch ImpactSeries</span>
              <Image
                src={"/images/youtube.svg"}
                width={24}
                height={24}
                className="w-[24px] h-[24px]"
                alt="youtube-icon"
                priority
              />
            </button>
          </Link>
        </div>
      </div>

      <div className="mt-10 flex flex-col md:flex-row gap-4 px-4 justify-center flex-wrap">
        <Link
          href={"#"}
          className="w-full h-auto md:w-[395px] md:h-[236px]"
        >
          <Image
            src={"/images/stories-1.png"}
            width={500}
            height={500}
            alt="stories-youtube"
            className="w-full h-full"
            priority
          />
        </Link>
        <Link
          href={"#"}
          className="w-full h-auto md:w-[395px] md:h-[236px]"
        >
          <Image
            src={"/images/stories-2.png"}
            width={500}
            height={500}
            alt="stories-youtube"
            className="w-full h-full"
            priority
          />
        </Link>
        <Link
          href={"#"}
          className="w-full h-auto md:w-[395px] md:h-[236px]"
        >
          <Image
            src={"/images/stories-3.png"}
            width={500}
            height={500}
            alt="stories-youtube"
            className="w-full h-full"
            priority
          />
        </Link>
      </div>
    </section>
  );
}

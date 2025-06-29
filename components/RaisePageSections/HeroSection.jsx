import React from "react";
import Button from "../ui/Button";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="mt-32 mx-auto flex flex-col items-center">
      <div className="max-w-[355px] sm:max-w-[640px] mx-auto flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-center">
          Raise Funds for Your Farm Or Agribusiness with{" "}
          <span className="text-[#008647]">No Collateral</span>{" "}
        </h1>
        <p className="mt-6 text-sm text-center leading-5 font-medium">
          Marginplus helps farmers and agribusinesses across Africa access the
          funding they need to scale, innovate, and transform agriculture
        </p>

        <div className="flex flex-col mt-5 items-center">
          <Button
            text={"Apply for funding"}
            bgColor={"#014F2A"}
            textColor={"white"}
            url="https://www.partner.marginplus.ng/register"
          />
          <Link
            href="/help"
            className="inline-block text-[#014F2A] bg-transparent h-[45px] px-[32px] py-[18px] rounded-[10.5px] text-[13px] font-bold cursor-pointer"
          >
            Get in touch
          </Link>
        </div>
      </div>

      <div className="mt-20 px-4">
        <Image
          src={"/images/raise-heroimg.png"}
          width={1500}
          height={500}
          alt="farmers"
          className="sm:w-[635px] md:w-[760px] lg:w-[1020px] object-cover"
          priority
        />
      </div>
    </section>
  );
}

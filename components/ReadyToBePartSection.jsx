import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ReadyToBePartSection() {
  return (
    <section className="mt-20 px-6">
      <div className="relative w-full box-border px-[20px] py-5 sm:max-w-[756px] mx-auto border-[#B2FF9680] border-1 rounded-3xl  bg-[#F6F6F6]">
        <Image
          src={"/images/bell-icon.png"}
          width={100}
          height={100}
          alt="bell-icon"
          className="w-[40px] h-[50px] absolute top-[-15px] right-0"
          priority
        />
        <h2 className="leading-8 md:leading-normal text-center font-bold text-[24px] opacity-80">
          Ready to be part of something big?
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <p className="mt-5 text-sm font-semibold">
            <span className="font-bold">
              The future of investing in Africa is here!
            </span>{" "}
            and it starts with you. <br className="hidden md:block" />
            Join thousands of forward thinkers already taking the smarter path
            to profit and purpose.
          </p>

          <Link
            href="https://www.marginplus.ng/"
            className="cursor-pointer mt-5 md:mt-0 md:self-baseline-last"
          >
            <button className="cursor-pointer px-[26px] py-[8px] rounded-xl text-[13px] w-[156px] h-[49px] bg-[#014F2A] text-white font-bold">
              Partner with Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

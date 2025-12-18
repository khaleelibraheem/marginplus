import React from "react";
import Button from "../ui/Button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="mt-32 mx-auto">
      <div className="max-w-[350px] sm:max-w-[600px] mx-auto flex flex-col items-center">
        <h1 className="text-2xl sm:text-4xl font-bold text-center">
          Come Make Magic <span className="text-[#008647]">with Us</span>
        </h1>
        <p className="mt-6 text-sm text-center leading-5 font-medium">
          Take the next step in your career. Join the Marginplus team to help
          people grow wealth through simple, secure, and meaningful investment
          experiences.
        </p>
      </div>
      <div className="flex mt-5 items-center justify-center">
        <Button
          text={"View available Jobs"}
          bgColor={"#014F2A"}
          textColor={"white"}
          url="https://www.partner.marginplus.ng/register"
        />
        <Button
          text={"Get in touch"}
          bgColor={"transparent"}
          textColor={"#014F2A"}
        />
      </div>

       <div className="mt-32">
        <Image
          src={"/images/careersmall.png"}
          width={1500}
          height={500}
          alt="farmers"
          className="sm:hidden w-full object-cover"
          priority
        />

         <Image
          src={"/images/careerbig.png"}
          width={1500}
          height={500}
          alt="farmers"
          className="hidden sm:block object-cover w-full"
          priority
        />
      </div>
    </section>
  );
}

import React from "react";
import Button from "../ui/Button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="mt-32 mx-auto">
      <div className="max-w-[350px] sm:max-w-[640px] mx-auto flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl font-bold">
          Why Choose <br className="sm:hidden" />{" "}
          <span className="text-[#008647]">Marginplus?</span>
        </h1>
        <p className="mt-6 text-sm text-center leading-5 font-medium">
          Marginplus is your <span className="font-bold">trusted gateway</span> to secure, investments in Africa,
          backed by real assets, regulated by the SEC, and designed to drive
          measurable impact across communities and industries.
        </p>
        <div className="mt-5">
          <Button text={"Learn more"} bgColor={"#014F2A"} textColor={"white"} />
          <Button
            text={"Contact Us"}
            bgColor={"transparent"}
            textColor={"#014F2A"}
          />
        </div>
      </div>

      <div className="mt-20 w-full">
        <Image
          src={"/images/image-carousel.png"}
          width={1500}
          height={500}
          alt="image-carousel"
          className="w-full object-cover h-[116px] sm:h-full"
          priority
        />
      </div>
    </section>
  );
}

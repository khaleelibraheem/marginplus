import React from "react";
import Accordion from "./Accordion";

export default function FAQSection() {
  return (
    <section className="max-w-[1400px] mx-auto mt-10">
      {/* Section Header */}
      <div className="flex max-w-[350px] sm:max-w-[640px] mx-auto flex-col items-center">
        <h2 className="text-center font-bold text-[20px] lg:text-[36px] opacity-80">
          Frequently Asked questions
        </h2>
        <p className="mt-6 text-sm text-center leading-4">
        Whether you are leaning about Marginplus, looking to invest or planning to raise funds. Explore answers to the most common questions
        </p>
      </div>
      <Accordion />
    </section>
  );
}

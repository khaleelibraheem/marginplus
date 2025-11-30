import Image from "next/image";
import React from "react";

export default function OurVisionSection() {
  return (
    <section className="mt-20 flex flex-col gap-20 sm:items-center md:px-4 border border-red-500">
      <div className="flex flex-col lg:flex-row sm:justify-center sm:items-center lg:gap-20">
        <div className="w-full sm:w-[399px]">
          <Image
            src={"/images/vision-1.png"}
            width={500}
            height={500}
            alt="vision-1"
            className="w-full sm:rounded-[27px]"
            priority
          />
        </div>
        <div className="mt-4 max-w-[359px] lg:max-w-[704px] mx-auto">
          <h3 className="font-bold text-xl">
            We were born from a simple belief
          </h3>
          <p className="mt-3 text-sm font-medium">
            Africa's agricultural potential is enormous and investing in it
            should be{" "}
            <span className="text-[#008647]">simple, profitable,</span> and{" "}
            <span className="text-[#008647]">impact-driven.</span> We exist to
            connect Africans around the world to Africa's booming agricultural
            sector safely, securely, and transparently.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse sm:justify-center sm:items-center lg:gap-20">
        <div className="w-full sm:w-[399px]">
          <Image
            src={"/images/vision-2.png"}
            width={500}
            height={500}
            alt="vision-2"
            className="w-full sm:rounded-[27px]"
            priority
          />
        </div>
        <div className="mt-4 max-w-[359px] lg:max-w-[704px] mx-auto">
          <h3 className="font-bold text-xl">Our Unique Profit Sharing Model</h3>
          <p className="mt-3 text-sm font-medium">
            At Marginplus, we connect you to expert vetted agricultural projects
            through a licensed and transparent platform. Our profit-sharing
            model lets you earn sustainable returns while fueling real economic
            growth across Africa. We're building a future where your investments
            create impact, not just income.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row sm:justify-center sm:items-center lg:gap-20 border border-blue-500">
        <div className="w-full sm:w-[399px]">
          <Image
            src={"/images/vision-3.png"}
            width={500}
            height={500}
            alt="vision-3"
            className="w-full sm:rounded-[27px]"
            priority
          />
        </div>
        <div className="mt-4 max-w-[359px] lg:max-w-[704px] mx-auto">
          <div>
            <h3 className="font-bold text-xl">Our Vision</h3>
            <p className="mt-3 text-sm font-medium">
              To become Africa's leading platform for alternative agricultural
              financing, empowering individuals to invest in the continent's
              future while transforming agriculture into a powerful engine for
              inclusive growth
            </p>
          </div>
          <div className="mt-5">
            <h3 className="font-bold text-xl">Our Mission</h3>
            <p className="mt-3 text-sm font-medium">
              Democratize wealth creation by bridging the critical financing gap
              faced by African farmers and agribusinesses. Through accessible,
              impact-driven investment opportunities, we aim to unlock the
              continent's untapped agricultural potential and fuel sustainable
              prosperity for all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

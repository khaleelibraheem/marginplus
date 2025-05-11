import Image from "next/image";
import React from "react";

export default function FarmersSection() {
  return (
    <section className="mt-20 bg-[#F6F6F6] py-10">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-5 sm:justify-center sm:items-center">
        <div className="px-4">
          <Image
            src={"/images/raise-farmers.png"}
            width={1500}
            height={500}
            alt="farmers"
            className="w-[546px]"
          />
        </div>
        <div className="px-4 sm:w-[645px] mt-5 lg:mt-0">
          <h2 className="font-semibold text-xl sm:text-[32px] sm:leading-10">
            Marginplus helps <span className="text-[#008647]">farmers</span> and{" "}
            <span className="text-[#008647]">agribusinesses</span> across Africa
            access the funding they need to scale, innovate, and transform
            agriculture
          </h2>
          <div className="mt-5 w-[312px] h-1 bg-[#B2FF96]"></div>
          <p className="mt-5 text-sm font-medium">
            Whether you&apos;re growing crops, raising livestock, or building an
            agro-processing venture, our investor community is ready to back
            you.
          </p>
          <div className="mt-5">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src={"/images/verify-green.png"}
                width={20}
                height={20}
                alt="verify"
              />
              <p className="font-semibold text-sm leading-4">
                Raise up to ₦100 million for your agricultural project
              </p>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src={"/images/verify-green.png"}
                width={20}
                height={20}
                alt="verify"
              />
              <p className="font-semibold text-sm leading-4">
                Connect with a trusted network of impact&#8209;driven investors
              </p>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src={"/images/verify-green.png"}
                width={20}
                height={20}
                alt="verify"
              />
              <p className="font-semibold text-sm leading-4">
                Simple, transparent, and secure fundraising process
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import React from "react";
import VerticalDashedLine from "./VerticalDashedLines";

export default function TimeLineSection() {
  return (
    <section className="mt-20 mx-auto mb-70 md:mb-40">
      {/* Section Header */}
      <div className="max-w-[350px] sm:max-w-[640px] mx-auto flex flex-col items-center">
        <h2 className="text-center font-bold text-[21px] sm:text-[26px] opacity-80">
          Raise Capital in four steps
        </h2>
        <p className="mt-6 text-sm text-center leading-5">
        Designed to make fundraising, simple, transparent and accessible for agri-entrepreneurs 
        </p>
      </div>

      <div className="sm:mt-20 px-4 flex justify-center gap-50">
        <div className="max-w-[825px]">
          <div className="flex flex-col lg:flex-row lg:items-center gap-5 mt-10 ">
            <div className="text-[50px] sm:text-8xl font-extrabold text-[#014F2A]">
              01
            </div>
            <div className="sm:max-w-[390px]">
              <h3 className="text-lg font-bold">Set Up Your Profile</h3>
              <p className="text-sm font-medium">
                Create your fundraising profile by signing up to access <br /> a
                growing community of investors eager to fund agriculture-driven
                projects.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-5 mt-5 lg:mt-16">
            <div className="text-[50px] sm:text-8xl font-extrabold text-[#008647]">
              02
            </div>
            <div className="lg:mt-[12px] sm:max-w-[635px]">
              <h3 className="text-lg font-bold">Submit Application</h3>
              <p className="text-sm font-medium mt-2">
                To be eligible to raise funds on Marginplus, you must:
              </p>

              <div className="mt-7">
                <div className="flex gap-3 items-center">
                  <Image
                    src={"/images/verify-green.png"}
                    width={20}
                    height={20}
                    alt="verify"
                  />
                  <h4 className="text-sm font-bold">
                    Share Your Farm or Agribusiness Background
                  </h4>
                </div>
                <p className="text-sm mt-2">
                  Tell us about your farm or agribusiness — including your
                  registration details, history, and operations.{" "}
                  <br className="sm:hidden" /> (You must have a verifiable farm
                  or business identity <br className="sm:hidden" /> and at least
                  2 years of operating history.)
                </p>
              </div>

              <div className="mt-7">
                <div className="flex gap-3 items-center">
                  <Image
                    src={"/images/verify-green.png"}
                    width={20}
                    height={20}
                    alt="verify"
                  />
                  <h4 className="text-sm font-bold">
                    Submit Proof of Registration
                  </h4>
                </div>
                <p className="text-sm mt-2">
                  {" "}
                  You will need to provide your Certificate of{" "}
                  <br className="sm:hidden" /> Incorporation or any
                  government-recognized <br className="sm:hidden" />{" "}
                  registration showing you're a legal farm or{" "}
                  <br className="sm:hidden" /> agribusiness.
                </p>
              </div>

              <div className="mt-7">
                <div className="flex gap-3 items-center">
                  <Image
                    src={"/images/verify-green.png"}
                    width={20}
                    height={20}
                    alt="verify"
                  />
                  <h4 className="text-sm font-bold">
                    State How You&apos;ll Use the Funds
                  </h4>
                </div>
                <p className="text-sm mt-2">
                  Clearly outline what you are raising money for —{" "}
                  <br className="sm:hidden" /> whether it's seeds, livestock,
                  expansion, agro- <br />
                  processing equipment, or other farming needs — and provide
                  supporting documents if available.
                </p>
              </div>

              <div className="mt-7">
                <div className="flex gap-3 items-center">
                  <Image
                    src={"/images/verify-green.png"}
                    width={20}
                    height={20}
                    alt="verify"
                  />
                  <h4 className="text-sm font-bold">
                    Provide Financial Information
                  </h4>
                </div>
                <p className="text-sm mt-2">
                  Demonstrate the viability of your farm or agribusiness.
                </p>
                <p className="text-sm">You will be asked to submit:</p>
                <ol className="list-decimal text-sm px-5">
                  <li className="mb-2">
                    A simple business or farm growth plan showing why you are
                    raising funds
                  </li>
                  <li className="mb-2">
                    Business bank account details (Account Name & Number)
                  </li>
                  <li>Recent financial records or statements (if available)</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-5 mt-10 lg:mt-16">
            <div className="text-[50px] sm:text-8xl font-extrabold text-[#B2FF96]">
              03
            </div>
            <div className="lg:mt-[10px]">
              <h3 className="text-lg font-bold">Application Review</h3>
              <p className="text-sm font-medium">
                Once submitted, your application will be carefully reviewed by
                the Marginplus team. We will verify your documents and
                farming/project history.
              </p>
              <p className="text-sm font-bold mt-3">
                Please allow a few working days for our team to{" "}
                <br className="sm:hidden" /> update you on your status.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center gap-5 mt-10 lg:mt-16">
            <div className="text-[50px] sm:text-8xl font-extrabold text-[#B3B3B3]">
              04
            </div>
            <div className="max-w-[390px]">
              <h3 className="text-lg font-bold">Listing</h3>
              <p className="text-sm font-medium">
                If approved, your farm or agribusiness will be listed on
                Marginplus for investors to discover, fund, and support your
                growth.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 hidden lg:block">
          <VerticalDashedLine
            height={920}
            color="#008647"
            dotPositions={[0, 0.18, 0.82, 1]}
          />
        </div>
      </div>
    </section>
  );
}

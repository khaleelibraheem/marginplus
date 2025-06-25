import Image from "next/image";
import { OpportunitiesButton } from "../ui/OpportunitiesCard";

export default function FeaturedSection() {
  return (
    <section className="relative mt-[-10px] max-w-[1440px] mx-auto px-4 lg:px-6">
      {/* Background Arrow in top-left */}
      <div className="hidden lg:block absolute -top-[150px] -left-[20px] z-0 pointer-events-none w-[420px] h-[327px]">
        <Image
          src="/images/logo-arrow.png"
          alt="arrow background"
          width={474}
          height={327}
          className="w-full h-full object-contain"
          priority
        />
      </div>

      {/* Green box with diagonal lines */}
      <div className="relative z-10 w-full">
        <div className="mt-10 sm:mt-20 rounded-2xl sm:rounded-[40px] px-4 py-4 sm:px-16 bg-[#00814C] flex justify-between items-center max-h-[333px] overflow-hidden relative">
          {/* Diagonal Lines */}
          <div className="absolute inset-0 z-0">
            <div className="h-full w-[70%] bg-vector-lines rounded-2xl sm:rounded-[40px]"></div>
          </div>

          {/* Text */}
          <div className="text-white relative z-10">
            <h2 className="text-[25px] sm:text-4xl font-bold">
              Invest with Confidence
            </h2>
            <ul className="mt-1 lg:mt-5 space-y-3 lg:space-y-1">
              <li className="flex gap-1 text-[14px] lg:text-xl">
                <Image
                  src={"/images/verify.svg"}
                  alt="verify"
                  width={20}
                  height={20}
                  priority
                />
                <p>
                  Earn &nbsp;
                  <span className="text-[#B2FF96] font-semibold">
                    up to 35% return &nbsp;
                  </span>
                  on your investments
                </p>
              </li>
              <li className="flex gap-1 text-[14px] lg:text-xl">
                <Image
                  src={"/images/verify.svg"}
                  alt="verify"
                  width={20}
                  height={20}
                  priority
                />
                <p>Secure, transparent, and hassle-free</p>
              </li>
              <li className="flex gap-1 text-[14px] items-start lg:text-xl leading-4 lg:leading-5">
                <Image
                  src={"/images/verify.svg"}
                  alt="verify"
                  width={20}
                  height={20}
                  className="mt-1"
                  priority
                />
                <p>
                  Vetted opportunities to build wealth <br /> and drive impact
                </p>
              </li>
            </ul>
            <div className="mt-4 sm:mt-8">
              <OpportunitiesButton
                text={"Invest now"}
                bgColor={"#B2FF96"}
                textColor={"#008647"}
              />
            </div>
          </div>

          {/* Shield */}
          <div className="hidden sm:block relative z-10">
            <Image
              src={"/images/shield.png"}
              alt="check"
              width={1500}
              height={500}
              className="w-[259.36px] h-[317px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

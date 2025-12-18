import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ImpactGoalsSection() {
  return (
    <>
      <section className="bg-[#F6F6F6] max-w-[1200px] lg:mx-auto mt-4 md:mt-20 md:mx-4 md:rounded-[30px]">
        <div className="px-4 py-20 md:py-10 flex flex-col justify-center md:items-center gap-7 lg:gap-20 md:flex-row md:px-14">
          <div className="max-w-[573px]">
            <h2 className="text-[24px] md:text-[40px] font-bold">
              Impact Goals
            </h2>
            <p className="text-[20px] md:text-[24px] mt-5 md:mt-3 opacity-80 md:leading-7">
              We use agriculture to reduce poverty, improve livelihoods, and
              build stronger farming communities across Africa.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <Image
              src={"/images/goal1.png"}
              width={100}
              height={100}
              alt="goals"
              className="w-full"
            />
            <Image
              src={"/images/goal2.png"}
              width={100}
              height={100}
              alt="goals"
              className="w-full"
            />
            <Image
              src={"/images/goal3.png"}
              width={100}
              height={100}
              alt="goals"
              className="w-full"
            />
            <Image
              src={"/images/goal4.png"}
              width={100}
              height={100}
              alt="goals"
              className="w-full"
            />
            <Image
              src={"/images/goal5.png"}
              width={100}
              height={100}
              alt="goals"
              className="w-full"
            />
            <Image
              src={"/images/goal6.png"}
              width={100}
              height={100}
              alt="goals"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Mobile Banner */}
      <section className="sm:hidden w-full flex justify-center">
        <div className="relative w-full max-w-[600px] overflow-hidden">
          <Image
            src="/images/reportbanner-mobile.svg"
            width={800}
            height={650}
            alt="Annual Report 2025"
            className="w-full h-auto object-cover"
          />
          <Link href={"/report"}>
            <button className="mt-6 absolute -bottom-[5%] ] right-[12%] z-10 w-[188px] border border-white rounded-[13px] py-[14.57px] px-[25.91px] bg-[#FFBF1B] text-black/80 font-bold text-[16px] mr-4  mb-10">
              Read the Report
            </button>
          </Link>
        </div>
      </section>

      {/* Desktop Banner */}
      <section className="hidden sm:flex w-full justify-center mx-auto max-w-[1200px]">
        <div className="relative w-full overflow-hidden mt-24">
          <Link href={"/report"} className="cursor-default">
            <Image
              src="/images/banner-desktop.svg"
              width={1200}
              height={400}
              alt="Annual Report 2025"
              className="w-full h-auto object-cover"
            />
          </Link>
          {/* <Link href={"/report"}>
            <button className="mt-6 absolute sm:bottom-[10%] sm:right-[1%] lg:bottom-[14%] w-[188px] lg:right-[6%] z-10 border border-white rounded-[10.5px] py-[14px] bg-[#FFC727] text-black/80 font-bold text-[14px] cursor-pointer lg:mr-10 lg:mb-10">
              Read the Report
            </button>
          </Link> */}
        </div>
      </section>
    </>
  );
}

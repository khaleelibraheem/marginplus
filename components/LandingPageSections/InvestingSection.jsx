import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";

export default function InvestingSection() {
  return (
    <section className="relative bg-[#67D99D] mt-20 py-20 overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center">
        <Image
          src="/images/mapofafrica.png"
          height={1500}
          width={400}
          alt="Map of Africa"
          className="object-fit h-[350px] w-[300px] sm:h-[470px] sm:w-[400px]"
        />
      </div>

      <div className="relative z-10 max-w-[320.21px] md:max-w-[519.94px] mx-auto flex justify-center items-center h-full">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-[30px] leading-10 sm:leading-14 tracking-wide sm:text-[54px] font-bold text-white text-center mb-3 sm:mb-5">
            You are investing in Africa&apos;s Future!
          </h3>
          <p className="font-medium text-center text-[14px] sm:text-[22px] leading-6 sm:leading-8">
            Every investment you make fuels the future by supporting farmers,
            businesses and <br /> sustainable wealth creation
          </p>
          <div className="mt-5">
            <Link
              href={"https://www.marginplus.ng/"}
              className="cursor-pointer"
              target="_blank"
            >
              <button className="cursor-pointer px-[32px] py-[14.08px] rounded-[10px] text-[13px] font-bold bg-white text-[#014F2A] h-[55.16px] w-[181.12px]">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

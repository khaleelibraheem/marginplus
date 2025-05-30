import Image from "next/image";
import Link from "next/link";

export default function FundingSection() {
  return (
    <section className="mt-20 flex px-4 mx-4 flex-col items-center gap-8 lg:justify-between lg:flex-row max-w-[766px] md:mx-auto bg-[#F6F6F6] rounded-[20px]">
      <div className="w-full sm:max-w-[417px] py-[16px]">
        <h3 className="text-[#014F2A] leading-6 font-bold text-[24px]">
          Need Funding for Your Agribusiness ?
        </h3>
        <p className="mt-4 font-medium text-sm">
          Whether you&apos;re a smallholder farmer or scaling an agro-processing
          venture, Marginplus helps you connect with impact-driven investors
          ready to support your journey.
        </p>

        <div className="mt-6 bg-[#008647] h-[2px] max-w-full sm:max-w-[304px]"></div>
        <div className="mt-10">
          <Link
            href={"https://www.marginplus.ng/"}
            className="cursor-pointer"
            target="_blank"
          >
            <button className="cursor-pointer px-[32px] py-[18px] rounded-[10px] text-[13px] font-bold bg-[#008647] text-white w-full h-[55.16px] sm:w-[181.12px]">
              Get Started
            </button>
          </Link>
        </div>
      </div>

      <div className="sm:max-w-[309px] sm:h-[243px] lg:self-baseline-last">
        <Image
          src={"/images/man.png"}
          alt="old man"
          priority
          width={1500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}

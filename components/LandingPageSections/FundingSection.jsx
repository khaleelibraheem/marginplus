import Image from "next/image";
import Link from "next/link";

export default function FundingSection() {
  return (
    <section className="mt-14 flex mx-4 flex-col items-center gap-8 lg:justify-between lg:flex-row max-w-[1060px] md:mx-auto">
      <div className="sm:max-w-[445px] sm:h-[310.11px] lg:self-baseline-last">
        <Image
          src={"/images/oldman.png"}
          alt="old man"
          priority
          width={1500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full sm:max-w-[497px] py-[16px] px-4">
        <h3 className="text-[#014F2A] leading-6 text-center lg:text-left font-bold text-[24px]">
          Need Funding for Your Agribusiness ?
        </h3>
        <p className="mt-2 font-medium text-sm">
          Whether you&apos;re a smallholder farmer or scaling an agro-processing
          venture, Marginplus helps you connect with impact-driven investors
          ready to support your journey.
        </p>

        <p className="mt-4 font-medium text-sm">
          MarginPlus helps everyday business owners like you access capital from
          a community of people who believe in your hustle.
        </p>
        <div className="mt-10 flex justify-center lg:justify-start">
          <Link
            href={"https://www.marginplus.ng/"}
            className="cursor-pointer"
            target="_blank"
          >
            <button className="cursor-pointer px-[32px] py-[18px] rounded-[10px] text-[13px] font-bold bg-[#014F2A] text-white">
              Apply for Funding
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

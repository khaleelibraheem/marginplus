import Image from "next/image";
import Button from "../ui/Button";

export default function FundingSection() {
  return (
    <section className="md:px-30 xl:px-45 mt-20 flex flex-col-reverse items-center lg:justify-between lg:flex-row gap-8 lg:items-baseline-last max-w-[1400px] mx-auto">
      <div className="px-8 md:px-0 w-full lg:w-1/2 sm:max-w-[450px]">
        <h3 className="text-[#014F2A] leading-9 font-bold text-[33px] sm:text-3xl sm:leading-9">
          Need Funding for Your Agribusiness ?
        </h3>
        <p className="mt-4 font-medium text-[21px] sm:text-[24px] leading-7 sm:leading-7 lg:text-justify">
          Whether you&apos;re a smallholder farmer or scaling an agro-processing
          venture, Marginplus helps you connect with impact-driven investors
          ready to support your journey.
        </p>
        <div className="mt-5">
          <Button
            text={"Apply now"}
            bgColor={"#014F2A"}
            textColor={"white"}
            pr={"45px"}
            pl={"45px"}
          />
        </div>
      </div>
      <div className="px-2 w-full lg:w-1/2 flex justify-center lg:justify-end">
        <div className="relative w-full max-w-[500px] h-[320px] lg:h-[350px]">
          <Image src={"/images/old-man.png"} alt="old man" priority fill />
        </div>
      </div>
    </section>
  );
}

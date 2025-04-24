import Image from "next/image";
import Button from "../ui/Button";

export default function FundingSection() {
  return (
    <section className="px-8 md:px-40 mt-36 flex flex-col-reverse sm:justify-between sm:flex-row gap-8 sm:items-center max-w-[1400px] mx-auto">
      <div className="w-full sm:max-w-[450px]">
        <h3 className="text-[#014F2A] leading-9 font-bold text-[33px] sm:text-3xl sm:leading-9">Need Funding for Your Agribusiness?</h3>
        <p className="mt-4 font-semibold text-[21px] sm:text-[24px] leading-7 sm:leading-7">
          Whether you&apos;re a smallholder farmer or scaling an agro-processing
          venture, Marginplus helps you connect with impact-driven investors
          ready to support your journey.
        </p>
       <div className="mt-5">
       <Button text={"Apply now"} bgColor={"#014F2A"} textColor={"white"} pr={"45px"} pl={"45px"}/>
       </div>
      </div>
      <div>
        <Image
          src={"/images/oldman.svg"}
          alt="old man"
          height={500}
          width={500}
        />
      </div>
    </section>
  );
}

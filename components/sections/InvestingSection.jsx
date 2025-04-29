import Image from "next/image";

export default function InvestingSection() {
  return (
    <section className="relative bg-[#67D99D] mt-20 py-12 h-[400px] sm:h-[355px] overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center">
        <Image
          src="/images/mapofafrica.svg"
          height={400}
          width={400}
          alt="Map of Africa"
        />
      </div>

      <div className="relative z-10 flex justify-center items-center h-full">
        <div className="px-4">
          <h3 className="text-[35px] leading-10 sm:leading-14 tracking-wide md:text-5xl font-bold text-white text-center mb-6">
            You are investing in <br /> Africa&apos;s Future!
          </h3>
          <p className="max-w-md font-semibold text-center text-[18px] sm:text-[21px] leading-6 sm:leading-8 sm:text-lg">
            Every investment you make fuels the future by supporting farmers,
            businesses and sustainable wealth creation
          </p>
        </div>
      </div>
    </section>
  );
}

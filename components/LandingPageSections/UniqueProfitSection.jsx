import Image from "next/image";

export default function UniqueProfitSection() {
  return (
    <section className="mt-20 max-w-[1153px] mx-auto px-4">
      {/* Section Header */}
      <div className="max-w-[350px] sm:max-w-[640px] mx-auto flex flex-col items-center">
        <h2 className="text-center font-bold text-[24px] opacity-80">
          Our Unique Profit Sharing Model
        </h2>
        <p className="mt-6 text-sm text-center leading-5">
          Our model lets you earn directly from the success of the farms you
          invest in, not just promises.
        </p>
      </div>

      <div className="mt-10 flex flex-col lg:flex-row items-center md:justify-between lg:items-center gap-8">
        <Image
          src={"/images/moneybag-image.png"}
          width={500}
          height={500}
          alt="banner-image"
          className="object-fit md:h-[371.04px] md:w-[600px]"
        />

        <div className="mx-2 w-[100%] sm:w-[493px]">
          <p className="text-[#FF0000] font-semibold text-[24px]">
            We don't do fixed Interest.
          </p>

          <h2 className="mt-2 text-[48px] font-bold leading-11 md:mt-5">
            We share <span className="text-[#014F2A]">real profits</span> with
            you
          </h2>

          <p className="mt-8 text-[16px] font-medium tracking-wide leading-5">
            A fair, transparent model rooted in African values of trust and
            shared growth
          </p>
        </div>
      </div>
    </section>
  );
}

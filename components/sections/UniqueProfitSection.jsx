import Image from "next/image";

export default function UniqueProfitSection() {
  return (
    <section className="mt-20 max-w-[1400px] mx-auto">
      <h2 className="text-[#014F2A] text-center font-bold text-[22px] sm:text-[26px]">
        Our Unique Profit Sharing Model
      </h2>

      <div className="mx-3 md:mx-10 mt-8 flex flex-col lg:flex-row items-center lg:items-start md:justify-center gap-8">
        <Image
          src={"/images/moneybag-image.png"}
          width={500}
          height={500}
          alt="banner-image"
          className="object-fit md:h-[270px]" 
        />

        <div className="mx-2 w-[100%] sm:w-[80%] lg:w-[30%] px-2">
          <p className="text-[#FF0000] font-bold text-lg md:mt-5">
            We don't do fixed Interest.
          </p>

          <h2 className="mt-2 text-[35px] font-bold leading-9 md:mt-5 md:text-[40px] md:leading-10">
            We share <span className="text-[#014F2A]">real profits</span> with you
          </h2>

          <p className="mt-3 text-xl tracking-wide leading-6 md:leading-5 font-[500]">
            A fair, transparent model rooted in African values of trust and
            shared growth
          </p>
        </div>
      </div>
    </section>
  );
}

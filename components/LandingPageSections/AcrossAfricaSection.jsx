import Image from "next/image";

export default function AcrossAfricaSection() {
  return (
    <section className="px-4">
      <div className="px-4 text-center mt-10 max-w-[820px] mx-auto">
        <h2 className="font-bold text-[27px] lg:text-[36px] text-black/70">
          Across Africa,{" "}
          <span className="text-secondary">millions of farmers</span> work hard
          but <span className="text-secondary">remain disconnected</span> from
          the systems that create opportunity.
        </h2>
        <p className="mt-10 text-[16px] lg:text-[24px] text-black/70">
          Everyone deserves a fair chance to grow
        </p>
      </div>

      <div className="mt-12 lg:mt-30 flex flex-col lg:flex-row gap-12 items-center max-w-[1200px] mx-auto">
        <Image
          src={"/images/banner-1.png"}
          width={489}
          height={314}
          alt="banner"
        />
        <div className="max-w-[628px]">
          <h2 className="text-[24px] lg:text-[40px] capitalize font-bold lg:leading-12">
            We help farmers{" "}
            <span className="text-secondary">grow better, earn better,</span>{" "}
            and live better
          </h2>
          <div className="w-[312px] bg-[#B2FF96] h-[4px] rounded-[40px] mt-5"></div>
          <p className="text-[16px] lg:text-[24px] mt-4">
            We organize communities into structured <br className="sm:hidden" />{" "}
            clusters, giving them the tools, support, and confidence to farm
            with purpose and succeed every season.
          </p>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { GetInTouchSection } from "../AboutUsSections/GetInTouchSection";

export const OurModel = () => {
  return (
    <main className="pt-30 lg:pt-30 xl:pt-40 ">
      <section className="mx-auto max-w-[1200px] px-5 mb-10">
        <header className="mx-auto flex flex-col items-center px-4 mb-10 md:mb-15">
          <h1 className="text-[50px] md:text-[46px] font-bold text-center mb-4">Our Model</h1>
          <p className="text-center text-[16px] md:text-[18px] font-medium text-gray-700">How We Support Farmers Across Every Stage of Production</p>
        </header>

        <div className="relative w-full overflow-hidden rounded-[25px] px-0 md:px-10">
          <Image src="/images/our-model-banner.png" width={1200} height={320} alt="About Marginplus" className="w-full h-auto rounded-[25px]" />
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] py-10 md:py-10  px-5">
        <article className="flex flex-col lg:flex-row gap-0 items-left md:items-center gap-5 md:gap-12 w-full mb-20 md:mb-20">
          <div className="text-[60px] font-extrabold text-primary">01</div>

          <header className="max-w-full text-left">
            <h3 className="text-[20px] md:text-[20px] font-bold mb-4 text-left">Farmer Training and Capacity Building</h3>
            <p className="text-[14px] md:text-[16px] font-medium text-gray-700 text-left">
              Training is delivered through a structured Academy that equips farmers with practical agronomy, cluster leadership, simple record keeping, and financial literacy. Field demonstrations
              and regular meetings keep farmers aligned with the farming calendar, reduce mistakes, and ensure continuous improvement through the season.
            </p>
          </header>

          <Image src={"/images/our-model-1.jpg"} width={489} height={314} alt="Farmer Training and Capacity Building" className="rounded-[18px] h-[300px] md:h-[234px]  w-full md:w-[292px]" />
        </article>

        <article className="flex flex-col lg:flex-row gap-0 items-left md:items-center gap-5 md:gap-12 w-full mb-20 md:mb-20">
          <div className="text-[60px] font-extrabold text-[#008647]">02</div>

          <Image src={"/images/input-&-finance-support.png"} width={489} height={314} alt="Input and Finance Support" className="rounded-[18px] h-[300px] md:h-[234px]  w-full md:w-[292px]" />

          <header className="max-w-full text-left">
            <h3 className="text-[20px] md:text-[20px] font-bold mb-4 text-left">Input and Finance Support</h3>
            <p className="text-[14px] md:text-[16px] font-medium text-gray-700 text-left">
              A cooperative driven system enables farmers to access essential inputs without collateral. Seeds, fertilizer, crop protection materials, and planting tools are supplied before planting,
              while repayment is completed after harvest. This removes financial barriers, guarantees timely access to resources, and allows farmers to focus fully on production instead of sourcing
              capital.
            </p>
          </header>
        </article>

        <article className="flex flex-col lg:flex-row gap-0 items-left md:items-center gap-5 md:gap-12 w-full mb-20 md:mb-20">
          <div className="text-[60px] font-extrabold text-[#008647]">03</div>

          <header className="max-w-full text-left">
            <h3 className="text-[20px] md:text-[20px] font-bold mb-4 text-left">Insurance and Risk Protection</h3>
            <p className="text-[14px] md:text-[16px] font-medium text-gray-700 text-left">
              Agricultural insurance shields farmers from weather challenges, pest attacks, diseases, and market shocks. This protection stabilizes communities, reduces losses, and gives farmers the
              confidence to maintain production even in unpredictable seasons.
            </p>
          </header>

          <Image
            src={"/images/insurance-and-risk-protection.png"}
            width={489}
            height={314}
            alt="Insurance and Risk Protection"
            className="rounded-[18px] h-[300px] md:h-[234px]  w-full md:w-[292px]"
          />
        </article>

        <article className="flex flex-col lg:flex-row gap-0 items-left md:items-center gap-5 md:gap-12 w-full mb-20 md:mb-20">
          <div className="text-[60px] font-extrabold text-[#B2FF96]">04</div>

          <Image src={"/images/harvesting-and-market-access.png"} width={489} height={314} alt="Harvesting and Market Access" className="rounded-[18px] h-[300px] md:h-[234px]  w-full md:w-[292px]" />

          <header className="max-w-full text-left">
            <h3 className="text-[20px] md:text-[20px] font-bold mb-4 text-left">Harvesting and Market Access</h3>
            <p className="text-[14px] md:text-[16px] font-medium text-gray-700 text-left">
              Post harvest support covers supervision, aggregation, proper storage, quality checks, and structured bulk sales. Farmers sell through organized channels where pricing is transparent,
              buyers are verified, and market access is guaranteed, eliminating the vulnerability of selling individually.
            </p>
          </header>
        </article>
      </section>

      <section className="max-w-[1200px] mx-auto py-10 md:py-10  px-5">
        <header className="w-full mb-10">
          <h2 className="text-center font-bold text-[21px] sm:text-[26px] opacity-80">Our Programs</h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <article className="w-full rounded-[18px] bg-[#F6F6F6] px-4 md:px-5 py-10 md:py-5">
            <h3 className="text-[20px] md:text-[20px] font-bold md:text-left mb-6">Women Agriculture Program (WAP)</h3>
            <p className="text-[15px] font-medium text-gray-700 text-left mb-10">
              Women farmers and rural entrepreneurs participate through tailored training, input access, cooperative activities, and processing opportunities. The program supports women who want to
              farm, expand small processing businesses, or participate in retail value chains, creating stable income and long term economic growth at household and community levels.
            </p>

            {/* Mobile Image */}
            <Image src={"/images/mobile-vision-women.jpg"} width={489} height={314} alt="banner" className="block md:hidden rounded-[20px] w-full h-[301px] object-cover" />

            {/* Desktop Image */}
            <Image src={"/images/women-agriculture.png"} width={489} height={314} alt="banner" className="hidden md:block rounded-[20px] w-full md:h-[301px]" />
          </article>

          <article className="w-full rounded-[18px] bg-[#F6F6F6] px-4 md:px-5 py-10 md:py-5">
            <h3 className="text-[20px] md:text-[20px] font-bold md:text-left mb-6">Youth Agricultural Program (YAP)</h3>
            <p className="text-[15px] font-medium text-gray-700 text-left mb-10">
              Young people are trained to become cluster leaders, field supervisors, and agri managers. The program provides leadership development, modern agronomy knowledge, digital tools, and
              practical field experience. This creates employment pathways and strengthens the agricultural workforce within local communities.
            </p>
            {/* Mobile Image */}
            <Image src={"/images/our-model-1.jpg"} width={489} height={314} alt="banner" className="block md:hidden rounded-[20px] w-full h-[301px] object-cover" />
            {/* Desktop Image */}
            <Image src={"/images/youth-agriculture.png"} width={489} height={314} alt="banner" className="hidden md:block rounded-[20px] w-full md:h-[301px]" />
          </article>
        </div>
      </section>

      <GetInTouchSection />
    </main>
  );
};

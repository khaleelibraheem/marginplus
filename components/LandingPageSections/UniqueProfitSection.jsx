import Image from "next/image";

export default function UniqueProfitSection() {
  return (
    <section className="mt-20 pt-[40px] pb-[50px] px-4 bg-[#F6F6F6]">
      <div className="max-w-[1153px] mx-auto">
        {/* Section Header */}
        <div className="max-w-[350px] sm:max-w-[1006px] mx-auto flex flex-col items-center">
          <h2 className="text-center font-bold text-[24px] lg:text-[40px] lg:text-[#014F2A] lg:font-semibold opacity-80 leading-7 lg:leading-normal">
            Our Unique Profit Sharing Model
          </h2>
          <p className="text-sm lg:-mt-4 font-bold opacity-80">
            We don’t do fixed interest.
          </p>
          <p className="hidden lg:block text-sm text-center leading-5">
            We share real profits with you because we believe wealth should grow
            with you, not just from you. Our model is fair, transparent, and
            deeply rooted in African values of trust, community, and shared
            prosperity.
          </p>
          <p className="lg:hidden text-center text-sm">Our model lets you earn directly from the success of the farms you invest in, not just promises.</p>
        </div>
      </div>
    </section>
  );
}

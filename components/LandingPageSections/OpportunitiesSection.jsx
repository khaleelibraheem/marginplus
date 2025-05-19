import OpportunitiesCard from "../ui/OpportunitiesCard";

export default function OpportunitiesSection() {
  return (
    <section className="mt-20 px-4 max-w-[1400px] mx-auto">
      {/* Section Header */}
      <div className="max-w-[350px] sm:max-w-[640px] mx-auto flex flex-col items-center">
        <h2 className="text-center font-bold text-[24px] opacity-80 leading-7">
          Explore Diverse Investment Opportunities
        </h2>
        <p className="mt-6 text-sm text-center leading-5">
          Multiple paths, one goal. Building wealth through real purpose driven
          ventures across Africa.{" "}
        </p>
      </div>
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-5">
        <OpportunitiesCard
          title={"Crop Farming"}
          description={
            "Fund crop farms projects that turns fertile soil into nourishing harvest"
          }
          bgColor={"#014F2A"}
          imgSrc={"/images/tomatoes.png"}
          textColor={"white"}
          buttonBgColor={"#B2FF96"}
          buttonTextColor={"#008647"}
        />
        <OpportunitiesCard
          title={"Livestock Farming"}
          description={
            "Support livestock projects that turn care into sustainable growth"
          }
          bgColor={"#008647"}
          imgSrc={"/images/chickenfarm.png"}
          textColor={"white"}
           buttonBgColor={"#B2FF96"}
          buttonTextColor={"#008647"}
        />
        <OpportunitiesCard
          title={"Agro-processing"}
          description={
            "Invest in agro-processing that turn raw potential into golden opportunities"
          }
          bgColor={"#B2FF96"}
          imgSrc={"/images/hay.png"}
          textColor={"#014F2A"}
           buttonBgColor={"#014F2A"}
          buttonTextColor={"white"}
        />
      </div>
    </section>
  );
}

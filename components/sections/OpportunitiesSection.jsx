import OpportunitiesCard from "../ui/OpportunitiesCard";

export default function OpportunitiesSection() {
  return (
    <section className="mt-20 px-3 md:px-10 max-w-[1400px] mx-auto">
        <h2 className="text-[#014F2A] text-center font-bold text-[22px] sm:text-[26px]">
        Diverse Investment Opportunities
      </h2>
      <div className="mt-6 flex flex-col md:flex-row gap-5">
        <OpportunitiesCard
          title={"Crop Farming"}
          description={
            "Fund crop farms projects that turns fertile soil into nourishing harvest"
          }
          bgColor={"#014F2A"}
          imgSrc={"/images/corn-grass.svg"}
          textColor={"white"}
        />
        <OpportunitiesCard
          title={"Livestock Farming"}
          description={
            "Support livestock projects that turn care into sustainable growth"
          }
          bgColor={"#008647"}
          imgSrc={"/images/cow.svg"}
          textColor={"white"}
        />
        <OpportunitiesCard
          title={"Agro-processing"}
          description={
            "Invest in agro-processing that turn raw potential into golden opportunities"
          }
          bgColor={"#B2FF96"}
          imgSrc={"/images/factory.svg"}
          textColor={"#014F2A"}
        />
      </div>
    </section>
  );
}

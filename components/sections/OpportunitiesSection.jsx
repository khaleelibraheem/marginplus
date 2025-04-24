import OpportunitiesCard from "../ui/OpportunitiesCard";
import SectionTitle from "../ui/SectionTitle";

export default function OpportunitiesSection() {
  return (
    <section className="px-3 md:px-10 max-w-[1400px] mx-auto">
      <SectionTitle text={"Diverse Investment Opportunities"} />
      <div className="mt-6 flex flex-col sm:flex-row gap-5">
        <OpportunitiesCard
          title={"Crop Farming"}
          description={
            "Fund crop farms projects that turns fertile soil into nourishing harvest"
          }
          bgColor={"#014F2A"}
          imgSrc={"/images/corn-grass.svg"}
          ImageSize={100}
          textColor={"white"}
        />
        <OpportunitiesCard
          title={"Livestock Farming"}
          description={
            "Support livestock projects that turn care into sustainable growth"
          }
          bgColor={"#008647"}
          imgSrc={"/images/cow.svg"}
          ImageSize={150}
          textColor={"white"}
        />
        <OpportunitiesCard
          title={"Agro-processing"}
          description={
            "Invest in agro-processing that turn raw potential into golden opportunities"
          }
          bgColor={"#B2FF96"}
          imgSrc={"/images/factory.svg"}
          ImageSize={120}
          textColor={"#014F2A"}
        />
      </div>
    </section>
  );
}

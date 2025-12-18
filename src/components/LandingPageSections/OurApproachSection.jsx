import Image from "next/image";

const approaches = [
  {
    image: "/images/approach.png",
    title: "Clusters",
    description:
      "We Organize Farmers Into Clusters to provide quality inputs, training, and support to boost productivity and income.",
  },
  {
    image: "/images/approach2.png",
    title: "Funding Partners",
    description:
      "We equip them with the tools, training, finance, and insurance needed to support productive farming clusters.",
  },
  {
    image: "/images/approach3.png",
    title: "Market Access",
    description:
      "We connect them to premium buyers, ensuring consistent supply, fair prices, and traceable value chains.",
  },
];
export default function OurApproachSection() {
  return (
    <section className="px-4 mt-30">
      <h2 className="text-[24px] text-center font-bold">Our Approach</h2>
      <div className="mt-12 max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-5 justify-center items-center">
        {approaches.map((approach, index) => (
          <div
            key={index}
            className="flex flex-col items-center max-w-[360px] text-center"
          >
            <Image
              src={approach.image}
              alt={approach.title}
              width={87}
              height={80}
              className="w-[100px] h-[100px] object-contain"
            />
            <h3 className="mt-6 font-bold text-primary text-[24px]">
              {approach.title}
            </h3>
            <p className="mt-2 text-[16px]">{approach.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

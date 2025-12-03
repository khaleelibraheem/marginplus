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
            {/* Wrapper div for positioning */}
            <div className="relative mb-4">
              <Image
                src={approach.image}
                alt={approach.title}
                width={87}
                height={80}
                // z-10 ensures image sits on top of the shadow
                className="w-[100px] h-[100px] object-contain relative z-10"
              />
              
              {/* THE SHADOW */}
              {/* 1. bg-black: Solid black color */}
              {/* 2. opacity-40: Makes it transparent but dark enough to pop */}
              {/* 3. blur-md: Softens the edges */}
              {/* 4. w-[80%]: Makes it slightly narrower than the object */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[80%] h-4 bg-black opacity-25 blur-md rounded-[100%]" />
            </div>

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
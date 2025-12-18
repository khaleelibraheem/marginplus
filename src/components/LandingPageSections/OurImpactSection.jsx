import Image from "next/image";

export default function OurImpactSection() {
  return (
    <section className="px-4 mt-32 max-w-[1226px] mx-auto">
      <h2 className="text-[24px] text-center font-bold mb-10">
        Our Impact in Numbers
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="col-span-2 md:col-span-2 md:row-span-2 relative">
          <Image
            src={"/images/impact1.jpg"}
            width={466}
            height={438}
            alt="Farmer with harvest"
            className="w-full h-full object-cover rounded-[20px]"
          />
        </div>
        <Image
          src={"/images/impact2.svg"}
          width={230}
          height={210}
          alt="Communities Reached"
          className="w-full h-auto object-contain"
        />
        <Image
          src={"/images/impact3.svg"}
          width={230}
          height={210}
          alt="Farmers Empowered"
          className="w-full h-auto object-contain"
        />
        <Image
          src={"/images/impact4.svg"}
          width={230}
          height={210}
          alt="Tons Produced"
          className="w-full h-auto object-contain"
        />
        <Image
          src={"/images/impact5.svg"}
          width={230}
          height={210}
          alt="Output Increase"
          className="w-full h-auto object-contain"
        />
        <Image
          src={"/images/impact6.svg"}
          width={230}
          height={210}
          alt="Hectares Managed"
          className="w-full h-auto object-contain"
        />
        <Image
          src={"/images/impact7.svg"}
          width={230}
          height={210}
          alt="Jobs Created"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
}
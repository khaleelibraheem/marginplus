import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="flex justify-center mt-20">
      <div className="h-[215px] w-[215px] bg-[#A5F48D] rounded-full relative scale-160 sm:scale-140 md:scale-160 lg:scale-170">
        <Image
          src={"/images/arrowbody.svg"}
          alt="arrrowbody"
          height={500}
          width={500}
          className="absolute top-[73px] scale-180 right-[80px]"
          priority
        />
        <Image
          src={"/images/arrowhead.svg"}
          alt="arrowhead"
          height={20}
          width={20}
          className="absolute left-[207px] top-[10px] scale-200"
          priority
        />
        <Image
          src={"/images/grass.png"}
          alt="grass"
          height={150}
          width={150}
          className="absolute left-10 bottom-12"
          priority
        />
        <Image
          src={"/images/corn.png"}
          alt="corn"
          height={170}
          width={170}
          className="absolute left-[25px] bottom-[37px]"
          priority
        />
        <Image
          src={"/images/phonemockup.svg"}
          alt="phonemockup"
          height={500}
          width={500}
          className="absolute bottom-[-12px] left-[-12px] scale-106"
          priority
        />
      </div>
    </div>
  );
}

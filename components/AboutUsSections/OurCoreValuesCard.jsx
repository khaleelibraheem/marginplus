import Image from "next/image";

export default function OurCoreValuesCard({ imgUrl, title, text, imgClassName }) {
  return (
    <div className="w-full md:w-[230px] lg:h-[194px] flex flex-col justify-between">
      <div>
        <div className={imgClassName}>
          <Image 
            src={imgUrl} 
            width={100} 
            height={100} 
            alt={`${title} icon`}
            className="object-contain w-full h-full"
            priority
          />
        </div>

        <h3 className="text-lg font-bold mt-4">{title}</h3>
      </div>
      
      <p className="text-sm">{text}</p>
    </div>
  );
}
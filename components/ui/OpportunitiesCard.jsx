import Image from "next/image";

export default function OpportunitiesCard({
  bgColor,
  imgSrc,
  title,
  description,
  textColor
}) {

  const standardImageSize = 80;

  return (
    <div
      className="flex md:flex-col gap-4 p-4 pb-8 w-full md:w-[270px] rounded-xl flex-1"
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex mx-auto justify-center items-center h-[80px] w-[180px]">
        <Image 
          src={imgSrc} 
          width={standardImageSize} 
          height={standardImageSize} 
          alt={`${title} icon`}
          className="object-contain w-full h-full" 
        
        />
      </div>
      <div className="flex flex-col justify-center md:items-center" style={{color: textColor}}>
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-[13px] sm:text-[16px] md:text-center">{description}</p>
      </div>
    </div>
  );
}
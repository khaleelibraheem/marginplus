import Image from "next/image";

export default function OpportunitiesCard({
  bgColor,
  imgSrc,
  title,
  description,
  ImageSize,
  textColor
}) {
  return (
    <div
      className="flex sm:flex-col gap-4 p-4 pb-8 w-full sm:w-[270px] rounded-xl flex-1"
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex justify-center">
        <Image src={imgSrc} width={ImageSize} height={ImageSize} alt="cardimg" />
      </div>
      <div className="flex flex-col justify-center sm:items-center" style={{color: textColor}}>
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="sm:text-center">{description}</p>
      </div>
    </div>
  );
}

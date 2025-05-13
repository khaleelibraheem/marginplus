import Image from "next/image";

export default function SmartInvestorsCard({ imgUrl, title, text, imgClassName }) {
  return (
    <div className="w-full lg:w-[292px] lg:h-[169px] flex flex-col justify-between">
      <div>
        <div className={imgClassName}>
          <Image 
            src={imgUrl} 
            width={100} 
            height={100} 
            alt={`${title} icon`}
            className="object-contain w-full h-full" 
          />
        </div>

        <h3 className="text-lg font-bold mt-6">{title}</h3>
      </div>
      
      <p className="text-sm lg:mt-auto mt-8">{text}</p>
    </div>
  );
}
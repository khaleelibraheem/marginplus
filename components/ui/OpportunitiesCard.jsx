import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function OpportunitiesButton({ text, bgColor, textColor, pl, pr, url = "https://www.marginplus.ng/" }) {
  return (
    <Link href={url} className="cursor-pointer" target="_blank">
      <button
        className="cursor-pointer px-[26px] py-[10px] rounded-xl font-bold flex items-center gap-2"
        style={{ backgroundColor: bgColor, color: textColor, paddingLeft: pl, paddingRight: pr }}
      >
        {text}
        <ArrowRight size={16} />
      </button>
    </Link>
  );
}

export default function OpportunitiesCard({
  bgColor,
  imgSrc,
  title,
  description,
  textColor,
  buttonTextColor,
  buttonBgColor,
  url,
}) {
  return (
    <div
      className="flex justify-between px-4 pt-6 pb-7 gap-5 w-full rounded-xl flex-1"
      style={{ backgroundColor: bgColor }}
    >
      <div style={{ color: textColor }} className="max-w-[180px] md:max-w-[202px]">
        <h3 className="font-semibold text-xl">{title}</h3>
        <p className="text-sm mt-2 sm:text-base">{description}</p>
        <div className="mt-5">
          <OpportunitiesButton
            text="Learn more"
            textColor={buttonTextColor}
            bgColor={buttonBgColor}
            url={url}
          />
        </div>
      </div>
      <div>
        <Image
          src={imgSrc}
          width={500}
          height={500}
          alt={`${title} icon`}
          className="object-contain w-[139px] md:w-[124px] md:h-[163px]"
        />
      </div>
    </div>
  );
}
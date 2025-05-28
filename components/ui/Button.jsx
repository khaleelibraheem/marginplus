import Link from "next/link";
import React from "react";

export default function Button({
  text,
  bgColor,
  textColor,
  url = "https://www.marginplus.ng/",
}) {
  return (
    <Link href={url} className="cursor-pointer" target="_blank">
      <button
        className="flex items-center cursor-pointer h-[49px] px-[32px] py-[18px] rounded-[10px] text-[13px] font-bold"
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        {text}
      </button>
    </Link>
  );
}

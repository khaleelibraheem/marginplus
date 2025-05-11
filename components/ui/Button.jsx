import Link from "next/link";
import React from "react";

export default function Button({ text, bgColor, textColor, pl, pr, url = "https://www.marginplus.ng/" }) {
  return (
    <Link href={url} className="cursor-pointer" target="_blank">
      <button
        className="cursor-pointer px-[26px] py-[10px] rounded-xl font-bold"
        style={{ backgroundColor: bgColor, color: textColor, paddingLeft: pl, paddingRight: pr }}
      >
        {text}
      </button>
    </Link>
  );
}

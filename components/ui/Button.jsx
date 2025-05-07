import Link from "next/link";
import React from "react";

export default function Button({ text, bgColor, textColor, pl, pr }) {
  return (
    <Link href="https://www.marginplus.ng/" className="cursor-pointer">
      <button
        className="cursor-pointer px-[26px] py-[8px] rounded-xl shadow-md font-semibold"
        style={{ backgroundColor: bgColor, color: textColor, paddingLeft: pl, paddingRight: pr }}
      >
        {text}
      </button>
    </Link>
  );
}

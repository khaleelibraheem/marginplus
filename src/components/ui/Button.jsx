"use client"

import Link from "next/link";
import React from "react";

export default function Button({
  text,
  bgColor,
  textColor,
  url = "/contact-us",
  className = "",
  bordered = false,
  onClick = () => {}
}) {
  return (
    <Link
      href={url}
      // target="_blank"
      // rel="noopener noreferrer"
      className={`flex items-center justify-center ${bordered && "border border-[#014F2A]"} h-[45px] px-[32px] py-[18px] rounded-[10.5px] text-[13px] font-bold cursor-pointer ${className}`}
      style={{ backgroundColor: bgColor, color: textColor }}
      aria-label={`Navigate to ${text}`}
      onClick={onClick}
    >
      {text}
    </Link>
  );
}

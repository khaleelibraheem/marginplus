import Image from "next/image";
import React from "react";

const partners = [
  { src: "/images/jaiz-logo.png", width: 145, height: 29, alt: "Jaiz Bank" },
  { src: "/images/taj-logo.png", width: 85, height: 28, alt: "Taj Bank" },
  { src: "/images/indorama-logo.png", width: 102, height: 25, alt: "Indorama" },
  { src: "/images/jaiz2-logo.png", width: 93, height: 50, alt: "Jaiz Partner" },
];

export default function Marquee() {
  return (
    <div className="w-full py-10">
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
        {/* FIRST SET OF IMAGES */}
        <div className="flex animate-marquee gap-5 pr-5 min-w-full flex-shrink-0 items-center justify-around pause-on-hover">
          {partners.map((logo, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center"
            >
              <Image
                src={logo.src}
                width={logo.width}
                height={logo.height}
                alt={logo.alt}
                className="w-auto h-8 object-contain"
              />
            </div>
          ))}
        </div>

        {/* SECOND SET OF IMAGES (Duplicate for loop) */}
        <div
          aria-hidden="true"
          className="flex animate-marquee gap-5 pr-5 min-w-full flex-shrink-0 items-center justify-around pause-on-hover"
        >
          {partners.map((logo, index) => (
            <div
              key={`dup-${index}`}
              className="relative flex items-center justify-center"
            >
              <Image
                src={logo.src}
                width={logo.width}
                height={logo.height}
                alt={logo.alt}
                className="w-auto h-8 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

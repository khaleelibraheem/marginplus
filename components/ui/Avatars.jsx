import React from "react";
import Image from "next/image";

const Avatars = ({
  avatars = [
    { src: "/images/ellipse-1.png", alt: "User testimonial - Michael Chen" },
    { src: "/images/ellipse-2.png", alt: "User testimonial - Aisha Okafor" },
    { src: "/images/ellipse-3.png", alt: "User testimonial - David Mensah" },
    { src: "/images/ellipse-4.png", alt: "User testimonial - Nkechi Ade" },
    { src: "/images/ellipse-5k.svg", alt: "User testimonial - Sarah Johnson" },
  ],
  size = 32, // Reduced from 40 to 32
  overlap = 8, // Reduced from 10 to 8 for better proportion
  className = "",
  showCount = false,
  totalCount = 0,
}) => {
  const displayedAvatars = avatars.slice(0, 5);
  const remainingCount = showCount ? totalCount - displayedAvatars.length : 0;

  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex">
        {displayedAvatars.map((avatar, index) => (
          <div
            key={index}
            className="rounded-full border-1 border-white ring-1 ring-[#B2FF96] overflow-hidden"
            style={{
              marginLeft: index === 0 ? "0" : `-${overlap}px`,
              zIndex: 5 - index,
              position: "relative",
              borderWidth: "1px", // Thinner border for smaller avatars
            }}
          >
            <Image
              src={avatar.src}
              alt={avatar.alt}
              width={size}
              height={size}
              className="rounded-full object-cover"
            />
          </div>
        ))}
      </div>

      {showCount && remainingCount > 0 && (
        <div
          className="flex items-center justify-center rounded-full bg-[#004D2E] text-white text-xs font-medium"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            marginLeft: `-${overlap}px`,
            zIndex: 0,
            position: "relative",
            fontSize: "10px",
          }}
        >
          +{remainingCount}
        </div>
      )}
    </div>
  );
};

export default Avatars;

"use client";

// Simple utility function to replace cn
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Avatars({ numPeople, className, avatarUrls }) {
  return (
    <div
      className={classNames(
        "z-10 flex -space-x-4 rtl:space-x-reverse",
        className
      )}
    >
      {avatarUrls &&
        avatarUrls.map((url, index) => (
          <a
            key={index}
            href={url.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="h-10 w-10 rounded-full border-1 border-white"
              src={url.imageUrl}
              width={40}
              height={40}
              alt={`Avatar ${index + 1}`}
            />
          </a>
        ))}

      <a
        className="flex h-10 w-10 items-center justify-center rounded-full border-1 border-white bg-[#B2FF96] text-center text-xs font-bold text-[#004D2E]"
        href="#"
      >
        5K+
      </a>
    </div>
  );
}

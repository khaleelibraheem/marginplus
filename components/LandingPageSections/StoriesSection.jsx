"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const stories = [
  {
    image: "/images/story1.jpg",
    description:
      "“Before Marginplus, I never believed farming could be this profitable. Now we know our costs, our buyers, and our profits”",
    name: "Musa Umar, Gombe",
  },
  {
    image: "/images/story2.jpg",
    description:
      "“Marginplus has transformed our farming practices. We are now able to plan better and increase our yields significantly.”",
    name: "Aisha Bello, Kano",
  },
  {
    image: "/images/story3.png",
    description:
      "“With Marginplus, we have access to better markets and fair prices. It has truly empowered our community.”",
    name: "John Okoro, Enugu",
  },
];

export default function StoriesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-scroll logic
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % stories.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="mt-20">
      <h2 className="text-[24px] text-center font-bold mb-10">
        Stories From Our Communities
      </h2>

      {/* Background Container */}
      <div className="bg-[url('/images/storiesbanner.png')] h-[382px] bg-center bg-cover bg-no-repeat relative flex items-center">
        {/* ========================================= */}
        {/* MOBILE CAROUSEL (Visible only on mobile)  */}
        {/* ========================================= */}
        <div className="lg:hidden w-full max-w-4xl mx-auto px-4 overflow-hidden">
          <div
            className="flex w-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {stories.map((story, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="flex flex-col items-center justify-center">
                  <div className="relative w-[201px] h-[165px]">
                    <Image
                      src={story.image}
                      fill
                      alt={story.name}
                      className="object-cover rounded-[18px] shadow-lg"
                    />
                  </div>
                  <p className="text-center mt-6 mb-3 text-[16px] text-white font-semibold">
                    {story.description}
                  </p>
                  <p className="text-center text-[14px] text-white font-bold">
                    {story.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* DOTS INDICATOR */}
          <div className="flex mt-6 justify-center gap-2">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "w-8 bg-white"
                    : "w-2 bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ========================================= */}
        {/* DESKTOP GRID (Visible only on Large)      */}
        {/* ========================================= */}
        <div className="hidden lg:flex w-full max-w-[1200px] mx-auto justify-center gap-10">
          {stories.map((story, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-1/3"
            >
              <div className="relative w-[201px] h-[165px]">
                <Image
                  src={story.image}
                  fill
                  alt={story.name}
                  className="object-cover rounded-[18px]"
                />
              </div>
              <p className="text-center mt-6 mb-3 text-[16px] text-white font-semibold px-2">
                {story.description}
              </p>
              <p className="text-center text-[14px] text-white font-bold">
                {story.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

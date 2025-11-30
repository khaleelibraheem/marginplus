"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Marquee from "../ui/Marquee";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const images = [
    { src: "/images/hero1.png", alt: "Farmers working together" },
    { src: "/images/hero2.png", alt: "Agricultural community" },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="mt-32">
      <div className="max-w-[817px] mx-auto flex flex-col items-center px-4">
        <h1 className="text-[28px] lg:text-[46px] font-bold text-center">
          Co-Owned by <span className="text-secondary">Farmers</span>
        </h1>
        <p className="mt-4 text-center text-[20px] lg:text-[24px] text-gray-700">
          Connecting Africa's farming communities to the training, finance, and
          markets they need to thrive.
        </p>
        <button className="mt-6 rounded-[13px] py-[14.57px] px-[25.91px] bg-primary lg:rounded-2xl lg:py-[18px] lg:px-[32px] text-white text-[16px] lg:text-2xl hover:bg-primary/90 transition-colors cursor-pointer">
          Partner with Us
        </button>
      </div>

      <div className="relative">
        {/* Backdrop Logo on Mobile */}
        <Image
          src={"/images/mobile-backdrop.png"}
          width={390}
          height={255}
          alt="logo"
          className="lg:hidden absolute object-contain -top-20 -z-10 w-full h-[450px] opacity-60"
        />
        {/* Backdrop Logo on Desktop  */}
        <Image
          src={"/images/logo-backdrop.png"}
          width={1800}
          height={455}
          alt="logo"
          className="hidden lg:block absolute object-contain -top-25 -z-10 opacity-25 w-full"
        />

        {/* Carousel on Mobile */}
        <div className="lg:hidden mt-16 relative max-w-6xl mx-auto px-4">
          {/* Main Carousel Container */}
          <div className="relative overflow-hidden rounded-[20px]">
            {/* Images */}
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="min-w-full">
                  <div className="relative w-full min-h-[239.54px]">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Dots Indicator */}
          <div className="flex mt-5 justify-center gap-1">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all ${
                  currentSlide === index
                    ? "w-8 bg-primary"
                    : "w-3 bg-primary/50 hover:bg-primary/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Fixed Image on Desktop */}
        <div className="hidden mt-16 lg:flex justify-center gap-3">
          <Image
            src={"/images/hero1.png"}
            width={500}
            height={500}
            alt="hero-image"
          />
          <Image
            src={"/images/hero2.png"}
            width={500}
            height={500}
            alt="hero-image"
          />
        </div>
      </div>

      <div className="max-w-[691.4px] mx-auto mt-20 lg:mt-14 text-center">
        <h2 className="text-[24px] font-bold">Trusted By Leading Partners</h2>

        {/* Marquee */}
        <Marquee />
      </div>
    </section>
  );
}

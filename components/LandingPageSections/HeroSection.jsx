"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Marquee from "../ui/Marquee";
import Link from "next/link";

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

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum distance (px) to be considered a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); // Reset touch end on new touch
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      // Swipe Left -> Next Slide
      if (currentSlide < images.length - 1) {
        goToSlide(currentSlide + 1);
      } else {
        // Optional: Loop back to start
        // goToSlide(0);
      }
    }

    if (isRightSwipe) {
      // Swipe Right -> Previous Slide
      if (currentSlide > 0) {
        goToSlide(currentSlide - 1);
      } else {
        // Optional: Loop to end
        // goToSlide(images.length - 1);
      }
    }
  };

  return (
    <section className="mt-32">
      <div className="max-w-[817px] mx-auto flex flex-col items-center px-4">
        <h1 className="text-[28px] lg:text-[46px] font-bold text-center">
          Co-Owned by <span className="text-secondary">Farmers</span>
        </h1>
        <p className="mt-4 text-center text-[20px] lg:text-2xl text-gray-700">
          Connecting Africa's farming communities to the training, finance, and
          markets they need to thrive.
        </p>
    <Link href={"https://docs.google.com/forms/d/e/1FAIpQLSdxZPKbmCR5kmrAPOr6XJ9zw1uchEwnYJ-PkRIV9Yo0m4tArg/viewform"} target="_blank">
        <button className="mt-6 rounded-[13px] py-[14.57px] px-[25.91px] bg-primary lg:rounded-2xl lg:px-[32px] text-white text-[16px] lg:text-[18px] hover:bg-primary/90 transition-colors cursor-pointer">
          Partner with Us
        </button></Link>
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

        <div className="lg:hidden mt-16 relative max-w-6xl mx-auto px-4">
          {/* mobile carousel  with Touch Events */}
          <div
            className="relative overflow-hidden rounded-[20px]"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
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
                      className="w-full h-full object-cover pointer-events-none"
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

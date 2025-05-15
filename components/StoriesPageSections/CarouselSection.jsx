"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useWindowSize } from "@/hooks/use-window-size";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { width } = useWindowSize();
  const isMobile = width < 1024; // md breakpoint

  const testimonials = [
    {
      name: "Abdul",
      role: "Farmer",
      rating: 5,
      image: "/images/carousel1.png",
      title: "Finally support that understand farmers",
      content:
        "For years, I struggled with getting loans that don't have interest. With Marginplus, it felt different. They actually understand me, and now my farm is doing better than ever. This is what real support looks like.",
    },
    {
      name: "Chidi",
      role: "Investor",
      rating: 5,
      image: "/images/carousel2.png",
      title: "I feel good about where my money goes",
      content:
        "I've invested through several platforms, but this was the first time I felt truly connected to the impact. Marginplus doesn't just talk, they show where your money is working. And yes, the returns are solid too.",
    },
    {
      name: "Adebayo",
      role: "Estate Oil Mill",
      rating: 5,
      image: "/images/carousel1.png",
      title: "We grew without getting trapped in debt",
      content:
        "Getting capital used to mean endless paperwork and painful interest rates. Marginplus understood our needs, helped us expand and stay in control of our business. It's a real partnership not just financing.",
    },
    {
      name: "Abdul",
      role: "Farmer",
      rating: 5,
      image: "/images/carousel2.png",
      title: "Finally support that understand farmers",
      content:
        "For years, I struggled with getting loans that don't have interest. With Marginplus, it felt different. They actually understand me, and now my farm is doing better than ever. This is what real support looks like.",
    },
    {
      name: "Chidi",
      role: "Investor",
      rating: 5,
      image: "/images/carousel1.png",
      title: "I feel good about where my money goes",
      content:
        "I've invested through several platforms, but this was the first time I felt truly connected to the impact. Marginplus doesn't just talk, they show where your money is working. And yes, the returns are solid too.",
    },
    {
      name: "Adebayo",
      role: "Estate Oil Mill",
      rating: 5,
      image: "/images/carousel2.png",
      title: "We grew without getting trapped in debt",
      content:
        "Getting capital used to mean endless paperwork and painful interest rates. Marginplus understood our needs, helped us expand and stay in control of our business. It's a real partnership not just financing.",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  // Determine which cards to show based on screen size
  const getVisibleCards = () => {
    if (isMobile) {
      // On mobile, only show the active card
      return [0];
    } else {
      // On desktop, show 3 cards (previous, active, next)
      return [-1, 0, 1];
    }
  };

  return (
    <div className="bg-[#F6F6F6] pt-8 pb-14 px-4 mt-20">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="max-w-[350px] sm:max-w-[640px] mx-auto flex flex-col items-center">
          <h2 className="text-center font-bold text-[21px] sm:text-[26px] opacity-80">
            Read our Success Stories
          </h2>
          <p className="mt-4 text-sm text-center leading-5">
            Discover how investors, farmers and agri-businesses are achieving
            real growth through Marginplus
          </p>
        </div>

        <div className="relative mt-10">
          <div className="flex py-5 justify-center items-center gap-4 md:gap-12 overflow-hidden">
            {getVisibleCards().map((offset) => {
              const index =
                (activeIndex + offset + testimonials.length) %
                testimonials.length;
              // Skip empty testimonials
              if (!testimonials[index].name) return null;

              return (
                <div
                  key={index}
                  className={classNames(
                    "bg-white rounded-4xl px-8 border-1 border-gray-200 w-full md:w-[312px] min-h-[384px] md:h-[384px] transition-all duration-300 pt-16 pb-16 sm:pb-0",
                    offset === 0
                      ? "md:w-[413px] md:min-h-[484px] opacity-100 z-10"
                      : "z-0:"
                  )}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                      <Image
                        src={testimonials[index].image || "/placeholder.svg"}
                        alt={testimonials[index].name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                    <div>
                      <h3
                        className={classNames(
                          "font-bold text-[20.78px]",
                          offset === 0 ? "lg:text-[24px]" : "lg:text-[18px]"
                        )}
                      >
                        {testimonials[index].name}
                      </h3>
                      <p className="text-xs">{testimonials[index].role}</p>
                    </div>
                    <div className="ml-auto flex">
                      {[...Array(testimonials[index].rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-[18.33px] h-[17.43px] text-[#008647] fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <h4
                    className={classNames(
                      "mb-3 font-bold text-[20.78px]",
                      offset === 0 ? "lg:text-[24px]" : "lg:text-[18px]"
                    )}
                  >
                    {testimonials[index].title}
                  </h4>
                  <p
                    className={classNames(
                      "font-medium text-[15.58px]",
                      offset === 0 ? "lg:text-[18px]" : "lg:text-[12px]"
                    )}
                  >
                    {testimonials[index].content}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center items-center mt-8 gap-4">
          <button
            onClick={prevSlide}
            className="p-1 text-gray-700 hover:text-gray-900 transition-colors disabled:opacity-50"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={classNames(
                  "w-[7.56px] h-[7.56px] lg:w-3 lg:h-3 rounded-full transition-all",
                  activeIndex === index ? "bg-gray-700" : "bg-gray-300"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-1 text-gray-700 hover:text-gray-900 transition-colors disabled:opacity-50"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

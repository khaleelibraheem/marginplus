"use client";

import Image from "next/image";
import React from "react";

export const ThankYouModal = ({ isOpen, onClose }) => {
  const closeModal = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-filter" onClick={onClose}></div>

      <div className="w-[95%] md:w-[627px] h-auto z-50 px-5 md:px-10 py-10 md:py-16 pb-20 rounded-[24px]
                bg-gradient-to-t to-[#81C64A] from-[#00A859] relative overflow-hidden shadow-lg flex flex-col items-center justify-center">
        <div className="absolute top-0 left-0 z-0 w-[200px]">
          <Image src="/images/waitlist-bg-1.svg" alt="Background Image 1" layout="responsive" width={330} height={420} className="h-[420px] w-[330px]" />
        </div>
        <div className="absolute bottom-0 right-0 z-0 w-[200px]">
          <Image src="/images/join-bg-2.svg" alt="Background Image 2" layout="responsive" width={330} height={420} className="h-[420px] w-[330px]" />
        </div>

        <div className="relative z-10">
          <section className="mb-10 md:mb-14">
            <div className="text-center text-white flex flex-col justify-center items-center">
              <h3 className="text-[55px] md:text-[70px] !leading-[1.3] mb-4 font-gilroy font-bold">
                🎉
              </h3>
              <h3 className="text-[30px] md:text-[45px] !leading-[1.3] mb-4 font-gilroy font-bold">
                Thanks for joining our waitlist!
              </h3>
              <p className="font-medium text-[15px] md:text-[20px] mx-auto font-gilroy font-medium text-gray-100">
                Stay tuned! In the meantime, join our Telegram community to stay connected, get firsthand updates, and be part of the journey!🚀
              </p>
            </div>
          </section>

          <div className="flex gap-[12px] flex-col items-center items-stretch max-w-[768px]">
            <div className="flex flex-col md:flex-row gap-5"></div>
            <a
              href="https://t.me/+n032fdD6bZViNzA0"
              target="_blank"
              onClick={closeModal}
              className="tracking-[0.025em] bg-white border border-white text-black 
             border-[transparent] border-[1px] focus:outline-none px-[10px] text-[20px] 
             rounded-[12px] leading-[1em] h-[60px] font-bold text-primary mt-2 flex items-center gap-2 justify-center font-gilroy"
            >
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                <path fill="#29b6f6" d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z"></path>
                <path fill="#fff" d="M34,15l-3.7,19.1c0,0-0.2,0.9-1.2,0.9c-0.6,0-0.9-0.3-0.9-0.3L20,28l-4-2l-5.1-1.4c0,0-0.9-0.3-0.9-1	c0-0.6,0.9-0.9,0.9-0.9l21.3-8.5c0,0,0.7-0.2,1.1-0.2c0.3,0,0.6,0.1,0.6,0.5C34,14.8,34,15,34,15z"></path>
                <path fill="#b0bec5" d="M23,30.5l-3.4,3.4c0,0-0.1,0.1-0.3,0.1c-0.1,0-0.1,0-0.2,0l1-6L23,30.5z"></path>
                <path fill="#cfd8dc" d="M29.9,18.2c-0.2-0.2-0.5-0.3-0.7-0.1L16,26c0,0,2.1,5.9,2.4,6.9c0.3,1,0.6,1,0.6,1l1-6l9.8-9.1	C30,18.7,30.1,18.4,29.9,18.2z"></path>
              </svg>
              <span>Join Marginplus Tribe</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

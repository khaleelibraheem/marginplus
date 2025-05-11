import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HeroSection() {
  return (
    <section>
      {/* Hero Section with Background Image */}
      <div
        className="relative flex flex-col items-center justify-center mt-5 w-full h-[427px] lg:h-[254px]"
        style={{
          backgroundImage: "url('/images/help-heroimg.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-3xl font-bold text-center w-[282px] lg:w-[496px] text-white mb-[28px]">
            Get Help, Anywhere, Anytime!
          </h1>
          <div className="pl-4 pr-[5px] py-[6px] bg-white flex justify-between rounded-[24px] w-[308px] lg:w-[536px]">
            <input
              type="text"
              placeholder="Search help questions, or topics."
              className="border-none inset-0 text-[14px] w-full focus:outline-0"
            />
            <div className="flex items-center justify-center rounded-[50%] bg-[#008647] w-[36px] h-[34px] ">
              <Image
                src={"/images/search-icon.png"}
                width={10}
                height={10}
                alt="search-icon"
                className="w-[13.38px] h-[13.38px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 max-w-[480.4px] mx-auto">
        <h2 className="text-center font-bold text-[30px] lg:text-[36px] opacity-80">
          Get in Touch
        </h2>
        <div
          className="px-6 mt-8 flex flex-col gap-4 lg:flex-row justify-center
        "
        >
          <Link href={"#"}>
            <button className="border-1 border-[#008647] text-[13px] font-bold text-[#008647] flex w-full lg:w-[180.8px] justify-center items-center gap-2 p-4 rounded-[10px] cursor-pointer transition-all duration-300 hover:bg-[#008647] hover:text-white group">
              Send us a mail
              <span className="transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={"/images/sms.svg"}
                  width={10}
                  height={10}
                  alt="icon"
                  className="w-[20px] h-[20px] transition-all duration-300 group-hover:brightness-200"
                />
              </span>
            </button>
          </Link>

          <Link href={"#"}>
            <button className="border-1 border-[#008647] text-[13px] font-bold text-[#008647] flex w-full lg:w-[114.8px] justify-center items-center gap-2 p-4 rounded-[10px] cursor-pointer transition-all duration-300 hover:bg-[#008647] hover:text-white group">
              Call
              <span className="transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={"/images/call.svg"}
                  width={10}
                  height={10}
                  alt="icon"
                  className="w-[20px] h-[20px] transition-all duration-300 group-hover:brightness-200"
                />
              </span>
            </button>
          </Link>

          <Link href={"#"}>
            <button className="border border-[#008647] text-[13px] font-bold text-[#008647] flex w-full lg:w-[156.8px] justify-center items-center gap-2 p-4 rounded-[10px] cursor-pointer transition-all duration-300 hover:bg-[#008647] hover:text-white group">
              Whatsapp
              <span className="transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={"/images/whatsapp.svg"}
                  width={10}
                  height={10}
                  alt="icon"
                  className="w-[20px] h-[20px] transition-all duration-300 group-hover:brightness-200"
                />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

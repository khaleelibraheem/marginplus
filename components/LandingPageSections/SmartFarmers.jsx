import { ArrowRight } from "lucide-react";
import Avatars from "../ui/Avatars";

const avatars = [
  {
    imageUrl: "/images/avatar-1.jpg",
    profileUrl: "#",
  },
  {
    imageUrl: "/images/avatar-2.jpg",
    profileUrl: "#",
  },
  {
    imageUrl: "/images/avatar-3.jpg",
    profileUrl: "#",
  },
  {
    imageUrl: "/images/avatar-4.jpg",
    profileUrl: "#",
  },
];

export default function SmartFarmers() {
  return (
    <section className="max-w-[1400px] mx-auto px-4 mt-20 flex flex-col items-center">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 py-10">
        {/* Left Section */}
        <div className="max-w-[520px]">
          <h2 className="text-[36px] md:text-4xl font-medium text-[#008647] leading-snug">
            Smart Farmers & Investors Use <br className="hidden md:block" />{" "}
            Marginplus
          </h2>
          <p className="opacity-80 text-[18px] mt-4 leading-6">
            Investors are fueling farmers across the continent, helping them
            raise funds to buy equipment, expand operations, and access better
            markets without relying on traditional loans.
          </p>
          <div className="mt-4 w-[120px] flex items-center gap-2 text-sm font-medium opacity-80 cursor-pointer group">
            Learn more
            <ArrowRight
              className="group-hover:translate-x-1 transition-transform"
              size="18"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col md:flex-row items-stretch gap-4 w-full lg:w-auto">
          {/* Card 1 - Clients */}
          <div className="bg-[#F9F9F9] flex flex-col justify-between rounded-[20px] p-5 w-full md:w-[393px] text-center h-[212px]">
            <div className="flex justify-between items-center">
              <h4 className="text-[20px] font-medium text-[#333] mb-2 text-left">
                Our <br /> Clients
              </h4>
              <Avatars avatarUrls={avatars} />
            </div>

            <div className="flex justify-between items-center mt-4 text-left">
              <div>
                <p className="text-[30px] font-bold text-[#008647] leading-none">
                  12k
                </p>
                <p className="text-sm opacity-80">Happy Clients</p>
              </div>
              <div className="flex items-center gap-1 text-sm text-black cursor-pointer group opacity-80">
                Read Testimonials
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size="16"
                />
              </div>
            </div>
          </div>

          {/* Card 2 - Circular Progress */}
          <div className="bg-[#F9F9F9] rounded-[20px] p-5 w-full md:w-[208px] text-center flex flex-col items-center justify-center h-[212px]">
            <div className="relative w-[100px] h-[100px] mb-4">
              {/* Outer background ring */}
              <svg
                className="w-full h-full transform -rotate-90"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="46"
                  stroke="#E6F5ED" // light background ring
                  strokeWidth="4"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="46"
                  stroke="#008647" // progress stroke
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 46 * 0.88} ${
                    2 * Math.PI * 46 * 0.12
                  }`} // 88%
                  strokeLinecap="round"
                />
              </svg>

              {/* Inner filled circle */}
              <div className="absolute top-1/2 left-1/2 w-[60px] h-[60px] bg-[#B8E6C1] rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 z-10">
                <span className="text-[#008647] text-[24px] font-medium">
                  88%
                </span>
              </div>
            </div>
            <p className="text-sm opacity-80">Projects Completed</p>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function WaitlistSection() {
  return (
    <section className="mt-20 mb-40 px-4 w-full">
      <div className="max-w-[952px] mx-auto">
        <div className="relative w-full rounded-[30px] bg-[#008647] overflow-hidden py-5 px-5 lg:px-[40px]">
          <div
            className="hidden lg:block absolute -bottom-10 -left-22 z-0 pointer-events-none opacity-80 mix-blend-overlay
                          w-[500px] h-[350px]"
          >
            <Image
              src="/images/vector.svg"
              alt="background pattern"
              fill
              className="object-contain object-bottom-left"
            />
          </div>
          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="text-white text-[32px] font-bold leading-tight">
              Join Our Growing Community
            </h2>
            <p className="text-white mt-4 text-[18px] max-w-[302px] lg:max-w-[693px] leading-5.5 lg:leading-relaxed">
              Be the first to hear about new farmer clusters, markets, insights,
              and impact reports.
            </p>

            {/* Form */}
            <form className="w-full mt-5 lg:mt-8 flex flex-col gap-3">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-5 w-full">
                {/* Name Input */}
                <div className="text-left">
                  <label
                    htmlFor="name"
                    className="block text-white font-bold text-[12px] mb-1 lg:mb-2 ml-1"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter name"
                    className="w-full bg-white rounded-lg h-[46px] p-[10px] text-[14px] text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFBF1B]"
                  />
                </div>

                {/* Email Input */}
                <div className="text-left">
                  <label
                    htmlFor="email"
                    className="block text-white font-bold text-[12px] mb-1 lg:mb-2 ml-1"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full h-[46px] p-[10px] bg-white rounded-lg px-4 text-[14px] text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFBF1B]"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full h-[46px] py-[16px] mt-2 rounded-lg bg-[#FFBF1B] text-[#1a1a1a] font-bold text-[14px] hover:bg-[#e5aa18] transition-colors shadow-md cursor-pointer flex justify-center items-center"
              >
                Subscribe
              </button>
            </form>

            <p className="mt-3 lg:mt-10 text-white text-left lg:text-center text-[11px] lg:text-[18px] max-w-[829px]">
              By subscribing, you agree to receive updates from Marginplus and
              accept our Terms & Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

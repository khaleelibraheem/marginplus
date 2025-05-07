import Image from "next/image";
import React from "react";

export default function SmartInvestorsSection() {
  return (
    <section className="mt-20">
      <div className="max-w-[350px] sm:max-w-[640px] mx-auto flex flex-col items-center">
        <h2 className="text-center font-bold text-[21px] sm:text-[26px] opacity-80">
          Smart Investors Choose Marginplus
        </h2>
        <p className="mt-6 text-sm text-center leading-5 font-medium">
          We go beyond traditional investing. We’re building a movement—one that
          combines financial growth with real-world impact. Here's why investors
          like you should choose us:
        </p>
      </div>
      <div className="flex justify-center">
        <div className="px-3 flex items-center sm:gap-10 gap-4 mt-12">
          <div>
            {/* Feature 1 */}
            <div className="w-[167px] sm:w-[289px] flex flex-col items-center text-center">
              <div className="flex items-center justify-center">
                <Image
                  src={"/images/sec-nig.png"}
                  width={100}
                  height={100}
                  alt="sec-logo"
                  className="w-[106px] h-[22.36px] sm:w-[190px] sm:h-[40px]"
                />
              </div>
              <h2 className="text-sm sm:text-[18px] font-bold mt-6 mb-1">
                Licensed and Regulated
              </h2>
              <p className="text-xs sm:text-sm font-medium">
                We are proudly licensed by the Securities and Exchange
                Commission (SEC), ensuring your investments are secure and
                transparent.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="w-[167px] sm:w-[289px] mt-10 sm:mt-20 flex flex-col items-center text-center">
              <div className="flex items-center justify-center">
                <Image
                  src={"/images/tractor.png"}
                  width={100}
                  height={100}
                  alt="tractor"
                  className="w-[44.67px] h-[33.47px] sm:w-[80.06px] sm:h-[60px]"
                />
              </div>
              <h2 className="text-sm sm:text-[18px] font-bold mt-3 mb-1">
                Agriculture-Backed Investments
              </h2>
              <p className="text-xs sm:text-sm font-medium">
                We connect you to Africa’s most promising asset
                class—agriculture—with high-growth opportunities vetted by
                experts.
              </p>
            </div>
          </div>
          <div className="lg:hidden h-[364px] bg-[#008647] w-[1px] opacity-25"></div>
          <div className="hidden lg:block">
            <Image
              src={"/images/twofarmers.png"}
              width={500}
              height={500}
              alt="farmers"
              className="w-[344px] h-[274px] object-cover"
              priority
            />
          </div>

          <div>
            {/* Feature 3 */}
            <div className="w-[167px] sm:w-[289px] flex flex-col items-center text-center">
              <div className="flex items-center justify-center">
                <Image
                  src={"/images/arrow.png"}
                  width={100}
                  height={100}
                  alt="arrow"
                  className="w-[42.96px] h-[33.47px] sm:w-[77px] sm:h-[60px]"
                />
              </div>
              <h2 className="text-sm sm:text-[18px] font-bold mt-3 mb-1">
                Real Impact, Real Returns
              </h2>
              <p className="text-xs sm:text-sm font-medium">
                Every investment you make fuels Africa’s economic future,
                empowering farmers and businesses while earning you profits.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="w-[167px] sm:w-[289px] mt-10 sm:mt-30 flex flex-col items-center text-center">
              <div className="flex items-center justify-center">
                <Image
                  src={"/images/pie.png"}
                  width={100}
                  height={100}
                  alt="pie-chart"
                  className="w-[36.77px] h-[33.47px] sm:w-[65.91px] sm:h-[60px]"
                />
              </div>
              <h2 className="text-sm sm:text-[18px] font-bold mt-3 mb-1">
                Profit-Sharing Model with Up to 35% Returns
              </h2>
              <p className="text-xs sm:text-sm font-medium">
                Unlike traditional lending, we share profits directly with you,
                maximizing your earning potential while driving sustainable
                growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

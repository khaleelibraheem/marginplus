import Image from "next/image";
import Button from "../ui/Button";

export default function FeaturedSection() {
  return (
    <section className="mt-[-10px]">
      <div className="bg-[#A5F48D] py-4 flex justify-center items-center">
        <p className="text-[#008647] font-semibold mr-2 text-sm sm:text-[16px]">
          Featured on:
        </p>
        {/* Mobile Logos(Smaller in Size) */}
        <div className="flex md:hidden gap-3 sm:gap-7 items-center">
          <Image
            src={"/images/techcabal.png"}
            alt="company"
            height={120}
            width={120}
            priority
            className="w-[20px]"
          />
          <Image
            src={"/images/bbc-logo.svg"}
            alt="company"
            height={60}
            width={60}
            priority
          />
          <Image
            src={"/images/disruptafrica.png"}
            alt="company"
            height={50}
            width={50}
            priority
            className="h-[30px] w-[65px]"
          />
        </div>

        {/* Desktop Logos(Bigger in Size) */}
        <div className="hidden md:flex gap-8 items-center">
          <Image
            src={"/images/techcabal.png"}
            alt="company"
            height={150}
            width={150}
            priority
            className="w-[40px]"
          />
          <Image
            src={"/images/bbc-logo.svg"}
            alt="company"
            height={90}
            width={90}
            priority
          />
          <Image
            src={"/images/disruptafrica.png"}
            alt="company"
            height={80}
            width={80}
            priority
          />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto">
        <div className="mx-3 md:mx-10 mt-10 sm:mt-20 rounded-2xl sm:rounded-[40px] px-4 py-4 sm:px-16 bg-[#00814C] flex justify-between items-center">
          <div className="text-white">
            <h2 className="text-[25px] sm:text-4xl font-bold">
              Invest with Confidence
            </h2>
            <ul className="mt-1 lg:mt-5 space-y-3 lg:space-y-1">
              <li className="flex gap-1 text-[14px] lg:text-xl">
                <Image
                  src={"/images/verify.svg"}
                  alt="verify"
                  width={20}
                  height={20}
                  priority
                />
                <p>
                  Earn &nbsp;
                  <span className="text-[#B2FF96] font-semibold">
                    up to 35% return &nbsp;
                  </span>
                  on your investments
                </p>
              </li>
              <li className="flex gap-1 text-[14px] lg:text-xl">
                <Image
                  src={"/images/verify.svg"}
                  alt="verify"
                  width={20}
                  height={20}
                  priority
                />
                <p>Secure, transparent, and hassle-free</p>
              </li>
              <li className="flex gap-1 text-[14px] items-start lg:text-xl leading-4 lg:leading-5">
                <Image
                  src={"/images/verify.svg"}
                  alt="verify"
                  width={20}
                  height={20}
                  className="mt-1"
                  priority
                />
                <p>
                  Vetted opportunities to build wealth <br /> and drive impact
                </p>
              </li>
            </ul>
            <div className="mt-4 sm:mt-8">
              <Button
                text={"Invest now"}
                bgColor={"#B2FF96"}
                textColor={"#008647"}
              />
            </div>
          </div>
          <div className="hidden sm:block">
            <Image
              src={"/images/shield.png"}
              alt="check"
              width={1500}
              height={500}
              className="w-[259.36px] h-[317px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

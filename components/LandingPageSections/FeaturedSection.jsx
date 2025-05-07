import Image from "next/image";
import Button from "../ui/Button";

export default function FeaturedSection() {
  return (
    <section className="mt-[-35px]">
      <div className="bg-[#A5F48D] py-4 flex justify-center items-center">
        <p className="text-[#008647] font-semibold mr-2 md:text-xl">
          Featured on:
        </p>
        {/* Mobile Logos(Smaller in Size) */}
        <div className="flex md:hidden gap-3 sm:gap-7 items-center">
          <Image
            src={"/images/techcrunch-logo.svg"}
            alt="company"
            height={120}
            width={120}
            priority
          />
          <Image
            src={"/images/bbc-logo.svg"}
            alt="company"
            height={60}
            width={60}
            priority
          />
          <Image
            src={"/images/blogx-logo.svg"}
            alt="company"
            height={50}
            width={50}
            priority
          />
        </div>

        {/* Desktop Logos(Bigger in Size) */}
        <div className="hidden md:flex gap-10 items-center">
          <Image
            src={"/images/techcrunch-logo.svg"}
            alt="company"
            height={150}
            width={150}
            priority
          />
          <Image
            src={"/images/bbc-logo.svg"}
            alt="company"
            height={90}
            width={90}
            priority
          />
          <Image
            src={"/images/blogx-logo.svg"}
            alt="company"
            height={80}
            width={80}
            priority
          />
          <Image
            src={"/images/techsomia-logo.svg"}
            alt="company"
            height={140}
            width={140}
            priority
            className="hidden md:block"
          />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto">
        <div className="mx-3 md:mx-10 mt-20 rounded-2xl px-6 py-4 sm:px-12 sm:pt-12 sm:pb-8 bg-[#008647] flex justify-between">
          <div className="text-white">
            <h2 className="text-[25px] sm:text-5xl font-bold">
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
              src={"/images/trusted-icon.svg"}
              alt="check"
              width={250}
              height={250}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

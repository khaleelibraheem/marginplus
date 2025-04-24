import Image from "next/image";
import Button from "../ui/Button";

export default function FeaturedSection() {
  return (
    <section>
      <div className="bg-[#A5F48D] py-4 flex justify-center items-center">
        <p className="text-[#008647] font-semibold">Featured on:</p>
        <div className="flex gap-3 sm:gap-7 items-center">
          <Image
            src={"/images/techcrunch-logo.svg"}
            alt="company"
            height={120}
            width={120}
          />
          <Image
            src={"/images/bbc-logo.svg"}
            alt="company"
            height={60}
            width={60}
          />
          <Image
            src={"/images/blogx-logo.svg"}
            alt="company"
            height={50}
            width={50}
          />
          <Image
            src={"/images/techsomia-logo.svg"}
            alt="company"
            height={110}
            width={110}
            className="hidden sm:block"
          />
        </div>
      </div>

     <div className="max-w-[1400px] mx-auto">
     <div className="mx-3 md:mx-10 mt-10 rounded-2xl px-6 py-4 sm:px-12 sm:pt-12 sm:pb-8 bg-[#008647] flex justify-between">
        <div className="text-white">
          <h2 className="text-[25px] sm:text-5xl font-bold">
            Invest with Confidence
          </h2>
          <ul className="mt-5 space-y-3">
            <li className="flex gap-1 text-[15px]">
              <Image
                src={"/images/verify.svg"}
                alt="verify"
                width={20}
                height={20}
              />
              <p>
                Earn &nbsp;
                <span className="text-[#B2FF96] font-semibold">
                  up to 35% return &nbsp;
                </span>
                on your investments
              </p>
            </li>
            <li className="flex gap-1 text-[15px]">
              <Image
                src={"/images/verify.svg"}
                alt="verify"
                width={20}
                height={20}
              />
              Secure, transparent, and hassle-free
            </li>
            <li className="flex gap-1 text-[15px] items-start">
              <Image
                src={"/images/verify.svg"}
                alt="verify"
                width={20}
                height={20}
                className="mt-1"
              />
              Vetted opportunities to build wealth <br /> and drive impact
            </li>
          </ul>
          <div className="mt-4 sm:mt-12">
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
          />
        </div>
      </div>
     </div>
    </section>
  );
}

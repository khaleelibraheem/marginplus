import Image from "next/image";
import AppDownloadButton from "../ui/AppDownloadButton";

export default function HeroSection() {
  return (
    <section className="mt-32 max-w-[1400px] mx-auto">
      <div className="flex flex-col items-center lg:flex-row lg:px-10">
        {/* Hero Left */}
        <div className="px-8 flex-1/2">
          <h1 className="text-5xl lg:text-[70px] text-center lg:text-left font-semibold text-[#014F2A] leading-11 lg:leading-[58px] capitalize lg:normal-case">
            Invest smart, <br /> in African <br /> agriculture
          </h1>
          <p className="font-medium text-[16px] text-center lg:text-left mt-4 leading-4 max-w-[450px] lg:text-[#014F2A]">
            Grow your wealth by investing in profitable, secure and
            Impact-driven ventures.
          </p>
          <div className="mt-5 flex items-center justify-center lg:justify-start gap-4">
            <AppDownloadButton url={"/images/googleplay-green.svg"} />
            <AppDownloadButton url={"/images/appstore-green.svg"} />
          </div>
          {/* <div className="flex flex-col items-center justify-center lg:items-start mt-2">
            <Image
              src={"/images/sec.svg"}
              alt="SEC-badge"
              height={37}
              width={129}
            />
            <p className="mt-1 text-center lg:text-left text-[12px]">
              We are SEC Licensed as a crowdfunding intermediary
            </p>
          </div> */}
        </div>
        {/* Hero Right */}
        <div className="w-full flex-1/2">
          {/* Mobile Image */}
          <Image
            src={"/images/landing-mobile.png"}
            alt="SEC-badge"
            height={348}
            width={378}
            className="w-full lg:hidden max-h-[350px] max-w-[380px] mx-auto"
          />
          {/* Desktop Image */}
          <Image
            src={"/images/landing.svg"}
            alt="SEC-badge"
            height={348}
            width={378}
            className="w-full hidden lg:block max-h-[471px] max-w-[570px]"
          />
        </div>
      </div>
      <div className="py-4 flex justify-center items-center">
        {/* Mobile Logos(Smaller in Size) */}
        <div className="flex sm:hidden gap-5 items-center">
          <Image
            src={"/images/techcabal.png"}
            alt="techcabal"
            height={120}
            width={120}
            priority
            className="w-[20px]"
          />
          <Image
            src={"/images/bbc-logo.svg"}
            alt="bbc-logo"
            height={60}
            width={60}
            priority
          />
          <Image
            src={"/images/disruptafrica.png"}
            alt="disruptafrica"
            height={50}
            width={50}
            priority
            className="h-[30px] w-[65px]"
          />
        </div>

        {/* Desktop Logos(Bigger in Size) */}
        <div className="hidden sm:flex gap-8 items-center">
          <Image
            src={"/images/techcabal.png"}
            alt="techcabal"
            height={150}
            width={150}
            priority
            className="w-[40px]"
          />
          <Image
            src={"/images/bbc-logo.svg"}
            alt="bbc"
            height={90}
            width={90}
            priority
          />
          <Image
            src={"/images/disruptafrica.png"}
            alt="disruptafrica"
            height={80}
            width={80}
            priority
          />
        </div>
      </div>
    </section>
  );
}

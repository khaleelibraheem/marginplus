import Image from "next/image";

export default function FooterSection() {
  return (
    <section className="px-6 pt-8 pb-14 md:py-14 md:px-10 bg-[#B2FF96] mt-16 md:mt-28">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex md:justify-between md:gap-9 flex-wrap md:flex-nowrap gap-4">
          <div>
            <Image
              src={"/images/logo.svg"}
              alt="logo"
              width={150}
              height={150}
            />
            <p className="mt-2">
              Block No 4, Antonio Gek plaza, <br /> Wuse, Zone II, Abuja,
              Nigeria
            </p>
            <p className="mt-5">hi@marginplus.ng</p>
            <p className="mt-4">+234-701447-0953</p>
            <div className="flex gap-5 mt-4 mb-5 md:mb-2">
              <Image
                src={"/images/facebook.svg"}
                alt="icon"
                height={20}
                width={20}
              />
              <Image
                src={"/images/x.svg"}
                alt="icon"
                height={20}
                width={20}
              />
              <Image
                src={"/images/instagram.svg"}
                alt="icon"
                height={20}
                width={20}
              />
              <Image
                src={"/images/linked.svg"}
                alt="icon"
                height={20}
                width={20}
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-7">
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold">Company</h4>
              <a href="#" className="text-sm">
                About Us
              </a>
              <a href="#" className="text-sm">
                FAQ
              </a>
              <a href="#" className="text-sm">
                Careers
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold">Invest In</h4>
              <a href="#" className="text-sm">
                Crop Farming
              </a>
              <a href="#" className="text-sm">
                Livestock Farming
              </a>
              <a href="#" className="text-sm">
                Agro-processing
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold">Explore</h4>
              <a href="#" className="text-sm">
                Join Our Tribe
              </a>
              <a href="#" className="text-sm">
                Suggestion?
              </a>
              <a href="#" className="text-sm">
                Blog
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold">Legal</h4>
              <a href="#" className="text-sm">
                Terms & Condition
              </a>
              <a href="#" className="text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-sm">
                Disclosure
              </a>
            </div>
          </div>
        </div>
        <hr className="w-[70%] border-[#292C32] opacity-20 hidden md:block" />
        <div className="mt-10 flex flex-col gap-4">
          <p className="text-[13px] font-light text-[#014E2F]">
            Marginplus is a leading crowdfunding investment platform in Nigeria
          </p>
          <p className="text-[13px] font-light text-[#014E2F]">
            Mplus Finance Limited is duly licensed by the Securities and
            Exchange Commission (SEC) of Nigeria.{" "}
            <span className="font-semibold">
              <a href="#">Check here</a>
            </span>
          </p>
          <p className="text-[13px] font-light text-[#014E2F]">
            2024-2025 Marginplus Technologies Ltd - RC 123432
          </p>
        </div>
      </div>
    </section>
  );
}

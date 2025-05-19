import Image from "next/image";
import Link from "next/link";

const footerData = {
  contact: {
    logo: "/images/logo.png",
    address: `Block No 4, Antonio Gek plaza,\nWuse, Zone II, Abuja, Nigeria`,
    email: "hi@marginplus.ng",
    phone: "+234-701447-0953",
    socials: [
      {
        href: "https://www.facebook.com/marginplusgrp",
        icon: "/images/facebook.svg",
      },
      {
        href: "https://x.com/marginplus_ng",
        icon: "/images/x.svg",
      },
      {
        href: "https://www.instagram.com/marginplus_ng",
        icon: "/images/instagram.svg",
      },
      {
        href: "https://www.linkedin.com/company/marginplusgroup/",
        icon: "/images/linked.svg",
      },
    ],
  },
  links: [
    {
      title: "Company",
      items: [
        { label: "About Us", href: "/about-us" },
        { label: "Help", href: "/help" },
        { label: "Careers", href: "#" },
      ],
    },
    {
      title: "Invest In",
      items: [
        { label: "Crop Farming", href: "#" },
        { label: "Livestock Farming", href: "#" },
        { label: "Agro-processing", href: "#" },
      ],
    },
    {
      title: "Explore",
      items: [
        {
          label: "Join Our Tribe",
          href: "https://t.me/+n032fdD6bZViNzA0",
          external: true,
        },
        { label: "Suggestion?", href: "#" },
        {
          label: "Blog",
          href: "http://blog.marginplus.ng",
          external: true,
        },
      ],
    },
    {
      title: "Legal",
      items: [
        { label: "Terms & Condition", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Disclosure", href: "#" },
      ],
    },
  ],
};

export default function FooterSection() {
  return (
    <section className="px-4 pt-8 pb-14 bg-[#B2FF96]">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex md:justify-between md:gap-9 flex-wrap md:flex-nowrap gap-4">
          <div className="text-[#292C32] font-medium">
            <Image
              src={footerData.contact.logo}
              alt="logo"
              width={150}
              height={150}
            />
            <p className="mt-2 whitespace-pre-line">
              {footerData.contact.address}
            </p>
            <p className="mt-5">{footerData.contact.email}</p>
            <p className="mt-4">{footerData.contact.phone}</p>
            <div className="flex gap-5 mt-4 mb-5 md:mb-2">
              {footerData.contact.socials.map(({ href, icon }, idx) => (
                <Link
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={icon} alt="icon" height={20} width={20} />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-7 font-medium text-[#292C32]">
            {footerData.links.map((section, idx) => (
              <div key={idx} className="flex flex-col gap-3">
                <h4 className="font-semibold">{section.title}</h4>
                {section.items.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    target={item.external ? "_blank" : "_self"}
                    rel={item.external ? "noopener noreferrer" : undefined}
                  >
                    <span className="text-sm">{item.label}</span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <hr className="w-[70%] border-[#292C32] opacity-20 hidden md:block" />

        <div className="mt-10 flex flex-col gap-4">
          <p className="text-[13px] font-light text-[#014E2F]">
            Marginplus is a leading crowdfunding investment platform in Nigeria
          </p>
          <p className="text-[13px] font-light text-[#014E2F]">
            Marginplus Finance Limited is duly licensed by the Securities and
            Exchange Commission (SEC) of Nigeria.{" "}
            <span className="font-semibold">
              <Link href="#">
                <span>Check here</span>
              </Link>
            </span>
          </p>
          <p className="text-[13px] font-light text-[#014E2F]">
            2024-2025 Marginplus Technologies Ltd - RC 773240
          </p>
        </div>
      </div>
    </section>
  );
}

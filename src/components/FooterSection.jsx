import Image from "next/image";
import Link from "next/link";

const footerData = {
  contact: {
    logo: "/images/logo.png",
    rc: "RC No 7732340",
    co: "Co-owned by farmers 💚",
    bu: "Building Africa's next generation of farming communities.",
    address: `Gombe State, Nigeria`,
    email: "info@marginplusgroup.com",
    phone: "+234 (0) 81 2987 4930",
    socials: [
      {
        href: "https://www.linkedin.com/company/marginplusgroup/",
        icon: "/images/linked.svg",
      },
      {
        href: "https://www.instagram.com/marginplusgroup",
        icon: "/images/instagram.svg",
      },
      {
        href: "https://www.facebook.com/marginplusgrp",
        icon: "/images/facebook.svg",
      },
      {
        href: "https://x.com/marginplusgroup",
        icon: "/images/x.svg",
      },
    ],
  },
  links: [
    {
      title: "Company",
      items: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about-us" },
        { label: "Our Model", href: "/our-model" },
        { label: "Community", href: "/community" },
      ],
    },
    {
      title: "Our Resources",
      items: [
        { label: "Gallery", href: "#" },
        { label: "Reports", href: "#" },
        { label: "FAQ's", href: "#" },
        { label: "Press Release", href: "#" },
      ],
    },
    {
      title: "Socials",
      items: [
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/company/marginplusgroup/",
          external: true,
        },
        { label: "Facebook", href: "https://www.facebook.com/marginplusgrp" },
        {
          label: "Instagram",
          href: "https://www.instagram.com/marginplusgroup",
          external: true,
        },
        { label: "X Twitter", href: "https://x.com/marginplusgroup" },
      ],
    },
  ],
};

export default function FooterSection() {
  return (
    <section className="px-4 pt-8 pb-8 bg-[#B2FF96] mt-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex md:justify-between md:gap-9 flex-wrap md:flex-nowrap gap-8 lg:gap-8 text-[14px] lg:items-center">
          <div className="text-[#292C32] font-medium">
            <Image src={footerData.contact.logo} alt="logo" width={150} height={150} />
            <p className="mt-5 text-sm">{footerData.contact.rc}</p>
            <p className="mt-3 text-sm">{footerData.contact.co}</p>
            <p className="max-w-[316px] lg:max-w-[372px] text-sm">{footerData.contact.bu}</p>

            <div className="flex gap-2 mt-8 mb-5 md:mb-2">
              {footerData.contact.socials.map(({ href, icon }, idx) => (
                <Link key={idx} href={href} target="_blank" rel="noopener noreferrer">
                  <Image src={icon} alt="icon" height={33} width={33} className="w-[25px] h-[25px]" />
                </Link>
              ))}
            </div>
            <p className="mt-2 text-[14px]">{footerData.contact.address}</p>
            <p className="mt-3">{footerData.contact.phone}</p>

            <p className="">
              <a href="mailto:hi@marginplus.ng">{footerData.contact.email}</a>
            </p>
          </div>

          <div className="flex flex-wrap gap-14 lg:gap-18 font-medium text-[#292C32]">
            {footerData.links.map((section, idx) => (
              <div key={idx} className="flex flex-col gap-3">
                <h4 className="font-bold text-[14px]">{section.title}</h4>
                {section.items.map((item, i) => (
                  <Link key={i} href={item.href} target={item.external ? "_blank" : "_self"} rel={item.external ? "noopener noreferrer" : undefined}>
                    <span className="text-sm hover:text-green-500">{item.label}</span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <hr className="w-full mt-10 border-[#292C32] opacity-20 hidden md:block" />

        <div className="mt-10 flex flex-col gap-4">
          <p className="text-[13px] font-light text-[#014E2F] text-center">&copy; 2025 Marginplus Group. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}

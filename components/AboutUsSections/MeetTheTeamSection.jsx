import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MeetTheTeamSection() {
  const teamMembers = [
    {
      name: "Zunnuraini Aliyu",
      role: "CEO & Co-founder",
      image: "/images/zunnuraini.png",
    },
    {
      name: "Stepehen Echero",
      role: "CTO/ Co-founder",
      image: "/images/stephen.png",
    },
    {
      name: "Aliyu M Garba",
      role: "Investment Officer/ Director",
      image: "/images/aliyu.png",
    },
    {
      name: "Mansur Nura",
      role: "Compliance/ Legal Director",
      image: "/images/mansur.png",
    },
  ];

  return (
    <section className="max-w-[1126px] mx-auto mt-20 mb-50">
      {/* Section Header */}
      <div className="max-w-[350px] sm:max-w-[640px] mx-auto flex flex-col items-center">
        <h2 className="text-center font-bold text-[21px] sm:text-[26px] opacity-80">
          Meet The Team
        </h2>
        <p className="mt-6 text-sm text-center leading-5">
          With over 50 years of combined experience in agriculture, technology
          and finance, our team bring deep industry expertise to this solution.
        </p>
      </div>

      <div className="mt-10 px-4 flex flex-col items-center gap-10 md:flex-row">
        {teamMembers.map((member, index) => (
          <div className="flex flex-col w-[259px]" key={index}>
            <div>
              <Image
                src={member.image}
                width={500}
                height={500}
                alt={member.name}
                className="w-full"
                priority
              />
            </div>
            <div className="mt-5">
              <h4 className="font-bold text-[16px]">{member.name}</h4>
              <p className="text-sm opacity-60 mt-2">{member.role}</p>
              <div className="mt-1">
                <Link href={"#"} className="flex gap-3 items-center w-[84px]">
                  <Image
                    src={"/images/linkedin-blue.svg"}
                    width={100}
                    height={100}
                    alt="linkedin"
                    className="w-[20px] h-[20px]"
                    priority
                  />
                  <p className="text-sm">LinkedIn</p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

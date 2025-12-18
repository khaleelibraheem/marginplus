import Image from "next/image";
import Link from "next/link";
import React from "react";

export const MeetTheTeamSection = () => {
  const teamMembers = [
    {
      name: "Zunnuraini Aliyu",
      role: "Chief Executive Officer",
      image: "/images/team-zunnuraini-aliyu.png",
      linkedin: "https://www.linkedin.com/in/zunnurainialiyu",
    },
    {
      name: "Stephen Echeruo",
      role: "Chief Technology Officer",
      image: "/images/team-stephen-echeruo .png",
      linkedin: "https://www.linkedin.com/in/st-stephen",
    },
    {
      name: "Raymond Bakodo",
      role: "Agricultural Operations",
      image: "/images/team-raymond-bakodo.png",
      linkedin: "#",
    },
    {
      name: "Muhammad Jalige",
      role: "Community Development",
      image: "/images/team-muhammad-jalige.png",
      linkedin: "#",
    },
    {
      name: "Adamu M. Bamani ",
      role: "Non Executive Director",
      image: "/images/team-adamu-m-bamani.png",
      linkedin: "#",
    },
    {
      name: "Aliyu M Garba",
      role: "Non Executive Director",
      image: "/images/team-aliyu-m-garba.png",
      linkedin: "#",
    },
  ];

  return (
    <section className="max-w-[921px] py-20 px-5 md:px-10 mx-auto">
      <header className="w-full mb-10">
        <h2 className="text-center font-bold text-[21px] sm:text-[26px] opacity-80">Meet The Team</h2>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 place-items-center">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col w-full max-w-[219px]">
            {/* Image */}
            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-[16px]">
              <Image src={member.image} alt={member.name} fill className="object-cover object-center" priority />
            </div>

            {/* Text */}
            <div className="mt-3">
              <h4 className="font-bold text-[16px]">{member.name}</h4>
              <p className="text-sm opacity-60 mt-1">{member.role}</p>

              <div className="mt-1 flex items-center gap-2">
                <Image src="/images/linkedin.svg" width={18} height={18} alt="linkedin" />
                <span className="text-sm">LinkedIn</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

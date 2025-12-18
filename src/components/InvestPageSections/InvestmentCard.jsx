import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function InvestmentCard({
  title,
  imageUrl,
  returnRate,
  riskLevel,
  investorCount,
  price,
}) {
  return (
    <div className="max-w-full sm:max-w-[390px]">
      {/* Image section */}
      <div>
        <Image
          src={imageUrl}
          alt={title}
          width={500}
          height={500}
          className="w-full h-[278px] object-cover rounded-2xl"
        />
      </div>

      <p className="mt-3 font-bold text-lg text-center">{title}</p>

      {/* Investment details */}
      <div className="py-2">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex justify-between items-center mb-1">
              <p className="text-[#008647] text-sm">
                Return : <span className="text-black">{returnRate}</span>{" "}
              </p>
            </div>

            <div className="flex justify-between items-center mb-1">
              <p className="text-[#008647] text-sm">
                Risk Level : <span className="text-black">{riskLevel}</span>{" "}
              </p>
            </div>

            <div className="flex justify-between items-center mb-3">
              <p className="text-[#008647] text-sm">
                Investor Count :{" "}
                <span className="text-black">{investorCount}</span>{" "}
              </p>
            </div>
          </div>
          <div className="w-[103px] h-[45px]">
            <span className="w-full h-full bg-[#F6F6F6] text-[20px] text-[#00A859] font-medium p-3 rounded-md">
              {price}
            </span>
          </div>
        </div>

        {/* Invest button */}
        <Link href={"/waitlist"} target="_blank">
          <button className="w-full cursor-pointer text-[13px] bg-[#008647] font-bold hover:bg-green-700 text-white py-[18px] rounded-[10px] flex items-center justify-center mb-3">
            <span className="mr-2">Invest now</span>
            <ArrowRight size={16} />
          </button>
        </Link>
      </div>
    </div>
  );
}

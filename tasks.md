## global interface
   export type TabKey = 'active' | 'completed' | 'under-review' | 'rejected';
export type FarmStatus = 'Active' | 'Completed' | 'Under-Review' | 'Rejected';


export type DataTableColumn<T> = {
  header: string;
  accessor?: keyof T;
  render?: (item: T) => React.ReactNode;
  className?: string;
};

export interface TabItem {
  icon?: string;
  title: string;
  key: TabKey;
}

export interface Farm {
  id: number;
  title: string;
  status: FarmStatus;
  timeToMaturity: string;
  progress: number;
}


## components/authenticated/ProjectCard.tsx
  import Image from "next/image";
import React from "react";
import { Farm } from "src/interfaces/global.interface";

interface Props {
  farm: Farm;
}

const FarmCard: React.FC<Props> = ({ farm }) => {
  return (
    <div className="bg-[#F6F6F6] rounded-[12px] flex gap-3 p-4 items-center">
      <Image
        src="/rice.png"
        alt="Rice Farm"
        className="w-[72px] h-[72px] rounded object-cover"
        width={100}
        height={100}
        priority
      />
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <h4 className="font-bold text-sm text-[#494949]">{farm.title}</h4>
          <span className="bg-[#C5E6D7] rounded-[8px] px-[10px] py-[5px] text-[#004D2E] text-sm">
            {farm.status}
          </span>
        </div>
        <p className="text-sm font-medium opacity-80">{farm.timeToMaturity}</p>
        <div className="w-full bg-gray-200 h-[5px] mt-2 rounded">
          <div
            className="bg-green-500 h-[5px] rounded"
            style={{ width: `${farm.progress}%` }}
          ></div>
        </div>
        <p className="text-xs text-gray-500 mt-1">{farm.progress}%</p>
      </div>
    </div>
  );
};

export default FarmCard;


## authenticated/overview/page.tsx
"use client";

import { ArrowDown2, ArrowRight2 } from "iconsax-reactjs";
import { Icon } from "@iconify/react";
import { AppButton, AppHeader, GraySection, StatCard } from "src/components";
import { useAuth } from "src/store";
import { NGNCurrency } from "src/utils/helpers";
import {
  Farm,
  FarmStatus,
  TabItem,
  TabKey,
} from "src/interfaces/global.interface";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import FarmCard from "src/components/authenticated/ProjectCard";

const tabs: TabItem[] = [
  { title: "Active", key: "active" },
  { title: "Completed", key: "completed" },
  { title: "Under Review", key: "under-review" },
  { title: "Rejected", key: "rejected" },
];

export const farmData: Farm[] = [
  // Active farms
  //   {
  //     id: 1,
  //     title: "Rice Farm",
  //     status: "Active",
  //     timeToMaturity: "Starting 12/06/2026",
  //     progress: 0,
  //   },
  //   {
  //     id: 2,
  //     title: "Wheat Farm",
  //     status: "Active",
  //     timeToMaturity: "Starting 15/07/2026",
  //     progress: 10,
  //   },
  //   {
  //     id: 3,
  //     title: "Corn Farm",
  //     status: "Active",
  //     timeToMaturity: "Starting 20/08/2026",
  //     progress: 5,
  //   },
  //   {
  //     id: 4,
  //     title: "Soybean Farm",
  //     status: "Active",
  //     timeToMaturity: "Starting 25/09/2026",
  //     progress: 15,
  //   },
  //   // Rejected farm
  //   {
  //     id: 5,
  //     title: "Barley Farm",
  //     status: "Rejected",
  //     timeToMaturity: "1 Day to maturity",
  //     progress: 90,
  //   },
  //   // Completed farms
  //   {
  //     id: 6,
  //     title: "Tomato Farm",
  //     status: "Completed",
  //     timeToMaturity: "5 Weeks to maturity",
  //     progress: 100,
  //   },
  //   {
  //     id: 7,
  //     title: "Potato Farm",
  //     status: "Completed",
  //     timeToMaturity: "3 Weeks to maturity",
  //     progress: 100,
  //   },
  //   {
  //     id: 8,
  //     title: "Carrot Farm",
  //     status: "Completed",
  //     timeToMaturity: "4 Weeks to maturity",
  //     progress: 100,
  //   },
  //   // Under-Review farms
  //   {
  //     id: 9,
  //     title: "Cucumber Farm",
  //     status: "Under-Review",
  //     timeToMaturity: "7 Months to maturity",
  //     progress: 80,
  //   },
  //   {
  //     id: 10,
  //     title: "Pepper Farm",
  //     status: "Under-Review",
  //     timeToMaturity: "6 Months to maturity",
  //     progress: 75,
  //   },
];

export default function OverviewPage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<TabItem>(tabs[0]);
  const router = useRouter();

  return (
    <div className="">
      <AppHeader
        title="Overview"
        bg={
          user?.accountType === "farmer"
            ? "bg-[#f7f7f7] lg:bg-white"
            : "bg-white"
        }
      />
      <div className={`max-w-[1400px]`}>
        {user?.accountType === "farmer" ? (
          <div className="bg-[#f7f7f7] lg:bg-white">
            <section className="px-4 sm:px-6 lg:px-8 pt-20 lg:pt-2 mb-8">
              <p className="font-bold text-[24px]">Hi, {user.firstName} 👋</p>
              <p className="text-[#828282]">Good morning</p>
            </section>

            <section className="bg-white px-4 sm:px-6 lg:px-8 py-5  rounded-t-[10px]">
              <div className="flex items-center justify-between mb-8">
                <p className="font-medium text-[20px]">Overview</p>
                <button className="flex items-center justify-between px-3 h-[38px] py-1.5 border rounded-full text-sm">
                  <span>Last 30 days</span>
                  <ArrowDown2 size="16" color="#000" variant="Outline" />
                </button>
              </div>

              <div className="bg-[#f5f8f7] rounded-[37px] border border-[#F1F1F1] px-4 py-4">
                <section className="bg-white p-4 px-8 rounded-[28px] h-[118px] flex flex-col justify-center mb-5">
                  <div className="flex items-center gap-2">
                    <div>
                      <svg
                        width="12"
                        height="13"
                        viewBox="0 0 12 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_2627_17167)">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.34303 6.94537C7.48479 6.74781 7.65767 6.57616 7.85449 6.43756C8.20493 6.18951 8.62545 6.04693 9.12364 5.95611C9.1622 5.94931 9.20179 5.95855 9.23375 5.98179C9.2657 6.00504 9.28742 6.04041 9.29413 6.08014C9.29753 6.0997 9.29713 6.11977 9.29296 6.13918C9.28878 6.15859 9.28092 6.17695 9.26982 6.19321C9.25873 6.20946 9.24461 6.22329 9.2283 6.23388C9.21199 6.24448 9.1938 6.25164 9.17479 6.25494C8.71543 6.33893 8.33184 6.46686 8.01929 6.68756C7.75305 6.8791 7.53672 7.13536 7.38944 7.43365C8.58473 7.5567 9.29223 7.43365 9.80653 7.05084C10.3208 6.66803 10.6589 6.00689 11.1098 5.05572C10.9781 5.06451 10.8408 5.07135 10.7006 5.07721C9.79421 5.12115 8.80635 5.16803 8.18219 5.73053C8.01138 5.88727 7.85593 6.06096 7.7181 6.24908C7.58049 6.4333 7.45397 6.62604 7.33925 6.82623V6.94537H7.34303ZM6.91967 3.82037C6.86663 3.82037 6.81359 3.8106 6.76149 3.80377C6.7094 3.79693 6.645 3.78619 6.59101 3.77642C6.53804 3.76713 6.48557 3.75507 6.43379 3.74029V3.27154C6.50009 3.2774 6.57112 3.28228 6.64784 3.28619C6.72456 3.2901 6.80222 3.29303 6.88083 3.29498H7.10057C7.15428 3.29596 7.20793 3.29105 7.26063 3.28033C7.29596 3.27395 7.32881 3.25735 7.35535 3.23248C7.36718 3.21892 7.37626 3.20306 7.38206 3.18583C7.38786 3.1686 7.39026 3.15035 7.38911 3.13215C7.38796 3.11395 7.38329 3.09617 7.37538 3.07986C7.36747 3.06354 7.35647 3.04903 7.34303 3.03717C7.31171 3.01461 7.27421 3.00297 7.23601 3.00396H7.08257C6.89952 3.01736 6.71783 2.963 6.57017 2.85064C6.31824 2.62994 6.33623 1.98834 6.58817 1.77642C6.68432 1.69869 6.79867 1.6485 6.91967 1.63092V1.38873H7.33356V1.62115L7.39891 1.62701C7.47942 1.6358 7.55519 1.64752 7.62623 1.66021C7.69726 1.67291 7.76072 1.68658 7.81565 1.70025V2.16021C7.72662 2.1524 7.62623 2.14557 7.51447 2.14068C7.4027 2.1358 7.30136 2.13287 7.21044 2.13287C7.16158 2.13238 7.11277 2.1363 7.06458 2.14459C7.02901 2.15082 6.99604 2.16781 6.96986 2.19342C6.94446 2.22455 6.93149 2.26448 6.9336 2.30511C6.93571 2.34574 6.95274 2.38401 6.98123 2.41217C7.0229 2.44148 7.07301 2.45526 7.1233 2.45123H7.31273C7.43058 2.44707 7.54745 2.47467 7.6518 2.53131C7.7392 2.58034 7.81044 2.65515 7.85638 2.74615C7.96151 2.95611 7.95109 3.37115 7.82797 3.56158C7.76399 3.66163 7.66657 3.73392 7.55425 3.76471C7.48199 3.78519 7.40815 3.79924 7.33356 3.8067V4.06939H6.91967V3.81353V3.82037ZM0.762356 8.09771H2.22757C2.29707 8.09823 2.36356 8.12706 2.41253 8.17792C2.4615 8.22878 2.48898 8.29753 2.48898 8.3692V11.4776C2.48873 11.5493 2.46101 11.6179 2.41186 11.6686C2.36271 11.7193 2.29613 11.7478 2.22662 11.7481H0.762356C0.692852 11.7478 0.626265 11.7193 0.577118 11.6686C0.527971 11.6179 0.50025 11.5493 0.5 11.4776L0.5 8.3692C0.5 8.29737 0.52761 8.22846 0.576784 8.17758C0.625959 8.12669 0.692688 8.09797 0.762356 8.09771ZM2.89056 11.4376V8.39068H4.22128C4.78956 8.49518 5.34932 8.81061 5.91381 9.17193H6.94713C7.41502 9.20123 7.65938 9.69049 7.2057 10.0118C6.84295 10.2852 6.36465 10.2696 5.87971 10.2247C5.54159 10.2071 5.52643 10.6758 5.87971 10.6778C6.00189 10.6876 6.13449 10.6573 6.25099 10.6573C6.86284 10.6573 7.36671 10.5362 7.67169 10.0381L7.82607 9.6651L9.36421 8.87897C10.1333 8.61822 10.6798 9.44732 10.1134 10.0245C9.0415 10.8321 7.89459 11.5282 6.68951 12.1026C5.83709 12.6348 4.9932 12.6172 4.14457 12.1026L2.89056 11.4376ZM7.16024 0.500057C7.73596 0.49695 8.2904 0.724278 8.70684 1.13418C9.12327 1.54409 9.36922 2.1046 9.39291 2.69772C9.4166 3.29084 9.21618 3.8703 8.83383 4.31412C8.45149 4.75794 7.91706 5.0315 7.34303 5.07721V6.26178C7.39039 6.19244 7.43775 6.12603 7.4851 6.06646C7.63473 5.86295 7.80281 5.6746 7.98708 5.50396C8.68417 4.87213 9.7317 4.82037 10.6874 4.77643C10.908 4.76568 11.124 4.75494 11.3409 4.73639C11.3669 4.73458 11.393 4.73962 11.4167 4.75103C11.4517 4.76852 11.4786 4.79964 11.4913 4.83755C11.5041 4.87546 11.5018 4.91705 11.4848 4.95318C10.9592 6.07232 10.5879 6.83893 9.9789 7.29693C9.40305 7.72662 8.62829 7.86725 7.34303 7.73346V7.96393C8.08653 8.03912 8.7751 8.13482 9.15869 8.45221L7.77777 9.16217C7.72632 9.07875 7.66238 9.00426 7.58834 8.94147C7.42579 8.80626 7.22805 8.72369 7.02006 8.70416C6.99714 8.70104 6.97404 8.69941 6.95092 8.69928H6.04357C5.7291 8.49327 5.39943 8.31303 5.0576 8.16021C5.53875 7.98932 6.17711 7.94537 6.81927 7.93951V7.31646C6.45583 7.3569 6.08832 7.33044 5.73386 7.23834C5.51946 7.17681 5.3197 7.07028 5.1471 6.92542C4.97451 6.78057 4.83279 6.60051 4.73084 6.39654C4.72963 6.39342 4.72804 6.39047 4.72611 6.38775L4.31221 5.50885C4.3019 5.48699 4.29587 5.46325 4.29448 5.43899C4.29309 5.41472 4.29636 5.39042 4.3041 5.36746C4.31185 5.3445 4.32391 5.32335 4.33961 5.30521C4.3553 5.28708 4.37432 5.27232 4.39556 5.26178C4.42311 5.24754 4.45384 5.24114 4.48459 5.24322L5.87119 5.33111H5.89392C6.15249 5.36432 6.43663 5.40143 6.6933 5.63482C6.7358 5.6736 6.77626 5.71467 6.81453 5.75787C6.81453 5.48248 6.83158 5.29791 6.83442 5.06353C6.27568 4.98241 5.76774 4.68532 5.41351 4.23246C5.05928 3.77961 4.88525 3.20485 4.92667 2.62463C4.9681 2.04441 5.22188 1.50212 5.63661 1.10763C6.05134 0.713143 6.596 0.49595 7.16024 0.500057ZM7.16024 0.869198C7.59195 0.868972 8.01039 1.02311 8.34423 1.30534C8.67807 1.58758 8.90666 1.98044 8.99105 2.41699C9.07543 2.85353 9.01039 3.30674 8.807 3.69937C8.60361 4.09201 8.27447 4.39978 7.87565 4.57022C7.47684 4.74067 7.03305 4.76325 6.6199 4.63412C6.20675 4.50499 5.84981 4.23213 5.60992 3.86205C5.37003 3.49197 5.26202 3.04757 5.30431 2.60458C5.3466 2.16159 5.53656 1.74743 5.84183 1.43267C6.01479 1.25389 6.22029 1.11208 6.44654 1.01538C6.67278 0.918685 6.91532 0.869007 7.16024 0.869198ZM6.81927 6.94537V6.91607C6.77667 6.86137 6.72658 6.81334 6.67057 6.7735C6.5331 6.68384 6.37994 6.6228 6.21973 6.59381C6.19885 6.59205 6.17858 6.58571 6.16028 6.5752C6.14197 6.5647 6.12606 6.55027 6.11361 6.5329C6.10116 6.51553 6.09246 6.49561 6.08809 6.47449C6.08373 6.45336 6.0838 6.43152 6.0883 6.41042C6.0928 6.38932 6.10163 6.36947 6.11419 6.35218C6.12675 6.33489 6.14276 6.32058 6.16113 6.3102C6.1795 6.29982 6.19981 6.29361 6.2207 6.292C6.24159 6.29038 6.26258 6.2934 6.28225 6.30084C6.4726 6.33652 6.65476 6.40874 6.81927 6.51373V6.47467C6.81264 6.45514 6.80506 6.43463 6.79749 6.41607C6.72452 6.22398 6.60906 6.0521 6.46031 5.91412C6.28509 5.75494 6.05967 5.72564 5.85319 5.69928H5.84846L4.76873 5.63092L5.05287 6.22564C5.13286 6.3852 5.24386 6.52606 5.37894 6.63946C5.51402 6.75287 5.6703 6.83639 5.83804 6.88482C6.15904 6.96488 6.4913 6.98539 6.81927 6.94537Z"
                            fill="#5B5B5B"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2627_17167">
                            <rect
                              width="11"
                              height="12"
                              fill="white"
                              transform="translate(0.5 0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <p className="text-[#828282]">Total Amount Raised</p>
                  </div>

                  <p className="font-bold text-[32px]">
                    {NGNCurrency.format(0)}
                  </p>
                </section>

                <section className="bg-white p-4 px-8 rounded-[28px] h-[118px] flex flex-col justify-center">
                  <div className="flex items-center gap-2">
                    <div>
                      <svg
                        width="12"
                        height="13"
                        viewBox="0 0 12 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_2627_17167)">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.34303 6.94537C7.48479 6.74781 7.65767 6.57616 7.85449 6.43756C8.20493 6.18951 8.62545 6.04693 9.12364 5.95611C9.1622 5.94931 9.20179 5.95855 9.23375 5.98179C9.2657 6.00504 9.28742 6.04041 9.29413 6.08014C9.29753 6.0997 9.29713 6.11977 9.29296 6.13918C9.28878 6.15859 9.28092 6.17695 9.26982 6.19321C9.25873 6.20946 9.24461 6.22329 9.2283 6.23388C9.21199 6.24448 9.1938 6.25164 9.17479 6.25494C8.71543 6.33893 8.33184 6.46686 8.01929 6.68756C7.75305 6.8791 7.53672 7.13536 7.38944 7.43365C8.58473 7.5567 9.29223 7.43365 9.80653 7.05084C10.3208 6.66803 10.6589 6.00689 11.1098 5.05572C10.9781 5.06451 10.8408 5.07135 10.7006 5.07721C9.79421 5.12115 8.80635 5.16803 8.18219 5.73053C8.01138 5.88727 7.85593 6.06096 7.7181 6.24908C7.58049 6.4333 7.45397 6.62604 7.33925 6.82623V6.94537H7.34303ZM6.91967 3.82037C6.86663 3.82037 6.81359 3.8106 6.76149 3.80377C6.7094 3.79693 6.645 3.78619 6.59101 3.77642C6.53804 3.76713 6.48557 3.75507 6.43379 3.74029V3.27154C6.50009 3.2774 6.57112 3.28228 6.64784 3.28619C6.72456 3.2901 6.80222 3.29303 6.88083 3.29498H7.10057C7.15428 3.29596 7.20793 3.29105 7.26063 3.28033C7.29596 3.27395 7.32881 3.25735 7.35535 3.23248C7.36718 3.21892 7.37626 3.20306 7.38206 3.18583C7.38786 3.1686 7.39026 3.15035 7.38911 3.13215C7.38796 3.11395 7.38329 3.09617 7.37538 3.07986C7.36747 3.06354 7.35647 3.04903 7.34303 3.03717C7.31171 3.01461 7.27421 3.00297 7.23601 3.00396H7.08257C6.89952 3.01736 6.71783 2.963 6.57017 2.85064C6.31824 2.62994 6.33623 1.98834 6.58817 1.77642C6.68432 1.69869 6.79867 1.6485 6.91967 1.63092V1.38873H7.33356V1.62115L7.39891 1.62701C7.47942 1.6358 7.55519 1.64752 7.62623 1.66021C7.69726 1.67291 7.76072 1.68658 7.81565 1.70025V2.16021C7.72662 2.1524 7.62623 2.14557 7.51447 2.14068C7.4027 2.1358 7.30136 2.13287 7.21044 2.13287C7.16158 2.13238 7.11277 2.1363 7.06458 2.14459C7.02901 2.15082 6.99604 2.16781 6.96986 2.19342C6.94446 2.22455 6.93149 2.26448 6.9336 2.30511C6.93571 2.34574 6.95274 2.38401 6.98123 2.41217C7.0229 2.44148 7.07301 2.45526 7.1233 2.45123H7.31273C7.43058 2.44707 7.54745 2.47467 7.6518 2.53131C7.7392 2.58034 7.81044 2.65515 7.85638 2.74615C7.96151 2.95611 7.95109 3.37115 7.82797 3.56158C7.76399 3.66163 7.66657 3.73392 7.55425 3.76471C7.48199 3.78519 7.40815 3.79924 7.33356 3.8067V4.06939H6.91967V3.81353V3.82037ZM0.762356 8.09771H2.22757C2.29707 8.09823 2.36356 8.12706 2.41253 8.17792C2.4615 8.22878 2.48898 8.29753 2.48898 8.3692V11.4776C2.48873 11.5493 2.46101 11.6179 2.41186 11.6686C2.36271 11.7193 2.29613 11.7478 2.22662 11.7481H0.762356C0.692852 11.7478 0.626265 11.7193 0.577118 11.6686C0.527971 11.6179 0.50025 11.5493 0.5 11.4776L0.5 8.3692C0.5 8.29737 0.52761 8.22846 0.576784 8.17758C0.625959 8.12669 0.692688 8.09797 0.762356 8.09771ZM2.89056 11.4376V8.39068H4.22128C4.78956 8.49518 5.34932 8.81061 5.91381 9.17193H6.94713C7.41502 9.20123 7.65938 9.69049 7.2057 10.0118C6.84295 10.2852 6.36465 10.2696 5.87971 10.2247C5.54159 10.2071 5.52643 10.6758 5.87971 10.6778C6.00189 10.6876 6.13449 10.6573 6.25099 10.6573C6.86284 10.6573 7.36671 10.5362 7.67169 10.0381L7.82607 9.6651L9.36421 8.87897C10.1333 8.61822 10.6798 9.44732 10.1134 10.0245C9.0415 10.8321 7.89459 11.5282 6.68951 12.1026C5.83709 12.6348 4.9932 12.6172 4.14457 12.1026L2.89056 11.4376ZM7.16024 0.500057C7.73596 0.49695 8.2904 0.724278 8.70684 1.13418C9.12327 1.54409 9.36922 2.1046 9.39291 2.69772C9.4166 3.29084 9.21618 3.8703 8.83383 4.31412C8.45149 4.75794 7.91706 5.0315 7.34303 5.07721V6.26178C7.39039 6.19244 7.43775 6.12603 7.4851 6.06646C7.63473 5.86295 7.80281 5.6746 7.98708 5.50396C8.68417 4.87213 9.7317 4.82037 10.6874 4.77643C10.908 4.76568 11.124 4.75494 11.3409 4.73639C11.3669 4.73458 11.393 4.73962 11.4167 4.75103C11.4517 4.76852 11.4786 4.79964 11.4913 4.83755C11.5041 4.87546 11.5018 4.91705 11.4848 4.95318C10.9592 6.07232 10.5879 6.83893 9.9789 7.29693C9.40305 7.72662 8.62829 7.86725 7.34303 7.73346V7.96393C8.08653 8.03912 8.7751 8.13482 9.15869 8.45221L7.77777 9.16217C7.72632 9.07875 7.66238 9.00426 7.58834 8.94147C7.42579 8.80626 7.22805 8.72369 7.02006 8.70416C6.99714 8.70104 6.97404 8.69941 6.95092 8.69928H6.04357C5.7291 8.49327 5.39943 8.31303 5.0576 8.16021C5.53875 7.98932 6.17711 7.94537 6.81927 7.93951V7.31646C6.45583 7.3569 6.08832 7.33044 5.73386 7.23834C5.51946 7.17681 5.3197 7.07028 5.1471 6.92542C4.97451 6.78057 4.83279 6.60051 4.73084 6.39654C4.72963 6.39342 4.72804 6.39047 4.72611 6.38775L4.31221 5.50885C4.3019 5.48699 4.29587 5.46325 4.29448 5.43899C4.29309 5.41472 4.29636 5.39042 4.3041 5.36746C4.31185 5.3445 4.32391 5.32335 4.33961 5.30521C4.3553 5.28708 4.37432 5.27232 4.39556 5.26178C4.42311 5.24754 4.45384 5.24114 4.48459 5.24322L5.87119 5.33111H5.89392C6.15249 5.36432 6.43663 5.40143 6.6933 5.63482C6.7358 5.6736 6.77626 5.71467 6.81453 5.75787C6.81453 5.48248 6.83158 5.29791 6.83442 5.06353C6.27568 4.98241 5.76774 4.68532 5.41351 4.23246C5.05928 3.77961 4.88525 3.20485 4.92667 2.62463C4.9681 2.04441 5.22188 1.50212 5.63661 1.10763C6.05134 0.713143 6.596 0.49595 7.16024 0.500057ZM7.16024 0.869198C7.59195 0.868972 8.01039 1.02311 8.34423 1.30534C8.67807 1.58758 8.90666 1.98044 8.99105 2.41699C9.07543 2.85353 9.01039 3.30674 8.807 3.69937C8.60361 4.09201 8.27447 4.39978 7.87565 4.57022C7.47684 4.74067 7.03305 4.76325 6.6199 4.63412C6.20675 4.50499 5.84981 4.23213 5.60992 3.86205C5.37003 3.49197 5.26202 3.04757 5.30431 2.60458C5.3466 2.16159 5.53656 1.74743 5.84183 1.43267C6.01479 1.25389 6.22029 1.11208 6.44654 1.01538C6.67278 0.918685 6.91532 0.869007 7.16024 0.869198ZM6.81927 6.94537V6.91607C6.77667 6.86137 6.72658 6.81334 6.67057 6.7735C6.5331 6.68384 6.37994 6.6228 6.21973 6.59381C6.19885 6.59205 6.17858 6.58571 6.16028 6.5752C6.14197 6.5647 6.12606 6.55027 6.11361 6.5329C6.10116 6.51553 6.09246 6.49561 6.08809 6.47449C6.08373 6.45336 6.0838 6.43152 6.0883 6.41042C6.0928 6.38932 6.10163 6.36947 6.11419 6.35218C6.12675 6.33489 6.14276 6.32058 6.16113 6.3102C6.1795 6.29982 6.19981 6.29361 6.2207 6.292C6.24159 6.29038 6.26258 6.2934 6.28225 6.30084C6.4726 6.33652 6.65476 6.40874 6.81927 6.51373V6.47467C6.81264 6.45514 6.80506 6.43463 6.79749 6.41607C6.72452 6.22398 6.60906 6.0521 6.46031 5.91412C6.28509 5.75494 6.05967 5.72564 5.85319 5.69928H5.84846L4.76873 5.63092L5.05287 6.22564C5.13286 6.3852 5.24386 6.52606 5.37894 6.63946C5.51402 6.75287 5.6703 6.83639 5.83804 6.88482C6.15904 6.96488 6.4913 6.98539 6.81927 6.94537Z"
                            fill="#5B5B5B"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2627_17167">
                            <rect
                              width="11"
                              height="12"
                              fill="white"
                              transform="translate(0.5 0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <p className="text-[#828282]">Total Amount Paid to You</p>
                  </div>

                  <p className="font-bold text-[32px]">
                    {NGNCurrency.format(0)}
                  </p>
                </section>
              </div>
            </section>

            <section className="bg-white flex justify-center">
              <Link
                href="/projects/new"
                className="border h-[52px] min-w-[150px] px-4  rounded-full  bg-primary text-white font-bold flex items-center gap-3 justify-center text-sm"
              >
                <Icon icon="heroicons-solid:plus" width="24" height="24" /> Need
                Funding?
              </Link>
            </section>

            <section className="bg-white pt-8 px-4 sm:px-6 lg:px-8">
              <div className="  mb-5 flex  justify-between items-center">
                <p className="font-semibold text-[20px] mb-0">Projects</p>
                <Link
                  href="/projects"
                  className="text-[#00A859] text-[14px] font-medium flex gap-1 items-center"
                >
                  See more{" "}
                  <ArrowRight2 size="15" color="#00A859" variant="Linear" />
                </Link>
              </div>

              <div className="mb-6 w-auto inline-flex gap-5">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    className={`h-[28px] text-[14px] font-medium ${
                      activeTab.key === tab.key
                        ? "text-[#008647] font-semibold"
                        : "text-[#828282]"
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.title}

                    <div
                      className={`h-[3px] rounded-[8px] w-full mt-1  ${
                        activeTab.key === tab.key
                          ? "bg-[#008647]"
                          : "bg-transparent"
                      } `}
                    />
                  </button>
                ))}
              </div>
              <div className="flex flex-col gap-6">
                {(() => {
                  const filteredFarms = farmData.filter((farm: Farm) => {
                    const statusMap: Record<TabKey, FarmStatus> = {
                      active: "Active",
                      completed: "Completed",
                      "under-review": "Under-Review",
                      rejected: "Rejected",
                    };

                    return farm.status === statusMap[activeTab.key as TabKey];
                  });

                  if (filteredFarms.length === 0) {
                    return (
                      <div className="flex flex-col items-center justify-center py-12 text-center">
                        <div className="mb-4">
                          <Image
                            src={"/file-icon.png"}
                            width={100}
                            height={100}
                            alt="file-icon"
                            className="w-[220px] h-[175px]"
                          />
                        </div>
                        <p className="text-gray-500 mb-4">
                          {activeTab.title === "Under Review" ? (
                            <span>
                              You don&apos;t have any projects{" "}
                              {activeTab.title.toLowerCase()} yet.
                            </span>
                          ) : (
                            <span>
                              You don&apos;t have any{" "}
                              {activeTab.title.toLowerCase()} projects yet.
                            </span>
                          )}
                        </p>
                      </div>
                    );
                  }

                  return filteredFarms.map((farm: Farm) => (
                    <FarmCard key={farm.id} farm={farm} />
                  ));
                })()}
              </div>
            </section>
          </div>
        ) : null}

        {user?.accountType === "farmer_business" ? (
          <div className="px-4 sm:px-6 lg:px-8 pt-28 lg:pt-2">
            <section className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
              <StatCard title="Amount Raised" value={NGNCurrency.format(0)} />
              <StatCard
                title="Amount Paid to you"
                value={NGNCurrency.format(0)}
              />
              <StatCard title="Total Active Investment" value="0" />
              <StatCard title="Completed Investment" value="0" />
            </section>

            <section className="w-full lg:w-[240px] mb-5">
              <AppButton
                onClick={() => router.push("/projects/new")}
                height="h-[44px]"
              >
                Apply For Funding
              </AppButton>
            </section>

            <section className="mb-4">
              <GraySection title="Active Projects">
                <div className="flex flex-col justify-center items-center mb-3 mt-8">
                  <Image
                    src="/active-project.png"
                    alt=""
                    width="80"
                    height="111"
                    className="w-[80px] h-[111px] "
                  />
                  <p className="font-bold mb-3">No approved projects yet</p>

                  <button
                    onClick={() => router.push("/projects/new")}
                    className="mt-1 border h-[44px] min-w-[100px] px-5 rounded-[12px] bg-primary text-white  flex items-center gap-1 justify-center text-sm font-bold"
                  >
                    Apply For Funding
                  </button>
                </div>
              </GraySection>
            </section>

            <section className="px-3 py-6  lg:px-6 lg:py-5">
              <h2 className="text-lg font-medium text-black">
                Pending Payouts
              </h2>

              <div className="flex flex-col justify-center items-center mb-3 mt-8">
                <Image
                  src="/pending-payout.png"
                  alt=""
                  width="160"
                  height="156"
                  className="w-[160px] h-[156px] "
                />
                <p className="font-bold mb-3 mt-5">No pending payouts yet</p>
              </div>
            </section>
          </div>
        ) : null}
      </div>
    </div>
  );
}

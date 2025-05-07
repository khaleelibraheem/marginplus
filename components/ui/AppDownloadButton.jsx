import Image from "next/image";
import { Roboto } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function AppDownloadButton({ platform, ImgSrc, color }) {
  return (
    <Link href="https://www.marginplus.ng/">
      <button
        className={`border-[1.5px] rounded-lg flex gap-2 px-[8px] py-[5px] cursor-pointer w-[130px] ${roboto.className}`}
        style={{ borderColor: color }}
      >
        <div>
          <Image src={ImgSrc} width={20} height={20} alt={`${platform}-icon`} />
        </div>
        <div
          className="flex flex-col justify-start items-start"
          style={{ color: color }}
        >
          <p className="text-[8px] m-0">GET IT ON</p>
          <p className="m-0 text-[13px] font-semibold mt-[-5]">{platform}</p>
        </div>
      </button>
    </Link>
  );
}

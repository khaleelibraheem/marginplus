import Image from "next/image";
import Link from "next/link";

export default function AppDownloadButton({ url }) {
  return (
    <Link href="https://www.marginplus.ng/">
      <button className="cursor-pointer w-[152px] h-[47px]">
        <Image
          src={url}
          width={100}
          height={100}
          alt="button"
          className="w-full"
          priority
        />
      </button>
    </Link>
  );
}

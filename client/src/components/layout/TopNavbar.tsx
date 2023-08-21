"use client";

import Link from "next/link";
import smallLogo from "../../../public/tweeter-small.svg";
import bigLogo from "../../../public/tweeter.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import UserInfo from "./UserInfo";

const TopNavbar = ({ options }: TopNavbarProps) => {
  const pathname = usePathname();

  return (
    <header className="bg-white h-[60px] flex flex-row justify-between items-stretch px-5">
      <Image src={smallLogo} alt="Tweeter" className="md:hidden" />
      <Image src={bigLogo} alt="Tweeter" className="hidden md:block" />

      <nav className="flex flex-row items-stretch space-x-12 lg:space-x-20">
        {options.map(({ url, label }) => (
          <Link key={url} href={url} className={`flex-1 flex flex-row items-center hover:bg-gray-100 ${pathname === url ? "border-b-[#2F80ED] border-b-2" : ""}`}>
            <span className="hidden md:block text-[#828282] font-sans font-normal">{label}</span>
          </Link>
        ))}
      </nav>
      
      <div className="flex flex-col items-center justify-center">
        <UserInfo />
      </div>
    </header>
  );
};

export default TopNavbar;
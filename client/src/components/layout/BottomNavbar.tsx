"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from "next/navigation";
import { BottomNavbarProps } from "@/types";

const BottomNavbar = ({ options }: BottomNavbarProps) => {
  const pathname = usePathname();

  return (
    <nav className="bg-white h-[60px] flex flex-row items-stretch px-5 fixed bottom-0 left-0 right-0 shadow-[0px_2px_2px_0px_#0000000D] md:hidden">
      {options.map(({ url, icon }) => (
        <Link key={url} href={url} className={`flex-1 flex flex-col items-center justify-center hover:bg-gray-100 ${pathname === url ? "border-b-[#2F80ED] border-b-2" : ""}`}>
          <FontAwesomeIcon icon={icon} className={`h-5 w-5 ${pathname === url ? "text-[#2F80ED]" : "text-[#828282]"}`} />
        </Link>
      ))}
    </nav>
  );
};

export default BottomNavbar;
import { UserPopupLinkProps } from "@/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const UserPopupLink = ({ href, label, icon }: UserPopupLinkProps) => {
  return (
    <Link className="flex items-center space-x-4 p-3 rounded-md hover:bg-[#F2F2F2]" href={href}>
      <FontAwesomeIcon icon={icon} className="w-[25px] h-[25px] text-[#4F4F4F]" />
      <span className="text-[#4F4F4F] font-sans text-sm">{label}</span>
    </Link>
  );
};

export default UserPopupLink;
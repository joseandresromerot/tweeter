"use client";

import { WhoCanReplyPopupButtonProps } from "@/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WhoCanReplyPopupButton = ({ label, icon, onClick }: WhoCanReplyPopupButtonProps) => {
  return (
    <button className="flex items-center space-x-4 p-3 rounded-md hover:bg-[#F2F2F2] w-full" onClick={onClick}>
      <FontAwesomeIcon icon={icon} className="w-[25px] h-[25px] text-[#4F4F4F]" />
      <span className="text-[#4F4F4F] font-sans text-sm">{label}</span>
    </button>
  );
};

export default WhoCanReplyPopupButton;
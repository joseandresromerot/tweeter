"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const LogoutButton = () => {
  return (
    <button className="flex items-center space-x-4 p-3 rounded-md hover:bg-[#F2F2F2] w-full" onClick={() => {}}>
      <FontAwesomeIcon icon={faRightFromBracket} className="w-[25px] h-[25px] text-[#EB5757]" />
      <span className="text-[#EB5757] font-sans text-sm">{"Logout"}</span>
    </button>
  );
};

export default LogoutButton;
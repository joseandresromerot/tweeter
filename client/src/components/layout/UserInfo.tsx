"use client";

import { useContext } from "react";
import Avatar, { AvatarSize } from "../Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import UserPopup from "./UserPopup";
import { ApplicationContext } from "@/context/AppContext";
import LogoutButton from "./LogoutButton";

const UserInfo = () => {
  const { userPopupVisible, toggleUserPopup } = useContext(ApplicationContext);

  return (
    <div className="flex flex-row items-center space-x-2 relative">
      <Avatar size={AvatarSize.SM} onClick={toggleUserPopup} />
      <h3 className="text-[#333333] font-sans font-bold text-[15px] hidden md:block">{"Xanthe Neal"}</h3>
      <button className="w-[35px] h-[35px] hover:bg-gray-100 rounded-md hidden md:block" onClick={toggleUserPopup}>
        <FontAwesomeIcon icon={faCaretDown} className="text-black" />
      </button>

      {userPopupVisible &&
        <UserPopup>
          <LogoutButton />
        </UserPopup>
      }
    </div>
  );
};

export default UserInfo;
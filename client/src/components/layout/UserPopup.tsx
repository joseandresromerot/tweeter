import LogoutButton from "./LogoutButton";
import UserPopupLink from "./UserPopupLink";
import { faCircleUser, faUserGroup, faGear } from "@fortawesome/free-solid-svg-icons";

const UserPopup = () => {
  return (
    <div className="absolute bg-white w-[200px] right-1 top-12 p-3 rounded-md shadow-md border border-[#E0E0E0]">

      <h3 className="text-[#333333] font-sans font-bold text-[15px] text-center my-3 md:hidden">{"Xanthe Neal"}</h3>

      <div className="h-[1px] bg-[#E0E0E0] my-2 md:hidden"></div>

      <UserPopupLink href={"/profile"} label={"My Profile"} icon={faCircleUser} />
      <UserPopupLink href={"/group-chat"} label={"Group Chat"} icon={faUserGroup} />
      <UserPopupLink href={"/settings"} label={"Settings"} icon={faGear} />

      <div className="h-[1px] bg-[#E0E0E0] my-2"></div>

      <LogoutButton />
    </div>
  );
};

export default UserPopup;
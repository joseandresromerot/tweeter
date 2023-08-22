import UserPopupLink from "./UserPopupLink";
import { faCircleUser, faUserGroup, faGear } from "@fortawesome/free-solid-svg-icons";

const UserPopup = ({ children }: UserPopupProps) => {
  return (
    <div className="absolute bg-white w-[200px] right-0 top-12 p-3 rounded-md shadow-md border border-[#E0E0E0]">
      <UserPopupLink href={"/profile"} label={"My Profile"} icon={faCircleUser} />
      <UserPopupLink href={"/group-chat"} label={"Group Chat"} icon={faUserGroup} />
      <UserPopupLink href={"/settings"} label={"Settings"} icon={faGear} />

      <div className="h-[1px] bg-[#E0E0E0] my-2"></div>

      {children}
    </div>
  );
};

export default UserPopup;
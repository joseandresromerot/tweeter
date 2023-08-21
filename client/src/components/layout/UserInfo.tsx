import Avatar, { AvatarSize } from "../Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"

const UserInfo = () => {
  return (
    <div className="flex flex-row items-center space-x-2">
      <Avatar size={AvatarSize.SM} />
      <h3 className="text-[#333333] font-sans font-bold text-[15px] hidden md:block">{"Xanthe Neal"}</h3>
      <button className="w-[35px] h-[35px] hover:bg-gray-100 rounded-md hidden md:block">
        <FontAwesomeIcon icon={faCaretDown} className="text-black" />
      </button>
    </div>
  );
};

export default UserInfo;
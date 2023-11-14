import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FollowButtonProps } from "@/types";

const FollowButton = ({ className }: FollowButtonProps) => {
  return (
    <button className={`flex items-center bg-[#2F80ED] rounded-md space-x-1 text-[12px] py-1 px-3 font-sans ${className ?? ""}`}>
      <FontAwesomeIcon icon={faUserPlus} className="text-[12px]" />
      <span>{"Follow"}</span>
    </button>
  );
};

export default FollowButton;
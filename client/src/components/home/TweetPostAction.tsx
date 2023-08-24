import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TweetPostActionProps } from "@/types";

const TweetPostAction = ({ label, activeLabel, active, activeColor, icon, onClick }: TweetPostActionProps) => {

  return (
    <button className="flex flex-col items-center justify-center hover:bg-[#F2F2F2] flex-1 rounded-lg" onClick={onClick}>
      <div className="flex items-center">
        <FontAwesomeIcon icon={icon} className="w-[20px] h-[20px]" style={{ color: !active ? "#4F4F4F" : activeColor }} />
        <span className={`font-sans hidden ml-3 md:block`} style={{ color: !active ? "#4F4F4F" : activeColor }}>{active ? activeLabel : label}</span>
      </div>
    </button>
  );
};

export default TweetPostAction;
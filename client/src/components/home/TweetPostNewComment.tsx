import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar, { AvatarSize } from "../Avatar";
import { faImage } from "@fortawesome/free-regular-svg-icons";

const TweetPostNewComment = () => {
  return (
    <div className="py-2 flex items-center space-x-3">
      <Avatar size={AvatarSize.SM} />
      <div className="flex items-stretch flex-1 bg-[#FAFAFA] h-[40px] py-1 px-3 rounded-lg">
        <input placeholder="Tweet your reply" className="flex-1 bg-transparent focus:outline-none bottom-0 text-black font-sans placeholder:text-[#BDBDBD]" />
        <button className="flex flex-col items-center justify-center px-2">
          <FontAwesomeIcon icon={faImage} className="text-[#BDBDBD]" />
        </button>
      </div>
    </div>
  );
};

export default TweetPostNewComment;
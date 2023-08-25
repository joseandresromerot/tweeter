import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar, { AvatarSize } from "../Avatar";
import { faHeart, faImage } from "@fortawesome/free-regular-svg-icons";
import { TweetPostCommentProps } from "@/types";
import { format } from "date-fns";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { roundValue } from "@/utils";

const TweetPostComment = ({ comment }: TweetPostCommentProps) => {
  const { user, datetime, message = "", likedByMe, numberOfLikes } = comment;
  const { fullname, avatarUrl } = user ?? {};
  const date = new Date((datetime as number) * 1000);
  const formattedDate = format(date, "dd MMMM 'at' HH:mm");

  return (
    <div className="flex space-x-3 mb-4">
      <Avatar size={AvatarSize.SM} url={avatarUrl} />
      <div className="flex flex-col items-stretch flex-1">
        <div className="flex flex-col items-stretch p-3 bg-[#FAFAFA] rounded-lg space-y-2">
          <div className="flex items-center space-x-3">
            <span className="font-sans font-bold text-black text-[16px]">{fullname}</span>
            <span className="font-sans text-[12px] text-[#BDBDBD]">{formattedDate}</span>
          </div>
          <p className="font-sans text-[#4F4F4F]">{message}</p>
        </div>
        <div className="flex items-center space-x-2 mt-1">
          <button className="flex items-center space-x-1 hover:bg-[#F2F2F2] rounded-md px-1" style={{ color: likedByMe ? "#EB5757" : "#BDBDBD" }}>
            <FontAwesomeIcon icon={faHeart} className="text-[12px]" />
            <span className="font-sans text-[12px]">{likedByMe ? "Liked" : "Like"}</span>
          </button>
          <FontAwesomeIcon icon={faCircle} className="text-[#BDBDBD] text-[2px]" />
          <span className="font-sans text-[12px] text-[#BDBDBD]">{`${roundValue(numberOfLikes)} Like${numberOfLikes > 1 ? "s" : ""}`}</span>
        </div>
      </div>
    </div>
  );
};

export default TweetPostComment;
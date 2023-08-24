import Avatar, { AvatarSize } from "../Avatar";
import { format } from "date-fns";

const TweetPostHeader = ({ avatarUrl, userFullname, datetime }: TweetPostHeaderProps) => {
  const date = new Date((datetime as number) * 1000);
  const formattedDate = format(date, "dd MMMM 'at' HH:mm");

  return (
    <div className="flex items-stretch space-x-3 mb-4">
      <Avatar url={avatarUrl} size={AvatarSize.SM} />
      <div className="flex-1">
        <h3 className="text-black font-sans font-bold text-[18px] h-[22px] mb-1">{userFullname}</h3>
        <h4 className="text-[#BDBDBD] font-sans text-[12px] h-[16px]">{formattedDate}</h4>
      </div>
    </div>
  );
};

export default TweetPostHeader;
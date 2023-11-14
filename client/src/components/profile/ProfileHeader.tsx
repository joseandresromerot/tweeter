import Avatar, { AvatarSize } from "../Avatar";
import FollowButton from "../FollowButton";

interface ProfileHeaderProps {
  avatarUrl: string
  fullname: string
  numberOfFollowings: number
  numberOfFollowers: number
  biography: string
}

const ProfileHeader = ({ avatarUrl, fullname, numberOfFollowings, numberOfFollowers, biography }: ProfileHeaderProps) => {
  return (
    <div className="flex flex-col items-center py-5 px-3 rounded-xl shadow-[0px_2px_4px_0px_#0000000D] z-20 relative bg-white md:py-4 md:flex-row md:items-center md:justify-stretch">
      <Avatar url={avatarUrl} size={AvatarSize.LG} className="mt-[-70px] shadow-[0px_2px_4px_0px_#0000000D]" showBorders />
      <div className="flex flex-col font-sans text-[#333333] md:flex-1 md:ml-5">
        <div className="flex flex-col items-center md:flex-row">
          <h3 className="text-[24px] font-extrabold mt-3 md:mt-0">{fullname}</h3>
          <div className="flex items-center">
            <div className="mt-2 md:mt-0 md:ml-5">
              <span className="text-[14px] font-extrabold">{numberOfFollowings}</span><span className="text-[#828282] text-[15px] ml-1 font-semibold">{" Following"}</span>
              <span className="ml-4 text-[14px] font-extrabold">{numberOfFollowers}</span><span className="text-[#828282] text-[15px] ml-1 font-semibold">{" Followers"}</span>
            </div>
          </div>
        </div>
        <p className="text-[20px] font-semibold text-[#828282] text-center mt-3 md:text-left md:mt-2">{biography}</p>
      </div>
      <FollowButton className="py-2 px-7 rounded-md mt-5 md:ml-16" />
    </div>
  );
};


export default ProfileHeader;
import { WhoToFollowUserProps } from "@/types";
import { roundValue } from "@/utils";
import Image from "next/image";
import Avatar, { AvatarSize } from "../Avatar";
import FollowButton from "../FollowButton";

const WhoToFollowUser = ({ user }: WhoToFollowUserProps) => {
  const { fullname, avatarUrl, numberOfFollowers, landscapeUrl, biography } = user;
  const src = landscapeUrl ?? "https://deerassociation.com/wp-content/uploads/2022/05/Placeholder-Landscape.jpg";

  return (
    <div className="font-sans mb-6 mt-2">
      <div className="h-[1px] border border-[#E0E0E0] flex flex-col items-stretch mb-4" />
      <div className="flex items-center space-x-2 mb-4">
        <Avatar url={avatarUrl} size={AvatarSize.SM} />
        <div className="flex flex-col items-stretch flex-1">
          <h3 className="text-black font-sans font-bold text-[15px] h-[22px] mb-1 truncate">{fullname}</h3>
          <h4 className="text-[#828282] font-sans text-[12px] h-[16px]">{`${roundValue(numberOfFollowers ?? 0)} followers`}</h4>
        </div>
        <FollowButton />
      </div>
      <p className="text-[#828282] text-[15px] mb-3">{biography}</p>
      <div className="relative h-[100px]">
        <Image src={src} alt="Portrait" objectFit="cover" fill className="rounded-lg" />
      </div>
    </div>
  );
};

export default WhoToFollowUser;
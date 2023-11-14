import Image from "next/image";
import { getUserById } from "@/mocks";
import Avatar, { AvatarSize } from "@/components/Avatar";
import FollowButton from "@/components/FollowButton";
import ProfileHeader from "@/components/profile/ProfileHeader";

const Page = ({ params }: { params: { userId: string } }) => {
  const { landscapeUrl, avatarUrl, fullname, numberOfFollowers, numberOfFollowings, biography } = getUserById(params.userId);

  return (
    <>
      <div className={`bg-center bg-no-repeat bg-cover w-full h-[120px]`} style={{ backgroundImage: `url(${landscapeUrl})` }}></div>

      <div className="flex flex-col items-stretch px-8 pt-0 pb-20 mt-[-20px] md:px-20 lg:px-32 xl:px-48">
        <ProfileHeader
          avatarUrl={avatarUrl}
          fullname={fullname}
          numberOfFollowers={numberOfFollowers}
          numberOfFollowings={numberOfFollowings}
          biography={biography}
        />
        <div className="w-full  flex space-x-6">
          <div className="flex-[35] xl:flex-[3] hidden md:flex md:flex-col md:items-stretch space-y-6">

          </div>
          <div className="flex-[65] xl:flex-[7]">

          </div>
        </div>
      </div>
      
    </>
  );
};

export default Page;
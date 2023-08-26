import { whoToFollow } from "@/mocks";
import TrendPanel from "./TrendPanel";
import WhoToFollowUser from "./WhoToFollowUser";

const WhoToFollowSection = () => {
  return (
    <div className="rounded-lg bg-white shadow-[0px_2px_4px_0px_#0000000D] px-6 py-3">
        <h4 className="text-[13px] text-[#4F4F4F] font-sans font-bold">{"Who to follow"}</h4>
        {whoToFollow.map((user) => (
          <WhoToFollowUser user={user} />
        ))}
    </div>
  );
};

export default WhoToFollowSection;
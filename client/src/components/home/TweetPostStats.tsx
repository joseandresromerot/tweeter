import { TweetPostStatsProps } from "@/types";
import { roundValue } from "@/utils";

const TweetPostStats = ({ numberOfComments, numberOfRetweets, numberOfSaved }: TweetPostStatsProps) => {
  return (
        <div className="flex items-center justify-end text-[#BDBDBD] font-sans space-x-3 font-light text-[13px] mr-[5px]">
          <span>{`${roundValue(numberOfComments)} Comment${numberOfComments > 1 ? "s" : ""}`}</span>
          <span>{`${roundValue(numberOfRetweets)} Retweet${numberOfRetweets > 1 ? "s" : ""}`}</span>
          <span>{`${roundValue(numberOfSaved)} Saved`}</span>
        </div>
  );
};

export default TweetPostStats;
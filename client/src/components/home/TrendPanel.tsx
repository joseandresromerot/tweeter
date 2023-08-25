import { trends } from "@/mocks";
import { TrendPanelProps } from "@/types";
import { roundValue } from "@/utils";

const TrendPanel = ({ trend }: TrendPanelProps) => {
  const { keyword, numberOfTweets } = trend;

  return (
    <div className="font-sans my-6">
      <h3 className="text-[#333333] font-extrabold">{keyword}</h3>
      <h4 className="text-[#828282] text-[12px]">{`${roundValue(numberOfTweets)} Tweets`}</h4>
    </div>
  );
};

export default TrendPanel;
import { trends } from "@/mocks";
import TrendPanel from "./TrendPanel";

const TrendsSection = () => {
  return (
    <div className="rounded-lg bg-white shadow-[0px_2px_4px_0px_#0000000D] px-6 py-3">
        <h4 className="text-[13px] text-[#4F4F4F] font-sans font-bold">{"Trends for you"}</h4>
        <div className="h-[1px] border border-[#E0E0E0] my-1" />
        {trends.map((trend) => (
          <TrendPanel trend={trend} />
        ))}
    </div>
  );
};

export default TrendsSection;
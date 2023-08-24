import { WhoCanReplyPopupProps } from "@/types";
import WhoCanReplyPopupButton from "./WhoCanReplyPopupButton";

const WhoCanReplyPopup = ({ buttons, onChange }: WhoCanReplyPopupProps) => {
  return (
    <div className="absolute bg-white w-[310px] left-1 top-10 p-3 rounded-xl border border-[#E0E0E0] shadow-[0px_2px_4px_0px_#0000000D]">

      <h3 className="text-[#333333] font-sans font-bold text-[15px] mb-1">{"Who can reply?"}</h3>
      <h3 className="text-[#828282] font-sans text-[15px] mb-3">{"Choose who can reply to this Tweet."}</h3>

      {buttons.map(({ key, icon, label }) => (
        <WhoCanReplyPopupButton key={key} icon={icon} label={label} onClick={() => onChange(key)} />
      ))}
      
    </div>
  );
};

export default WhoCanReplyPopup;
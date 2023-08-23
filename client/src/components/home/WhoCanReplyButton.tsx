import { faEarthAmericas, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useContext } from "react";
import WhoCanReplyPopup from "./WhoCanReplyPopup";
import { ApplicationContext } from "@/context/AppContext";

const ReplyTypes = [
  {
    key: "1",
    label: "Everyone can reply",
    icon: faEarthAmericas
  },
  {
    key: "2",
    label: "People you follow can reply",
    icon: faUserGroup
  }
];

const WhoCanReplyButton = () => {
  const { replyTypePopupVisible, toggleReplyTypePopup } = useContext(ApplicationContext);
  const [value, setValue] = useState(ReplyTypes[0].key);
  const replyType = ReplyTypes.find(t => t.key === value);

  const handleSelection = (key: string) => {
    setValue(key);
    toggleReplyTypePopup();
  }

  return (
    <div className="relative flex-1">
      <button className="flex flex-center space-x-2" onClick={toggleReplyTypePopup}>
        <FontAwesomeIcon icon={replyType?.icon ?? faEarthAmericas} className="text-[#2F80ED] w-[20px] h-[20px]" />
        <span className="text-[#2F80ED] font-sans text-sm font-bold">{replyType?.label}</span>
      </button>

      {replyTypePopupVisible && <WhoCanReplyPopup buttons={ReplyTypes} onChange={handleSelection} />}
    </div>
  );
};

export default WhoCanReplyButton;
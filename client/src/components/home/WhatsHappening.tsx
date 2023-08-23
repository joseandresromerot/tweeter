"use client";

import { useState } from "react";
import Avatar, { AvatarSize } from "../Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import WhoCanReplyButton from "./WhoCanReplyButton";

const WhatsHappening = () => {
  const [message, setMessage] = useState("");

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  return (
    <div className="flex flex-col items-stretch bg-[#FFFFFF] shadow-[0px_2px_4px_0px_#0000000D] rounded-xl px-6 py-4 mb-4">
      <h3 className="text-[#4F4F4F] font-sans font-extrabold text-left">Tweet something</h3>
      <div className="h-[1px] bg-[#F2F2F2] my-3" />
      <div className="flex space-x-2">
        <Avatar size={AvatarSize.MD} />
        <textarea
          placeholder="What's happening?"
          className="resize-none flex-1 h-16 focus:outline-none placeholder:font-sans placeholder:text-[#BDBDBD] p-1 text-black font-sans"
          value={message}
          onChange={handleMessageChange}
        />
      </div>
      <div className="flex items-center">
        <button className="flex items-center mr-5">
          <FontAwesomeIcon icon={faImage} className="text-[#2F80ED] w-[20px] h-[20px]" />
        </button>
        <WhoCanReplyButton />
        <button className="bg-[#2F80ED] rounded-lg py-2 px-6 font-sans">Tweet</button>
      </div>
    </div>
  );
};

export default WhatsHappening;
"use client";

import { faBookmark, faHeart, faMessage } from "@fortawesome/free-regular-svg-icons";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import TweetPostAction from "./TweetPostAction";
import { TweetPostActionsProps } from "@/types";

const TweetPostActions = ({ retweetedByMe, likedByMe, savedByMe }: TweetPostActionsProps) => {
  return (
    <div className="h-[60px] flex items-stretch border-t border-b border-[#F2F2F2] py-1 space-x-2">
      <TweetPostAction label="Comment" active={false} icon={faMessage} onClick={() => {}} />
      <TweetPostAction label="Retweet" activeLabel="Retweeted" active={retweetedByMe} icon={faArrowsRotate} activeColor="#27AE60" onClick={() => {}} />
      <TweetPostAction label="Like" activeLabel="Liked" active={likedByMe} icon={faHeart} activeColor="#EB5757" onClick={() => {}} />
      <TweetPostAction label="Save" activeLabel="Saved" active={savedByMe} icon={faBookmark} activeColor="#2D9CDB" onClick={() => {}} />
    </div>
  );
};

export default TweetPostActions;
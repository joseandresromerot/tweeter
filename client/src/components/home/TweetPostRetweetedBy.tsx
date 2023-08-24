import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TweetPostRetweetedBy = ({ retweetedByFullname }: TweetPostRetweetedBy) => (
  <div className="flex items-center space-x-2 mb-2">
    <FontAwesomeIcon icon={faArrowsRotate} className="text-[#828282]" />
    <span className="font-sans text-[#828282] text-sm">{`${retweetedByFullname} Retweeted`}</span>
  </div>
);

export default TweetPostRetweetedBy;
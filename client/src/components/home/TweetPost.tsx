import TweetPostHeader from "./TweetPostHeader";
import TweetPostRetweetedBy from "./TweetPostRetweetedBy";
import TweetPostPicture from "./TweetPostPicture";
import TweetPostStats from "./TweetPostStats";
import TweetPostActions from "./TweetPostActions";
import { TweetPostProps } from "@/types";
import TweetPostNewComment from "./TweetPostNewComment";
import TweetPostComments from "./TweetPostComments";

const TweetPost = ({ tweet }: TweetPostProps) => {
  const {
    retweetedBy,
    user,
    datetime,
    message = "",
    pictureUrl,
    numberOfComments,
    numberOfRetweets,
    numberOfSaved,
    retweetedByMe = false,
    likedByMe = false,
    savedByMe = false,
    comments = []
  } = tweet;
  const { fullname: retweetedByFullname = "" } = retweetedBy ?? {};
  const { avatarUrl, fullname: userFullname = "", id } = user ?? {};

  return (
    <div className="my-7">
      {retweetedBy && <TweetPostRetweetedBy retweetedByFullname={retweetedByFullname} />}

      <div className="bg-[#FFFFFF] rounded-xl p-4 flex flex-col items-stretch shadow-[0px_2px_4px_0px_#0000000D]">
        <TweetPostHeader userId={id} avatarUrl={avatarUrl} userFullname={userFullname} datetime={datetime} />

        <p className="text-[#4F4F4F] font-sans font-semibold text-[17px]">{message}</p>

        {pictureUrl && <TweetPostPicture pictureUrl={pictureUrl} />}

        <TweetPostStats numberOfComments={numberOfComments} numberOfRetweets={numberOfRetweets} numberOfSaved={numberOfSaved} />

        <TweetPostActions retweetedByMe={retweetedByMe} likedByMe={likedByMe} savedByMe={savedByMe} />

        <TweetPostNewComment />

        <TweetPostComments comments={comments} />
      </div>
    </div>
  );
};

export default TweetPost;
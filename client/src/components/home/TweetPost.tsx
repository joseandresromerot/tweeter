import TweetPostHeader from "./TweetPostHeader";
import TweetPostRetweetedBy from "./TweetPostRetweetedBy";
import TweetPostPicture from "./TweetPostPicture";
import TweetPostStats from "./TweetPostStats";

const TweetPost = ({ tweet }: TweetPostProps) => {
  const {
    retweetedBy,
    user,
    datetime,
    message = "",
    pictureUrl,
    numberOfComments,
    numberOfRetweets,
    numberOfSaved
  } = tweet;
  const { fullname: retweetedByFullname = "" } = retweetedBy ?? {};
  const { avatarUrl, fullname: userFullname = "" } = user ?? {};

  return (
    <div className="my-7">
      {retweetedBy && <TweetPostRetweetedBy retweetedByFullname={retweetedByFullname} />}

      <div className="bg-[#FFFFFF] rounded-xl p-4 flex flex-col items-stretch shadow-[0px_2px_4px_0px_#0000000D]">
        <TweetPostHeader avatarUrl={avatarUrl} userFullname={userFullname} datetime={datetime} />

        <p className="text-[#4F4F4F] font-sans font-semibold text-[17px]">{message}</p>

        {pictureUrl && <TweetPostPicture pictureUrl={pictureUrl} />}

        <TweetPostStats numberOfComments={numberOfComments} numberOfRetweets={numberOfRetweets} numberOfSaved={numberOfSaved} />
      </div>
    </div>
  );
};

export default TweetPost;
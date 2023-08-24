const TweetPostStats = ({ numberOfComments, numberOfRetweets, numberOfSaved }: TweetPostStatsProps) => {

  const roundValue = (value: number): string => {
    if (value > 999) {
      return `${(value/1000).toFixed(1)}k`;
    }
    return value.toString();
  };

  return (
        <div className="flex items-center justify-end text-[#BDBDBD] font-sans space-x-3 font-light text-[13px] mr-[5px]">
          <span>{`${roundValue(numberOfComments)} Comment${numberOfComments > 1 ? "s" : ""}`}</span>
          <span>{`${roundValue(numberOfRetweets)} Retweet${numberOfRetweets > 1 ? "s" : ""}`}</span>
          <span>{`${roundValue(numberOfSaved)} Saved`}</span>
        </div>
  );
};

export default TweetPostStats;
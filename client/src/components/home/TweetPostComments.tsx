import { TweetPostCommentsProps } from "@/types";
import TweetPostComment from "./TweetPostComment";

const TweetPostComments = ({ comments }: TweetPostCommentsProps) => {
  return (
    <div className="border-t border-[#F2F2F2] pt-6">
      {comments.map((comment => (
        <TweetPostComment comment={comment} />
      )))}
    </div>
  );
};

export default TweetPostComments;
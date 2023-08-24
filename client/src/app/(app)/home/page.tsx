import TweetPost from "@/components/home/TweetPost";
import WhatsHappening from "@/components/home/WhatsHappening";
import { timeline } from "@/mocks";

export default function Page() {
  const tweets = timeline?.tweets ?? [];

  return (
    <div className="w-full px-8 pt-6 pb-20 md:px-20 lg:px-32 xl:px-48">
      <WhatsHappening />
      {tweets.map((tweet) => (
        <TweetPost tweet={tweet} />
      ))}
    </div>
  )
}

import TrendsSection from "@/components/home/TrendsSection";
import TweetPost from "@/components/home/TweetPost";
import WhatsHappening from "@/components/home/WhatsHappening";
import WhoToFollowSection from "@/components/home/WhoToFollowSection";
import { timeline } from "@/mocks";

export default function Page() {
  const tweets = timeline?.tweets ?? [];

  return (
    <div className="w-full flex space-x-6 px-8 pt-6 pb-20 md:px-20 lg:px-32 xl:px-48">
      <div className="flex-[65] xl:flex-[7]">
        <WhatsHappening />
        {tweets.map((tweet) => (
          <TweetPost tweet={tweet} />
        ))}
      </div>
      <div className="flex-[35] xl:flex-[3] hidden md:flex md:flex-col md:items-stretch space-y-6">
        <TrendsSection />
        <WhoToFollowSection />
      </div>
    </div>
  )
}

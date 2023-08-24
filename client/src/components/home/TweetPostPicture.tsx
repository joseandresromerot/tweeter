import Image from "next/image";

const TweetPostPicture = ({ pictureUrl }: TweetPostPictureProps) => (
  <div className="relative h-[300px] my-3 lg:h-[450px]">
    <Image src={pictureUrl} alt="Picture" objectFit="cover" fill className="rounded-lg" />
  </div>
);

export default TweetPostPicture;
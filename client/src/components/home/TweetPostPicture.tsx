"use client";

import { ApplicationContext } from "@/context/AppContext";
import { TweetPostPictureProps } from "@/types";
import Image from "next/image";
import { useContext } from "react";

const TweetPostPicture = ({ pictureUrl }: TweetPostPictureProps) => {
  const { showPicture } = useContext(ApplicationContext);

  return (
    <div className="relative h-[300px] my-3 lg:h-[450px]" onClick={() => showPicture(pictureUrl)}>
      <Image src={pictureUrl} alt="Picture" objectFit="cover" fill className="rounded-lg" />
    </div>
  );
};

export default TweetPostPicture;
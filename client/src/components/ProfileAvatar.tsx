"use client";

import { useRouter } from "next/navigation";
import Avatar, { AvatarProps } from "./Avatar";

interface ProfileAvatarProps extends AvatarProps {
  userId: string
}

const ProfileAvatar = ({userId, onClick, ...props}: ProfileAvatarProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/profile/${userId}`);
  };

  return (
    <Avatar {...props} onClick={handleClick} />
  );
};

export default ProfileAvatar;
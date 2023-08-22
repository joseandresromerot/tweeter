import bg from "../../public/user.png";

interface AvatarProps {
  url?: string
  size?: AvatarSize
  onClick?: () => void
};

export enum AvatarSize {
  XS,
  SM,
  MD,
  LG,
  XL
};

const SIZES_CLASS_NAMES = {
  [AvatarSize.XS]: "w-[20px] h-[20px]",
  [AvatarSize.SM]: "w-[40px] h-[40px]",
  [AvatarSize.MD]: "w-[70px] h-[70px]",
  [AvatarSize.LG]: "w-[100px] h-[100px]",
  [AvatarSize.XL]: "w-[150px] h-[150px]"
};

const Avatar = ({ url, size, onClick }: AvatarProps) => {
  const sizeClassNames = size ? SIZES_CLASS_NAMES[size] : SIZES_CLASS_NAMES[AvatarSize.MD];
  const backgroundImage = `url('${url ?? bg.src}')`;

  return (
    <div className={`bg-[#F2F2F2] rounded-md bg-center bg-no-repeat bg-cover ${sizeClassNames} ${onClick ? "cursor-pointer" : ""}`} style={{ backgroundImage }} onClick={onClick}></div>
  );
};

export default Avatar;
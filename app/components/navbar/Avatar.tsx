"use client";

import Image from "next/image";

interface AvatarProps {
  src: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      className="rounded-full"
      src={src || "/images/avatar.jpg"}
      alt="Avatar"
      height={30}
      width={30}
    />
  );
};

export default Avatar;

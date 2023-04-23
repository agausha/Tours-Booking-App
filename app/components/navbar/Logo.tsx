"use client";

import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className="hidden md:block text-lg font-bold text-red-400 cursor-pointer"
    >
      Tours-Booking
    </div>
  );
};

export default Logo;

"use client";

import { LuEye } from "react-icons/lu";

export default function ViewReview() {
  return (
    <div className="flex flex-col items-center justify-center gap-[16px] rounded-[17px] bg-[#FFFFFF] py-[32px] lg:flex-1">
      <div className="flex h-[88px] w-[88px] items-center justify-center rounded-[50%] bg-[#FEE3DC]">
        <LuEye className="text-[44px] text-[#FD9074]" />
      </div>

      <div className="font-hg text-[40px] font-[800] text-[#4F4F4F]">132k+</div>

      <div className="text-center text-[16px] font-[400] text-[#868686]">
        People views on this resort
      </div>
    </div>
  );
}

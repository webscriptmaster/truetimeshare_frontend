"use client";

import { LuMessageCircle } from "react-icons/lu";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function FeedbackReview() {
  return (
    <div className="flex flex-col items-center justify-center gap-[16px] rounded-[17px] bg-[#FFFFFF] py-[32px] lg:flex-1">
      <div className="flex h-[88px] w-[88px] items-center justify-center rounded-[50%] bg-[#FEE3DC]">
        <LuMessageCircle className="text-[44px] text-[#FD9074]" />
      </div>

      <div className="font-hg text-[40px] font-[800] text-[#4F4F4F]">312k</div>

      <div className="text-center text-[16px] font-[400] text-[#868686]">
        Reviews for this resort
      </div>

      <div className="flex cursor-pointer items-center gap-[8px]">
        <div className="text-center text-[16px] font-[600] text-[#FA5B32]">
          Go to reviews
        </div>
        <FaArrowUpRightFromSquare className="text-[16px] text-[#FA5B32]" />
      </div>
    </div>
  );
}

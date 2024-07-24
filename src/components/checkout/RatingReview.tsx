"use client";

import clsx from "clsx";
import { TiStar } from "react-icons/ti";

export default function RatingReview() {
  const ratingWidths = [
    "",
    "w-[20%]",
    "w-[40%]",
    "w-[60%]",
    "w-[80%]",
    "w-[100%]"
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-[16px] rounded-[17px] bg-[#FFFFFF] px-[24px] py-[32px] sm:px-[48px] md:px-[72px] lg:flex-[2] lg:flex-row">
      <div className="flex w-full justify-center lg:flex-1">
        <div className="flex items-center gap-[6px]">
          <div className="font-hg text-[96px] font-[800] text-[#4F4F4F]">
            4.5
          </div>
          <TiStar className="text-[42px] text-[#FA5B32]" />
        </div>
      </div>

      <div className="flex w-full justify-center lg:flex-1">
        <div className="flex w-full flex-col">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex w-full items-center">
              <div className="mr-[4px] w-[12px]">{rating}</div>
              <TiStar className="mr-[8px] text-[16px] text-[#FA5B32]" />
              <div className="w-[100%]">
                <div
                  className={clsx("h-[8px] bg-[#FA5B32]", ratingWidths[rating])}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

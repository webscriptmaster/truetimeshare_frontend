"use client";

import BookedEmptyItem from "./BookedEmptyItem";

export default function Booked() {
  return (
    <div className="flex flex-col gap-[12px] rounded-[6px] bg-[#EEEEEE] px-[8px] py-[12px]">
      <h2 className="my-[4px] pl-[9px] text-[14px] font-[600] text-[#6E7C87]">
        BOOKED
      </h2>

      <BookedEmptyItem />
    </div>
  );
}

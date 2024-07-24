"use client";

import RentedEmptyItem from "./RentedEmptyItem";

export default function Rented() {
  return (
    <div className="flex flex-col gap-[12px] rounded-[6px] bg-[#EEEEEE] px-[8px] py-[12px]">
      <h2 className="my-[4px] pl-[9px] text-[14px] font-[600] text-[#6E7C87]">
        RENTED
      </h2>

      <RentedEmptyItem />
    </div>
  );
}

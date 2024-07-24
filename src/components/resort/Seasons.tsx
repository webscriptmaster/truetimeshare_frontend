"use client";

import { Rating } from "react-simple-star-rating";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Seasons() {
  return (
    <div>
      <h2 className="text-[32px] font-[700] text-[#222B57]">
        Four Seasons Resort
      </h2>

      <div className="flex flex-row items-baseline gap-[12px]">
        <Rating
          allowFraction
          initialValue={4.5}
          SVGclassName="inline-block"
          emptyClassName="hidden"
          readonly
          size={20}
          className="mb-[8px]"
        />

        <div className="flex text-[14px] font-[400] text-[#4F4F4F]">
          4.5 (1200 Reviews)
        </div>
      </div>

      <div className="flex flex-row items-center gap-[6px]">
        <HiOutlineLocationMarker className="h-[20px] w-[20px]" />

        <div className="text-[14px] font-[400] text-[#333333]">
          Location address, Melbourne, Australia
        </div>
      </div>
    </div>
  );
}

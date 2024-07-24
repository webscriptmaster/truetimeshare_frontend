"use client";

import { LuArrowUpRightSquare, LuEye, LuMapPin } from "react-icons/lu";

import { IProperty } from "@/types/interfaces";
import PropertyOpeningStatus from "./PropertyOpeningStatus";

export default function AvailableItem(props: IProperty) {
  const { name, location, views, clicks, images, openingStatus } = props;

  return (
    <div className="flex flex-col rounded-[6px] bg-[#FFFFFF] p-[16px]">
      <h3 className="font-hg mb-[12px] text-[12px] font-[600] text-[#048BC4]">
        {name}
      </h3>

      <div className="mb-[12px] flex items-center gap-[8px]">
        <LuMapPin className="text-[20px] text-[#333333]" />
        <span className="text-[14px] font-[400] text-[#333333]">
          {location}
        </span>
      </div>

      <div className="mb-[12px] flex items-center justify-between gap-[16px]">
        <div className="flex flex-1 items-center justify-center gap-[4px] rounded-[4px] bg-[#00A651] p-[4px]">
          <LuEye className="text-[16px] text-[#FFFFFF]" />
          <span className="font-hg text-[12px] font-[600] text-[#FFFFFF]">
            {views} Views
          </span>
        </div>

        <div className="flex flex-1 items-center justify-center gap-[4px] rounded-[4px] bg-[#00A651] p-[4px]">
          <LuEye className="text-[16px] text-[#FFFFFF]" />
          <span className="font-hg text-[12px] font-[600] text-[#FFFFFF]">
            {clicks} Clicks
          </span>
        </div>
      </div>

      <img
        className="mb-[12px]"
        src={`${process.env.NEXT_PUBLIC_API_SERVER}/${images[0]}`}
        alt="Property"
      />

      <div className="flex items-center justify-between">
        <PropertyOpeningStatus openingStatus={openingStatus} />
        <LuArrowUpRightSquare className="text-[16px] text-[#FA5B32]" />
      </div>
    </div>
  );
}

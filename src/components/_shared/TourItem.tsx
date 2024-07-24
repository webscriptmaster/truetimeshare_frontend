"use client";

import { LuCircleDollarSign } from "react-icons/lu";

import { ITourItem } from "@/types/interfaces";
import { Button } from "@/components/ui/button";

export default function TourItem(props: ITourItem) {
  const { thumbnail, title, content, price, unit } = props;

  return (
    <div className="flex max-w-[400px] flex-col rounded-[16px] bg-[#ffffff] p-[16px] shadow-[0px_4px_37px_0px_#00000026]">
      <img src={thumbnail} alt="Thumbnail" className="object-contain" />

      <h2 className="font-hg mt-[16px] text-[20px] font-[700] text-[#048BC4]">
        {title}
      </h2>

      <div className="mt-[12px] text-[16px] font-[400] text-[#181E4B]">
        {content}
      </div>

      <div className="mt-[16px] flex justify-start gap-[8px] py-[10px]">
        <LuCircleDollarSign className="text-[24px] text-[#048BC4]" />

        <div className="flex gap-[4px] text-[16px] text-[#048BC4]">{price}</div>

        <div className="flex gap-[4px] text-[16px] text-[#048BC4]">/</div>

        <div className="flex gap-[4px] text-[16px] text-[#048BC4]">{unit}</div>
      </div>

      <div className="mt-[16px] flex justify-end gap-[16px]">
        <Button className="font-hg rounded-[34px] border border-[#FA5B32] bg-transparent text-[16px] font-[600] text-[#FA5B32] hover:bg-transparent">
          Discover
        </Button>
      </div>
    </div>
  );
}

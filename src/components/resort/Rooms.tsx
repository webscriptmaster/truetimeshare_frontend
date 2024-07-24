"use client";

import { useState } from "react";
import { RiHeartAddLine, RiHeartAddFill } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { IRoomItem } from "@/types/interfaces";

function ThumbnailCard(Props: IRoomItem) {
  const [click, setClick] = useState(false);

  const { image, title, item01, item02, item03 } = Props;

  return (
    <div className="w-[402px] rounded-[16px] bg-[#ffffff] p-[16px]">
      <div className="relative">
        <img src={image} alt="Thumbnail" className="object-contain" />

        <div
          className="absolute right-[12px] top-[12px]"
          onClick={() => setClick(!click)}
        >
          {click === false ? (
            <RiHeartAddLine className="text-[24px] text-[#FA5B32] hover:cursor-pointer" />
          ) : (
            <RiHeartAddFill className="text-[24px] text-[#FA5B32] hover:cursor-pointer" />
          )}
        </div>
      </div>

      <div className="my-[12px] text-[20px] font-[700] text-[#048BC4]">
        {title}
      </div>

      <div className="flex flex-col gap-[10px]">
        <div className="flex items-center gap-[8px]">
          <img src="/images/rent/icon09.png" alt="icon09" />

          <div className="text-[14px] font-[400] text-[#4F4F4F]">{item01}</div>
        </div>

        <div className="flex items-center gap-[8px]">
          <img src="/images/rent/icon10.png" alt="icon10" />

          <div className="text-[14px] font-[400] text-[#4F4F4F]">{item02}</div>
        </div>

        <div className="flex items-center gap-[8px]">
          <img src="/images/rent/icon11.png" alt="icon11" />

          <div className="text-[14px] font-[400] text-[#4F4F4F]">{item03}</div>
        </div>
      </div>

      <div className="mt-[16px] flex justify-end gap-[16px]">
        <Button
          variant="link"
          className="font-hg text-[16px] font-[600] text-[#FA5B32]"
        >
          View
        </Button>

        <Button className="font-hg rounded-[34px] bg-[#FA5B32] text-[16px] font-[600] hover:bg-[#eA4B22]">
          Reserve Now
        </Button>
      </div>
    </div>
  );
}

export default function Rooms() {
  const rooms: IRoomItem[] = [
    {
      _id: "01",
      image: "/images/rent/image04.png",
      title: "Standard twin ben, 1 Queen bed",
      item01: "300 sq ft",
      item02: "Sleeps 3",
      item03: "1 double bed and 1 twin bed"
    },
    {
      _id: "02",
      image: "/images/rent/image05.png",
      title: "Standard twin ben, 1 Queen bed",
      item01: "300 sq ft",
      item02: "Sleeps 3",
      item03: "1 double bed and 1 twin bed"
    },
    {
      _id: "03",
      image: "/images/rent/image06.png",
      title: "Standard twin ben, 1 Queen bed",
      item01: "300 sq ft",
      item02: "Sleeps 3",
      item03: "1 double bed and 1 twin bed"
    }
  ];

  return (
    <div className="mt-[36px] px-[96px]">
      <h2 className="text-[24px] font-[600] text-[#222B57]">Available rooms</h2>

      <div className="flex flex-wrap justify-center gap-[16px] md:justify-between">
        {rooms.map((info) => (
          <ThumbnailCard key={info._id} {...info} />
        ))}
      </div>
    </div>
  );
}

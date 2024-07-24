"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState } from "react";

import { BiBuildings } from "react-icons/bi";
import { LuCircleDollarSign, LuStar, LuMapPin } from "react-icons/lu";
import { ImLeaf } from "react-icons/im";
import { CiMap } from "react-icons/ci";
import { IoIosSend } from "react-icons/io";
import { RiHeartAddLine, RiHeartAddFill } from "react-icons/ri";

import { IPropertyItem } from "@/types/interfaces";
import { Button } from "@/components/ui/button";
import ButtonExt from "@/components/_uiext/ButtonExt";

export default function PropertyThumbnailItem(props: IPropertyItem) {
  const router = useRouter();

  const { thumbnail, price, rating, country, state, title, subtitle, content } =
    props;
  const [favorite, setFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setFavorite((prev) => !prev);
  };

  const handleBookClick = () => {
    router.push("/checkout/1");
  };

  return (
    <div className="flex flex-col rounded-[16px] bg-[#ffffff] p-[16px]">
      <div className="relative">
        <img src={thumbnail} alt="Thumbnail" className="object-contain" />

        <div
          className="absolute right-[12px] top-[12px] rounded-[8px] bg-[#FFFFFF] p-[2px]"
          onClick={handleFavoriteClick}
        >
          {!favorite ? (
            <RiHeartAddLine className="text-[20px] text-[#FA5B32] hover:cursor-pointer" />
          ) : (
            <RiHeartAddFill className="text-[20px] text-[#FA5B32] hover:cursor-pointer" />
          )}
        </div>
      </div>

      <div className="flex justify-between bg-[#F4F1F1] px-[20px] py-[10px]">
        <div className="flex gap-[4px] text-[16px] text-[#048BC4]">
          <LuCircleDollarSign className="text-[24px] text-[#048BC4]" />
          {price}
        </div>

        <div className="flex gap-[4px] text-[16px] text-[#048BC4]">
          <LuStar className="text-[24px] text-[#048BC4]" />
          {rating}
        </div>

        <div className="flex gap-[4px] text-[16px] text-[#048BC4]">
          <LuMapPin className="text-[24px] text-[#048BC4]" />
          {state}, {country}
        </div>
      </div>

      <h2 className="font-hg mt-[16px] text-[20px] font-[700] text-[#048BC4]">
        {title}
      </h2>

      <div className="mt-[12px] text-[16px] font-[300] text-[#000000]">
        {subtitle}
      </div>

      <div className="mt-[12px] flex items-center gap-[4px] text-[16px] font-[500] text-[#84829A]">
        <BiBuildings className="text-[20px]" />
        {content}
      </div>

      <div className="mt-[12px] flex justify-start gap-[16px]">
        <Button className="h-[36px] w-[36px] rounded-[50%] bg-[#F5F5F5] p-0 text-[#84829A] hover:bg-[#e5e5e5]">
          <ImLeaf />
        </Button>

        <Button className="h-[36px] w-[36px] rounded-[50%] bg-[#F5F5F5] p-0 text-[#84829A] hover:bg-[#e5e5e5]">
          <CiMap />
        </Button>

        <Button className="h-[36px] w-[36px] rounded-[50%] bg-[#F5F5F5] p-0 text-[#84829A] hover:bg-[#e5e5e5]">
          <IoIosSend />
        </Button>
      </div>

      <div className="mt-[16px] flex items-center justify-end gap-[16px]">
        <Link
          href="/resort/1"
          className="font-hg text-[16px] font-[600] text-[#FA5B32]"
        >
          View
        </Link>

        <ButtonExt onClick={handleBookClick}>Book Now</ButtonExt>
      </div>
    </div>
  );
}

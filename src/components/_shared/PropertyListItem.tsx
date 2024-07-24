"use client";

import { useState } from "react";
import { LuCircleDollarSign, LuStar, LuMapPin } from "react-icons/lu";
import { ImLeaf } from "react-icons/im";
import { CiMap } from "react-icons/ci";
import { IoIosSend } from "react-icons/io";
import { RiHeartAddLine, RiHeartAddFill } from "react-icons/ri";

import { Rating } from "react-simple-star-rating";
import { useRouter } from "next/navigation";
import { IPropertyItem } from "@/types/interfaces";
import { Button } from "@/components/ui/button";

export default function PropertyListItem(props: IPropertyItem) {
  const router = useRouter();
  const { thumbnail, price, rating, country, state, title, subtitle } = props;

  const [favorite, setFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setFavorite((prev) => !prev);
  };

  const handleSeeAvailabilityClick = () => {
    router.push("/resort/1");
  };

  return (
    <div className="flex flex-col gap-[16px] rounded-[16px] bg-[#ffffff] p-[16px] md:min-w-[800px] md:flex-row">
      <div className="flex flex-col justify-center">
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
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="font-hg text-[20px] font-[700] text-[#048BC4]">
          {title}
        </h2>

        <div className="mt-[12px] flex items-center gap-[12px] ">
          <Rating
            initialValue={rating}
            SVGclassName="inline-block"
            emptyClassName="hidden"
            readonly
            size={18}
          />

          <div className="text-[16px] font-[300] text-[#000000]">
            {subtitle}
          </div>
        </div>

        <div className="mt-[12px] text-[14px] font-[400] text-[#EB5757]">
          Non refundable
        </div>

        <div className="mt-[12px] text-[13px] font-[400] text-[#4F4F4F]">
          Reats include a glass of French champagne, parking and a late
          checkout. Gym included. Flexible cancellation applies
        </div>

        <div className="mt-[12px] flex justify-between">
          <div className="flex gap-[16px]">
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

          <div className="flex flex-col">
            <i className="flex items-center justify-end gap-[12px] font-[700]">
              <s className="text-[16px] text-[#333333]">$130</s>
              <span className="text-[20px] text-[#FA5B32]">$120</span>
            </i>
            <div className="text-[12px] font-[400] text-[#4F4F4F]">
              With taxes and fees
            </div>
          </div>
        </div>

        <div className="mt-[16px] flex justify-end gap-[16px]">
          <Button
            className="font-hg rounded-[34px] bg-[#FA5B32] text-[16px] font-[600] hover:bg-[#eA4B22]"
            onClick={handleSeeAvailabilityClick}
          >
            See Availability
          </Button>
        </div>
      </div>
    </div>
  );
}

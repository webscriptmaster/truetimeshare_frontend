"use client";

import { FaTag } from "react-icons/fa";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "../ui/label";

export default function PriceDetail() {
  return (
    <div className="flex flex-col lg:flex-1">
      <div className="flex items-center gap-[16px] rounded-t-[6px] bg-[#F4F1F1] px-[12px] py-[16px]">
        <FaTag className="text-[24px] text-[#048BC4]" />
        <div className="text-[18px] font-[500] text-[#048BC4]">
          Price Details
        </div>
      </div>

      <div className="flex flex-col gap-[16px] rounded-b-[6px] bg-[#FFFFFF] p-[32px]">
        <div className="flex items-center justify-between">
          <div className="text-[14px] font-[400] text-[#4F4F4F]">
            1 room X 2 nights
          </div>
          <div className="text-[14px] font-[400] text-[#4F4F4F]">$ 120.32</div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-[14px] font-[400] text-[#4F4F4F]">
            Tax and service fees
          </div>
          <div className="text-[14px] font-[400] text-[#4F4F4F]">$ 8.32</div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-[14px] font-[400] text-[#2F80ED]">
            Use a coupon, credit or promotional code
          </div>
        </div>

        <div className="w-full">
          <Label className="text-[14px] font-[500] text-[#181818]">
            Coupon Code
          </Label>

          <div className="flex gap-[12px]">
            <Input className="rounded-[34px] bg-[#F2F2F2]" />
            <Button className="rounded-[34px] border border-[#FA5B32] bg-transparent text-[16px] font-[600] text-[#FA5B32] hover:bg-transparent">
              Apply Coupon
            </Button>
          </div>
        </div>

        <div className="h-[1px] w-full bg-[#E0E0E0]" />

        <div className="flex items-center justify-between">
          <div className="text-[16px] font-[500] text-[#181818]">Total</div>
          <div className="text-[20px] font-[300] text-[#333333]">$ 130</div>
        </div>
      </div>
    </div>
  );
}

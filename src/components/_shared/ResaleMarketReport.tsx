"use client";

import ButtonExt from "@/components/_uiext/ButtonExt";
import InputExt from "@/components/_uiext/InputExt";

export default function ResaleMarketReport() {
  return (
    <div className="flex flex-col gap-[24px] rounded-[16px] bg-[#FFFFFF] p-[36px] shadow-md xl:flex-row xl:items-center xl:justify-between">
      <div className="flex flex-col">
        <h3 className="font-hg text-[20px] font-[600] text-[#048BC4]">
          Get our MVC Resale Market Report
        </h3>

        <div className="text-[16px] font-[500] text-[#9D9C9A]">
          Be the first one to know about discounts, offers and events
        </div>
      </div>

      <div className="flex flex-row justify-center gap-[12px]">
        <InputExt
          containerClassName="w-full md:w-[400px]"
          placeholder="Enter email address"
        />

        <ButtonExt>Submit</ButtonExt>
      </div>
    </div>
  );
}

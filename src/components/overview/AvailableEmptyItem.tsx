"use client";

import NewProperty from "./NewProperty";

export default function AvailableEmptyItem() {
  return (
    <div className="flex h-[360px] flex-col items-center justify-center gap-[12px] rounded-[6px] bg-[#FFFFFF] p-[16px]">
      <h3 className="font-hg text-[16px] font-[600] text-[#048BC4]">
        Explore New Opportunities
      </h3>

      <div className="text-center text-[14px] font-[400] text-[#252C32]">
        It looks like you haven't listed any properties as available yet.
        Maximize your timeshare portfolio by adding new properties that are
        ready for booking or sale.
      </div>

      <NewProperty />
    </div>
  );
}

"use client";

export default function RentedEmptyItem() {
  return (
    <div className="flex h-[360px] flex-col items-center justify-center gap-[12px] rounded-[6px] bg-[#FFFFFF] p-[16px]">
      <h3 className="font-hg text-[16px] font-[600] text-[#048BC4]">
        Properties Currently Rented Out
      </h3>

      <div className="text-center text-[14px] font-[400] text-[#252C32]">
        Great news! All your properties are currently rented out. Sit back and
        relax while your timeshare or points are rented to help defray costs.
        Keep an eye on this section for upcoming availability or explore adding
        more properties to your portfolio.
      </div>
    </div>
  );
}

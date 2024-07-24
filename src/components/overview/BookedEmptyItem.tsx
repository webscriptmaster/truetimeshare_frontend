"use client";

import NewOpening from "./NewOpening";

export default function BookedEmptyItem() {
  return (
    <div className="flex h-[360px] flex-col items-center justify-center gap-[12px] rounded-[6px] bg-[#FFFFFF] p-[16px]">
      <h3 className="font-hg text-[16px] font-[600] text-[#048BC4]">
        Upcoming Bookings
      </h3>

      <div className="text-center text-[14px] font-[400] text-[#252C32]">
        It seems like you don't have any upcoming bookings at the moment. Ensure
        your properties are available on the dates that matter most to potential
        renters. Add booked dates, plan ahead and manage critical milestones
        like release dates, cancellation deadlines and more to make the most of
        your vacation ownership portfolio.
      </div>

      <NewOpening />
    </div>
  );
}

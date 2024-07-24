"use client";

export default function ListingHeader() {
  return (
    <div className="flex flex-col items-center gap-[8px]">
      <h1 className="font-hg text-center text-[36px] font-[900] text-[#048BC4]">
        Welcome to True Timeshare Realty llc
      </h1>

      <div className="w-full text-center text-[20px] font-[500] text-[#9D9C9A] lg:w-5/6">
        Welcome to Truetimeshare, where your dream vacations become a reality!
        <br />
        Explore our curated collection of premium Marriott Vacation Club&reg;
        timeshare properties and points available for rent or purchase. Whether
        you're looking for a beachfront paradise, a mountain retreat, or an
        urban escape, we have the perfect timeshare for you.
      </div>
    </div>
  );
}

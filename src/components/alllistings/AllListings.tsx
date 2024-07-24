"use client";

import ListingHeader from "./ListingHeader";
import ListingSearch from "./ListingSearch";
import ListingTable from "./ListingTable";

export default function AllListings() {
  return (
    <div className="flex flex-col pb-[120px] pt-[24px]">
      <ListingHeader />

      <div className="mt-[40px]">
        <ListingSearch />
      </div>

      <div className="mt-[60px]">
        <ListingTable />
      </div>
    </div>
  );
}

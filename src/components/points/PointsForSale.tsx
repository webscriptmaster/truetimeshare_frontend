"use client";

import PointsTable from "./PointsTable";
import PointsHeader from "./PointsHeader";

export default function PointsForSale() {
  return (
    <div className="flex flex-col pb-[120px] pt-[24px]">
      <PointsHeader />

      <div className="mt-[60px]">
        <PointsTable />
      </div>
    </div>
  );
}

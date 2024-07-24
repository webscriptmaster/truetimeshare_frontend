"use client";

import SearchBox from "@/components/_shared/SearchBox";
import Rooms from "./Rooms";
import Seasons from "./Seasons";

export default function DetailRooms() {
  return (
    <>
      <div className="px-[96px]">
        <div className="pt-[35px]">
          <Seasons />
        </div>

        <div className="px-[27px] pt-[36px]">
          <SearchBox />
        </div>
      </div>

      <div className="pb-[95px]">
        <Rooms />
      </div>
    </>
  );
}

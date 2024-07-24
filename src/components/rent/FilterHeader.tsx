"use client";

import { LuHeart, LuSettings2 } from "react-icons/lu";
import { GrAppsRounded } from "react-icons/gr";
import { HiBars4 } from "react-icons/hi2";

import clsx from "clsx";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { SHOW_BY } from "@/utils/constants";

interface Props {
  showBy: string;
  onShowByChange: (newShowBy: string) => void;
  showAllFilter: boolean;
  onShowAllFilterChange: (newShowAllFilter: boolean) => void;
}

export default function FilterHeader({
  showBy,
  onShowByChange,
  showAllFilter,
  onShowAllFilterChange
}: Props) {
  const handleShowByThumbnailClick = () => {
    onShowByChange(SHOW_BY.THUMBNAIL);
  };

  const handleShowByListClick = () => {
    onShowByChange(SHOW_BY.LIST);
  };

  const handleShowAllFilterClick = () => {
    onShowAllFilterChange(!showAllFilter);
  };

  return (
    <div className="flex flex-wrap justify-between gap-[48px]">
      <Select>
        <SelectTrigger className="w-full border border-[#FA5B32] bg-transparent font-[600] text-[#FA5B32] outline-none focus:ring-transparent sm:w-auto">
          <SelectValue placeholder="All Listings" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="all-listings">All Listings</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Button className="flex w-full gap-[8px] border border-[#FA5B32] bg-transparent font-[600] text-[#FA5B32] hover:bg-[#0000001f] sm:w-auto">
        <LuHeart />
        Show Favorites
      </Button>

      <div className="flex w-full items-center sm:w-auto">
        <Label className="min-w-[64px] text-[13px] font-[400] text-[#000000]">
          Sort by
        </Label>

        <Select>
          <SelectTrigger className="flex-1 border border-[#FA5B32] bg-transparent font-[600] text-[#FA5B32] outline-none focus:ring-transparent">
            <SelectValue placeholder="Newest" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all-listings">All Listings</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex w-full items-center sm:w-auto">
        <Label className="min-w-[64px] text-[13px] font-[400] text-[#000000]">
          Show
        </Label>

        <div className="flex flex-1 items-center justify-center rounded-[8px] border border-[#FA5B32]">
          <Button
            className={clsx(
              "bg-transparent text-[24px] text-[#000000] hover:bg-transparent",
              showBy === SHOW_BY.THUMBNAIL ? "text-[#FA5B32]" : ""
            )}
            onClick={handleShowByThumbnailClick}
          >
            <GrAppsRounded />
          </Button>
          <Button
            className={clsx(
              "bg-transparent text-[24px] text-[#000000] hover:bg-transparent",
              showBy === SHOW_BY.LIST ? "text-[#FA5B32]" : ""
            )}
            onClick={handleShowByListClick}
          >
            <HiBars4 />
          </Button>
        </div>
      </div>

      <div className="flex flex-1 justify-start md:justify-end">
        <Button
          className="flex w-full gap-[8px] border border-[#FA5B32] bg-transparent font-[600] text-[#FA5B32] hover:bg-[#0000001f] sm:w-auto"
          onClick={handleShowAllFilterClick}
        >
          <LuSettings2 />
          {showAllFilter ? "Hide All Filters" : "Show All Filters"}
        </Button>
      </div>
    </div>
  );
}

"use client";

import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../ui/select";

export default function PropertyListHeader() {
  return (
    <div className="flex flex-col">
      <h3 className="font-hg text-[24px] font-[600] text-[#181818]">
        2,582 search results found
      </h3>

      <div className="mt-[24px] flex justify-between">
        <div>
          <Button className="rounded-l-[34px] border border-[#FA5B32] bg-transparent font-[600] text-[#FA5B32] hover:bg-[#0000001f]">
            Our top picks
          </Button>
          <Button className="rounded-none border-x-0 border-y border-[#FA5B32] bg-transparent font-[600] text-[#FA5B32] hover:bg-[#0000001f]">
            View
          </Button>
          <Button className="rounded-none border border-[#FA5B32] bg-transparent font-[600] text-[#FA5B32] hover:bg-[#0000001f]">
            Check in Day Preference
          </Button>
          <Button className="rounded-none border-x-0 border-y border-[#FA5B32] bg-transparent font-[600] text-[#FA5B32] hover:bg-[#0000001f]">
            Resort
          </Button>
          <Button className="rounded-l-none rounded-r-[34px] border border-[#FA5B32] bg-transparent font-[600] text-[#FA5B32] hover:bg-[#0000001f]">
            Shared Space
          </Button>
        </div>

        <div>
          <Select>
            <SelectTrigger className="border border-[#FA5B32] bg-transparent font-[600] text-[#FA5B32] outline-none focus:ring-transparent">
              <SelectValue placeholder="Recommended" />
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
      </div>
    </div>
  );
}

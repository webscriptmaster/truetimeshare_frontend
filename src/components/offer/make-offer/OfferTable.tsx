"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

export default function OfferTable() {
  return (
    <div className="flex flex-col gap-[36px] rounded-[17px] bg-[#FFFFFF] px-[24px] py-[36px] lg:flex-row">
      <div className="flex flex-col gap-[24px] lg:w-1/2">
        <div className="text-[18px] font-[700] text-[#181818]">
          Total Estimated Cost: $ 27,967
        </div>

        <div className="text-[16px] font-[400] text-[#4F4F4F]">
          Based on your offer, we&#x27;ve estimated your cost based on your
          offer price, closing costs (does not include cost associated with
          financing) and dues (if applicable).
        </div>
      </div>

      <div className="flex flex-col gap-[30px] lg:w-1/2">
        <div className="flex flex-col gap-[8px]">
          <div className="text-[14px] font-[500] text-[#344054]">
            Price per Point
          </div>

          <Input
            className="h-[44px] w-full rounded-[34px] pl-[16px]"
            placeholder="100"
          />
        </div>

        <div className="flex flex-col gap-[8px]">
          <div className="flex flex-col gap-[8px]">
            <div className="text-[14px] font-[500] text-[#344054]">
              Closing Costs
            </div>

            <div className="text-[14px] font-[500] text-[#667085]">
              Typically paid by buyer
            </div>
          </div>

          <div className="rounded-[34px]">
            <Select>
              <SelectTrigger className="w-full rounded-[34px] pl-[16px] text-[#667085]">
                <SelectValue placeholder="Buyer Pays" />
              </SelectTrigger>

              <SelectContent className="rounded-b-[20px]">
                <div className="flex w-full flex-col gap-[12px]">
                  <SelectItem
                    value="Name01"
                    className="h-[44px] rounded-[34px] border bg-transparent"
                  >
                    item1
                  </SelectItem>

                  <SelectItem
                    value="Name01"
                    className="h-[44px] rounded-[34px] border bg-transparent"
                  >
                    item2
                  </SelectItem>
                </div>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-col gap-[8px]">
          <div className="flex flex-col gap-[8px]">
            <div className="text-[14px] font-[500] text-[#344054]">
              2024 Annual Dues
            </div>

            <div className="text-[14px] font-[500] text-[#667085]">
              Paid in full at closing
            </div>
          </div>

          <div className="rounded-[34px]">
            <Select>
              <SelectTrigger className="w-full rounded-[34px] pl-[16px] text-[#667085]">
                <SelectValue placeholder="Buyer Pays" />
              </SelectTrigger>

              <SelectContent className="rounded-b-[20px]">
                <div className="flex w-full flex-col gap-[12px]">
                  <SelectItem
                    value="Name01"
                    className="h-[44px] rounded-[34px] border bg-transparent"
                  >
                    item1
                  </SelectItem>

                  <SelectItem
                    value="Name01"
                    className="h-[44px] rounded-[34px] border bg-transparent"
                  >
                    item2
                  </SelectItem>
                </div>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { RiShieldUserFill } from "react-icons/ri";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function SecureReservation() {
  return (
    <div className="flex flex-col lg:flex-1">
      <div className="flex items-center gap-[16px] rounded-t-[6px] bg-[#F4F1F1] px-[12px] py-[16px]">
        <RiShieldUserFill className="text-[24px] text-[#048BC4]" />

        <div className="flex flex-col items-start gap-[16px] lg:flex-row lg:items-center">
          <div className="whitespace-nowrap text-[18px] font-[500] text-[#048BC4]">
            Room 1
          </div>
          <div className="text-[16px] font-[500] text-[#048BC4]">
            2 adults, 1 double bed and 1 twin bed, Non-smoking
          </div>
        </div>
      </div>

      <div className="flex h-full flex-col gap-[16px] rounded-b-[6px] bg-[#FFFFFF] p-[32px]">
        <div className="flex flex-col justify-between gap-[20px] md:flex-row">
          <div className="w-full">
            <Label className="text-[14px] font-[500] text-[#181818]">
              First name
            </Label>
            <Input className="rounded-[34px] bg-[#F2F2F2]" />
          </div>

          <div className="w-full">
            <Label className="text-[14px] font-[500] text-[#181818]">
              Last name
            </Label>
            <Input className="rounded-[34px] bg-[#F2F2F2]" />
          </div>
        </div>

        <div className="w-full">
          <Label className="text-[14px] font-[500] text-[#181818]">
            Mobile number (optional)
          </Label>
          <div className="flex justify-between gap-[12px]">
            <div className="w-[150px]">
              <Select>
                <SelectTrigger className="w-full rounded-[34px] bg-[#F2F2F2]">
                  <SelectValue
                    placeholder={
                      <div className="mr-auto flex flex-row items-center gap-[10px]">
                        <img alt="UK Flag" src="/images/checkout/au-flag.svg" />
                        <span>+61</span>
                      </div>
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">
                    <div className="flex flex-row items-center gap-[10px]">
                      <img alt="UK Flag" src="/images/checkout/au-flag.svg" />
                      <span>+61</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="dark">
                    <div className="mr-auto flex flex-row items-center gap-[10px]">
                      <img alt="UK Flag" src="/images/checkout/au-flag.svg" />
                      <span>+61</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="system">
                    <div className="mr-auto flex flex-row items-center gap-[10px]">
                      <img alt="UK Flag" src="/images/checkout/au-flag.svg" />
                      <span>+61</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Input className="rounded-[34px] bg-[#F2F2F2]" />
          </div>
        </div>

        <div className="flex w-full items-center gap-[8px]">
          <Checkbox />
          <Label className="text-[14px] font-[400] text-[#333333]">
            Receive text alerts about this trip.
          </Label>
        </div>
      </div>
    </div>
  );
}

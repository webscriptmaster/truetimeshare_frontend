"use client";

import * as React from "react";
import clsx from "clsx";
import { format } from "date-fns";
import { LuCalendarDays } from "react-icons/lu";
import { BsCurrencyDollar } from "react-icons/bs";

import CheckField from "@/components/_uiext/CheckField";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";

import { Input } from "@/components/ui/input";

export default function OverviewDialog() {
  const [date, setDate] = React.useState<Date>();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-[34px] bg-[#FA5B32] text-[16px] font-[500] text-[#F9F8F5] hover:bg-[#DA3B12]">
          Add new opening
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-[12px] text-[20px] font-[600] text-[#048BC4]">
            Property Name
          </DialogTitle>

          <DialogDescription className="flex flex-col gap-[24px]">
            <div className="flex gap-[24px]">
              <CheckField
                placeholder="25 Dec - 31 Dec"
                startIcon={
                  <LuCalendarDays className="text-[20px] text-[#4F4F4F]" />
                }
              />

              <div className="relative w-full">
                <Input
                  placeholder="25000"
                  className="rounded-[34px] pl-[36px]"
                />
                <BsCurrencyDollar className="absolute left-3 top-[10px] text-[20px] text-[#4F4F4F]" />
              </div>
            </div>

            <div className="flex gap-[24px] text-[14px] font-[500]">
              <div className="flex flex-col gap-[6px]">
                <div className="text-[#344054]">Name</div>

                <Input
                  placeholder="Lisa Emerald"
                  className="rounded-[34px] text-[#667085]"
                />
              </div>

              <div className="flex flex-col gap-[6px]">
                <div className="text-[#344054]">Contact Number</div>

                <Input
                  placeholder="850-123-45678"
                  className="rounded-[34px] text-[#667085]"
                />
              </div>
            </div>

            <div className="flex gap-[24px] text-[14px] font-[500]">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={clsx(
                      "w-full justify-start rounded-[34px] text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    {date ? format(date, "PPP") : <span>20 Oct 2024</span>}
                  </Button>
                </PopoverTrigger>

                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>

              <Input
                placeholder="9:00 pm"
                className="rounded-[34px] text-[#667085]"
              />
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

"use client";

import { useEffect, useState } from "react";

import clsx from "clsx";
import { addMonths, format } from "date-fns";
import { DateRange } from "react-day-picker";
import { LuCalendarDays } from "react-icons/lu";

import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";

interface Props {
  placeholder: string;
  startIcon?: React.ReactNode;
}

export default function CheckField({ placeholder, startIcon }: Props) {
  const [open, setOpen] = useState(false);
  const [touched, setTouched] = useState(false);
  const [mode, setMode] = useState<"range" | "flexible">("range");
  const [flexibleMode, setFlexibleMode] = useState<
    "weekend" | "week" | "month"
  >("month");

  const [range, setRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: addMonths(new Date(), 1)
  });

  const [flexible, setFlexible] = useState("");

  const [value, setValue] = useState("");

  useEffect(() => {
    if (open) {
      setTouched(true);
    }
  }, [open]);

  useEffect(() => {
    if (mode === "range") {
      if (range?.from && range?.to) {
        setValue(
          `${format(range?.from, "MM/dd/yyyy")} - ${format(
            range?.to,
            "MM/dd/yyyy"
          )}`
        );
      } else {
        setValue("");
      }
    }

    if (mode === "flexible") {
      setValue(`${flexibleMode} - ${flexible}`);
    }
  }, [range, flexible]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="w-full">
        <div className="relative w-full">
          <Input
            readOnly
            className={clsx("rounded-[34px]", startIcon ? "pl-[36px]" : "")}
            placeholder={placeholder}
            value={touched ? value : ""}
          />

          {startIcon && (
            <div className="absolute left-[12px] top-[50%] translate-y-[-50%]">
              {startIcon}
            </div>
          )}
        </div>
      </PopoverTrigger>

      <PopoverContent
        align="start"
        sideOffset={16}
        className="flex w-auto flex-col gap-[8px] rounded-[17px] px-[12px] py-[24px]"
      >
        <div className="mx-auto mb-[24px] rounded-[17px] border border-[#EEEEEE] p-[8px]">
          <Button
            className={clsx(
              "rounded-[12px] bg-transparent text-[14px] font-[500] text-[#4F4F4F] hover:bg-[#EEEEEE]",
              mode === "range" ? "bg-[#EEEEEE]" : ""
            )}
            onClick={() => setMode("range")}
          >
            Dates
          </Button>
          <Button
            className={clsx(
              "rounded-[12px] bg-transparent text-[14px] font-[500] text-[#4F4F4F] hover:bg-[#EEEEEE]",
              mode === "flexible" ? "bg-[#EEEEEE]" : ""
            )}
            onClick={() => setMode("flexible")}
          >
            Flexible
          </Button>
        </div>

        {mode === "range" && (
          <Calendar
            initialFocus
            mode="range"
            numberOfMonths={2}
            defaultMonth={range?.from}
            selected={range}
            onSelect={setRange}
          />
        )}

        {mode === "flexible" && (
          <>
            <div className="flex flex-col items-center gap-[16px]">
              <h2 className="font-hg text-center text-[20px] font-[700] text-[#222B57]">
                Select option
              </h2>

              <div className="flex gap-[12px]">
                <Button
                  className={clsx(
                    "rounded-[17px] bg-transparent px-[24px] py-[10px] text-[14px] font-[500] text-[#4F4F4F] hover:bg-[#EEEEEE]",
                    flexibleMode === "weekend" ? "bg-[#EEEEEE]" : ""
                  )}
                  onClick={() => setFlexibleMode("weekend")}
                >
                  Weekend
                </Button>

                <Button
                  className={clsx(
                    "rounded-[17px] bg-transparent px-[24px] py-[10px] text-[14px] font-[500] text-[#4F4F4F] hover:bg-[#EEEEEE]",
                    flexibleMode === "week" ? "bg-[#EEEEEE]" : ""
                  )}
                  onClick={() => setFlexibleMode("week")}
                >
                  Week
                </Button>

                <Button
                  className={clsx(
                    "rounded-[17px] bg-transparent px-[24px] py-[10px] text-[14px] font-[500] text-[#4F4F4F] hover:bg-[#EEEEEE]",
                    flexibleMode === "month" ? "bg-[#EEEEEE]" : ""
                  )}
                  onClick={() => setFlexibleMode("month")}
                >
                  Month
                </Button>
              </div>
            </div>

            <h2 className="font-hg mb-[16px] mt-[36px] text-center text-[20px] font-[700] text-[#222B57]">
              Go Any Time
            </h2>

            <ScrollArea className="w-[544px] bg-[#FAF9FA] p-[16px]">
              <div className="flex w-full gap-[24px]">
                {[
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December"
                ].map((month) => (
                  <div
                    key={month}
                    className={clsx(
                      "flex w-[108px] cursor-pointer flex-col items-center gap-[12px] rounded-[8px] bg-[#FFFFFF] p-[12px]",
                      flexible === month ? "border border-[#000]" : ""
                    )}
                    onClick={() => setFlexible(month)}
                  >
                    <div className="text-[14px] font-[500] text-[#4F4F4F]">
                      {month}
                    </div>

                    <LuCalendarDays className="text-[48px] text-[#4F4F4F]" />
                  </div>
                ))}
              </div>

              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </>
        )}
      </PopoverContent>
    </Popover>
  );
}

"use client";

import { useEffect, useState } from "react";

import clsx from "clsx";
import { LuMinusSquare, LuPlusSquare } from "react-icons/lu";

import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";

interface Props {
  placeholder: string;
  startIcon?: React.ReactNode;
}

export default function GuestsField({ placeholder, startIcon }: Props) {
  const [touched, setTouched] = useState(false);
  const [open, setOpen] = useState(false);
  const [adult, setAdult] = useState(1);
  const [child, setChild] = useState(1);

  const handleTickClick = (type: string, tick: number) => () => {
    if (type === "adult") {
      setAdult((prev) => prev + tick);
    }

    if (type === "child") {
      setChild((prev) => prev + tick);
    }
  };

  useEffect(() => {
    if (open) {
      setTouched(true);
    }
  }, [open]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="w-full">
        <div className="relative w-full">
          <Input
            readOnly
            className={clsx("rounded-[34px]", startIcon ? "pl-[36px]" : "")}
            placeholder={placeholder}
            value={touched ? `A:${adult}, C:${child}` : ""}
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
        className="flex w-[300px] flex-col gap-[8px] rounded-[17px] p-[12px]"
      >
        <div className="flex items-center justify-between rounded-[34px] border border-[#EEEEEE] px-[16px] py-[10px]">
          <div className="text-[14px] font-[500] text-[#4F4F4F]">Adult</div>
          <div className="flex items-center gap-[8px]">
            <LuMinusSquare
              className={clsx(
                "text-[20px] text-[#4F4F4F]",
                adult === 1 ? "opacity-40" : "cursor-pointer"
              )}
              onClick={handleTickClick("adult", adult > 1 ? -1 : 0)}
            />
            <div className="w-[20px] text-center text-[14px] font-[500] text-[#4F4F4F]">
              {adult}
            </div>
            <LuPlusSquare
              className="cursor-pointer text-[20px] text-[#4F4F4F]"
              onClick={handleTickClick("adult", 1)}
            />
          </div>
        </div>

        <div className="flex items-center justify-between rounded-[34px] border border-[#EEEEEE] px-[16px] py-[10px]">
          <div className="text-[14px] font-[500] text-[#4F4F4F]">Child</div>
          <div className="flex items-center gap-[8px]">
            <LuMinusSquare
              className={clsx(
                "text-[20px] text-[#4F4F4F]",
                child === 1 ? "opacity-40" : "cursor-pointer"
              )}
              onClick={handleTickClick("child", child > 1 ? -1 : 0)}
            />
            <div className="w-[20px] text-center text-[14px] font-[500] text-[#4F4F4F]">
              {child}
            </div>
            <LuPlusSquare
              className="cursor-pointer text-[20px] text-[#4F4F4F]"
              onClick={handleTickClick("child", 1)}
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

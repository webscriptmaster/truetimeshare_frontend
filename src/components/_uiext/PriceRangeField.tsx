"use client";

import { useEffect, useState } from "react";

import clsx from "clsx";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";

interface Props {
  placeholder: string;
  startIcon?: React.ReactNode;
  min?: number;
  max?: number;
  value?: number[];
  onChange?: (newRange: number[]) => void;
}

export default function PriceRangeField({
  placeholder,
  startIcon,
  min = 0,
  max = 1000,
  value = [20, 500],
  onChange
}: Props) {
  const [touched, setTouched] = useState(false);
  const [open, setOpen] = useState(false);
  const [range, setRange] = useState<number[]>(value);

  const handleRangeChange = (newRange: number | number[]) => {
    if (Array.isArray(newRange)) {
      setRange(newRange);

      if (typeof onChange === "function") {
        onChange(newRange);
      }
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
            value={touched ? `${range[0]} - ${range[1]}` : ""}
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
        className="flex w-[300px] flex-col gap-[8px] rounded-[17px] px-[12px] py-[24px]"
      >
        <div className="text-[13px] font-[500] text-[#4F4F4F]">
          ${range[0]} - ${range[1]}
        </div>
        <Slider
          range
          min={min}
          max={max}
          value={range}
          onChange={handleRangeChange}
          trackStyle={{
            height: "8px",
            background: "#F76A37"
          }}
          railStyle={{
            height: "8px",
            backgroundColor: "#F9F8F5"
          }}
          handleStyle={{
            width: "18px",
            height: "18px",
            borderColor: "#F76A37",
            borderWidth: "3px",
            backgroundColor: "#FFFFFF",
            opacity: 1
          }}
        />
      </PopoverContent>
    </Popover>
  );
}

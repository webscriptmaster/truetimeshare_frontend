"use client";

import { useRef, useState } from "react";

import clsx from "clsx";
import { useClickAway } from "react-use";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import { Input } from "@/components/ui/input";

interface Props {
  min?: number;
  max?: number;
  value?: number[];
  onChange?: (newRange: number[]) => void;
}

export default function InputRangeExt({
  min = 0,
  max = 1000,
  value = [20, 500],
  onChange
}: Props) {
  const [open, setOpen] = useState(false);
  const [range, setRange] = useState<number[]>(value);
  const ref = useRef(null);

  useClickAway(ref, () => {
    setOpen(false);
  });

  const handleInputClick = () => {
    setOpen((prev) => !prev);
  };

  const handleRangeChange = (newRange: number | number[]) => {
    if (Array.isArray(newRange)) {
      setRange(newRange);

      if (typeof onChange === "function") {
        onChange(newRange);
      }
    }
  };

  return (
    <div className="relative w-full">
      <Input
        className="rounded-[34px]"
        readOnly
        onClick={handleInputClick}
        value={`${range[0]} - ${range[1]}`}
      />

      <div
        ref={ref}
        className={clsx(
          "absolute left-0 right-0 top-[64px] z-10 flex flex-col gap-[12px] rounded-[17px] bg-[#FFFFFF] p-[16px] shadow-lg",
          open ? "block" : "hidden"
        )}
      >
        <div className="text-[13px] font-[500] text-[#4F4F4F]">
          {range[0]} - {range[1]}
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
      </div>
    </div>
  );
}

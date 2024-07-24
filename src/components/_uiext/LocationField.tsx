"use client";

import { useState } from "react";

import clsx from "clsx";
import { LuMapPin } from "react-icons/lu";

import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { ILocation } from "@/types/interfaces";

interface Props {
  placeholder: string;
  startIcon?: React.ReactNode;
  recommendedItems?: ILocation[];
}

export default function LocationField({
  placeholder,
  startIcon,
  recommendedItems
}: Props) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<ILocation | null>(null);

  const handleLocationClick = (newLocation: ILocation) => () => {
    setSelected(newLocation);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="w-full">
        <div className="relative w-full">
          <Input
            readOnly
            className={clsx("rounded-[34px]", startIcon ? "pl-[36px]" : "")}
            placeholder={placeholder}
            value={selected ? `${selected.city} - ${selected.country}` : ""}
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
        className="flex w-auto gap-[8px] rounded-[17px] px-[12px] py-[24px]"
      >
        <div className="flex w-[280px] flex-col gap-[8px]">
          <div className="flex items-center gap-[8px]">
            <LuMapPin className="text-[20px] text-[#4F4F4F]" />
            <div className="text-[14px] font-[700] text-[#667085]">
              Explore nearby
            </div>
          </div>
          <div className="pl-[28px] text-[14px] font-[500] text-[#667085]">
            Find accommodations near you
          </div>
        </div>

        <div className="flex w-[2px] flex-col opacity-10">
          <div className="h-1/2 bg-gradient-to-b from-[#00000000] to-[#000000ff]" />
          <div className="h-1/2 bg-gradient-to-b from-[#000000ff] to-[#00000000]" />
        </div>

        <div className="flex w-[280px] flex-col gap-[8px]">
          {recommendedItems &&
            recommendedItems.map((item) => (
              <div
                key={item._id}
                className="flex cursor-pointer flex-col gap-[8px]"
                onClick={handleLocationClick(item)}
              >
                <div className="flex items-center gap-[8px]">
                  <LuMapPin className="text-[20px] text-[#4F4F4F]" />
                  <div className="text-[14px] font-[700] text-[#667085]">
                    {item.city}
                  </div>
                </div>
                <div className="pl-[28px] text-[14px] font-[500] text-[#667085]">
                  {item.country}
                </div>
              </div>
            ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}

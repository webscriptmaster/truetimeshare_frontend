"use client";

import React from "react";

import clsx from "clsx";

import {
  LuMapPin,
  LuDollarSign,
  LuCalendarDays,
  LuSearch
} from "react-icons/lu";

import { HiOutlineUsers } from "react-icons/hi2";

import ButtonExt from "@/components/_uiext/ButtonExt";
import CheckField from "@/components/_uiext/CheckField";
import LocationField from "../_uiext/LocationField";
import PriceRangeField from "../_uiext/PriceRangeField";
import GuestsField from "../_uiext/GuestsField";

interface Props {
  className?: string;
}

export default function SearchBox({ className }: Props) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-[16px] rounded-[22px] bg-[#fff] px-[16px] py-[12px] shadow-[0px_4px_37px_0px_#00000026] md:flex-row",
        className
      )}
    >
      <LocationField
        placeholder="Where are you going?"
        startIcon={<LuMapPin className="text-[20px] text-[#4F4F4F]" />}
        recommendedItems={[
          {
            _id: "1",
            city: "San Francisco",
            country: "United States"
          },
          {
            _id: "2",
            city: "Washington",
            country: "United States"
          },
          {
            _id: "3",
            city: "New York",
            country: "United States"
          },
          {
            _id: "4",
            city: "Los Angeles",
            country: "United States"
          }
        ]}
      />

      <CheckField
        placeholder="Check in"
        startIcon={<LuCalendarDays className="text-[20px] text-[#4F4F4F]" />}
      />

      <CheckField
        placeholder="Check out"
        startIcon={<LuCalendarDays className="text-[20px] text-[#4F4F4F]" />}
      />

      <PriceRangeField
        placeholder="Price Range"
        startIcon={<LuDollarSign className="text-[20px] text-[#4F4F4F]" />}
      />

      <GuestsField
        placeholder="Guests"
        startIcon={<HiOutlineUsers className="text-[20px] text-[#4F4F4F]" />}
      />

      <ButtonExt className="flex gap-[8px]">
        <LuSearch className="text-[16px]" />
        Search
      </ButtonExt>
    </div>
  );
}

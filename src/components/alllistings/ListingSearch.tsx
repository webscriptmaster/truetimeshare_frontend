"use client";

import { capitalize } from "lodash";
import { BiBuildings } from "react-icons/bi";
import { LuDollarSign, LuSearch } from "react-icons/lu";

import { useState } from "react";
import SelectExt from "@/components/_uiext/SelectExt";
import ButtonExt from "@/components/_uiext/ButtonExt";
import { RESORT_STATUS } from "@/utils/constants";
import InputRangeExt from "../_uiext/InputRangeExt";

export default function ListingSearch() {
  const resortOptions = [
    {
      value: "1",
      label: "MVC Resort Name"
    },
    {
      value: "2",
      label: "MVC Resort Name"
    },
    {
      value: "3",
      label: "MVC Resort Name"
    },
    {
      value: "4",
      label: "MVC Resort Name"
    },
    {
      value: "5",
      label: "MVC Resort Name"
    },
    {
      value: "6",
      label: "MVC Resort Name"
    },
    {
      value: "7",
      label: "MVC Resort Name"
    },
    {
      value: "8",
      label: "MVC Resort Name"
    },
    {
      value: "9",
      label: "MVC Resort Name"
    },
    {
      value: "10",
      label: "MVC Resort Name"
    }
  ];

  const priceOptions = [
    {
      value: "1",
      label: "Max $30/point"
    },
    {
      value: "2",
      label: "Max $35/point"
    },
    {
      value: "3",
      label: "Max $40/point"
    },
    {
      value: "4",
      label: "Max $45/point"
    },
    {
      value: "5",
      label: "Max $50/point"
    },
    {
      value: "6",
      label: "Max $55/point"
    },
    {
      value: "7",
      label: "Max $60/point"
    },
    {
      value: "8",
      label: "Max $65/point"
    },
    {
      value: "9",
      label: "Max $70/point"
    },
    {
      value: "10",
      label: "Max $75/point"
    }
  ];

  const yearOptions = [
    {
      value: "1",
      label: "January"
    },
    {
      value: "2",
      label: "February"
    },
    {
      value: "3",
      label: "March"
    },
    {
      value: "4",
      label: "April"
    },
    {
      value: "5",
      label: "May"
    },
    {
      value: "6",
      label: "June"
    },
    {
      value: "7",
      label: "July"
    },
    {
      value: "8",
      label: "August"
    },
    {
      value: "9",
      label: "September"
    },
    {
      value: "10",
      label: "October"
    },
    {
      value: "11",
      label: "November"
    },
    {
      value: "12",
      label: "December"
    }
  ];

  const statusOptions = [
    {
      value: RESORT_STATUS.NEW,
      label: capitalize(RESORT_STATUS.NEW.replace("-", " "))
    },
    {
      value: RESORT_STATUS.OFFER_ACCEPTED,
      label: capitalize(RESORT_STATUS.OFFER_ACCEPTED.replace("-", " "))
    },
    {
      value: RESORT_STATUS.SALE_PRETENDING,
      label: capitalize(RESORT_STATUS.SALE_PRETENDING.replace("-", " "))
    },
    {
      value: RESORT_STATUS.AVAILABLE,
      label: capitalize(RESORT_STATUS.AVAILABLE.replace("-", " "))
    },
    {
      value: RESORT_STATUS.LOW_PAYMENT,
      label: capitalize(RESORT_STATUS.LOW_PAYMENT.replace("-", " "))
    },
    {
      value: RESORT_STATUS.BONUS,
      label: capitalize(RESORT_STATUS.BONUS.replace("-", " "))
    },
    {
      value: RESORT_STATUS.REDUCED,
      label: capitalize(RESORT_STATUS.REDUCED.replace("-", " "))
    }
  ];

  const [range, setRange] = useState<number[]>([20, 500]);

  const handleRangeChange = (newRange: number[]) => {
    setRange(newRange);
  };

  return (
    <div className="flex flex-col gap-[12px] rounded-[22px] bg-[#FFFFFF] px-[16px] py-[12px] lg:flex-row">
      <SelectExt
        placeholder="Resort"
        startIcon={<BiBuildings className="text-[20px] text-[#4F4F4F]" />}
        options={resortOptions}
      />

      <SelectExt
        placeholder="Price Per Points"
        startIcon={<LuDollarSign className="text-[20px]" />}
        options={priceOptions}
      />

      <SelectExt placeholder="Use Year" options={yearOptions} />

      <SelectExt placeholder="Status" options={statusOptions} />

      <InputRangeExt value={range} onChange={handleRangeChange} />

      <ButtonExt className="flex gap-[8px]">
        <LuSearch className="text-[16px]" />
        Search
      </ButtonExt>
    </div>
  );
}

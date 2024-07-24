"use client";

import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getAvailableProperty } from "@/redux/actions/propertyAction";

import { IProperty } from "@/types/interfaces";
import AvailableEmptyItem from "./AvailableEmptyItem";
import AvailableItem from "./AvailableItem";

export default function Available() {
  const available = useAppSelector((state) => state.Property.available);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAvailableProperty());
  }, []);

  return (
    <div className="flex flex-col gap-[12px] rounded-[6px] bg-[#EEEEEE] px-[8px] py-[12px]">
      <h2 className="my-[4px] pl-[9px] text-[14px] font-[600] text-[#6E7C87]">
        AVAILABLE
      </h2>

      {available.length > 0 ? (
        available.map((p: IProperty) => <AvailableItem key={p._id} {...p} />)
      ) : (
        <AvailableEmptyItem />
      )}
    </div>
  );
}

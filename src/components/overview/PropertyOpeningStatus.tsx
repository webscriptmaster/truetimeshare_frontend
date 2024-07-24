"use client";

import clsx from "clsx";

import { PROPERTY_OPEN_STATUS } from "@/utils/constants";

interface Props {
  openingStatus?: string;
}

export default function PropertyOpeningStatus({ openingStatus }: Props) {
  let bg = "bg-transparent";

  switch (openingStatus) {
    case PROPERTY_OPEN_STATUS.AVAILABLE:
      bg = "bg-[#008000]";
      break;
    case PROPERTY_OPEN_STATUS.PENDING:
      bg = "bg-[#D4BE40]";
      break;
    case PROPERTY_OPEN_STATUS.UNAVAILABLE:
      bg = "bg-[#EB5757]";
      break;
    case PROPERTY_OPEN_STATUS.UNDER_MAINTENANCE:
      bg = "bg-[#048BC4]";
      break;
    default:
      bg = "bg-transparent";
      break;
  }

  return (
    <span
      className={clsx(
        "font-hg rounded-[4px] p-[4px] text-[12px] font-[600] capitalize text-[#FFFFFF]",
        bg
      )}
    >
      {openingStatus ?? ""}
    </span>
  );
}

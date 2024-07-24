"use client";

import clsx from "clsx";

import { RESORT_STATUS } from "@/utils/constants";

interface Props {
  status: string;
}

export default function ResortStatusRenderer({ status }: Props) {
  const styles = {
    [RESORT_STATUS.AVAILABLE]: "bg-[#FEE4DC] text-[#FA5B32]",
    [RESORT_STATUS.BONUS]: "bg-[#F9D4F9] text-[#800080]",
    [RESORT_STATUS.LOW_PAYMENT]: "bg-[#E3F2FD] text-[#32A6FA]",
    [RESORT_STATUS.NEW]: "bg-[#EFFEDC] text-[#008000]",
    [RESORT_STATUS.OFFER_ACCEPTED]: "bg-[#FEA4DC] text-[#FC4949]",
    [RESORT_STATUS.REDUCED]: "bg-[#FECCDC] text-[#FF4949]",
    [RESORT_STATUS.SALE_PRETENDING]: "bg-[#FEC4BC] text-[#DD4949]"
  };

  return (
    <div
      className={clsx(
        "w-fit rounded-[34px] px-[16px] py-[8px] text-center text-[16px] font-[600] capitalize",
        styles[status]
      )}
    >
      {status.replaceAll("-", " ")}
    </div>
  );
}

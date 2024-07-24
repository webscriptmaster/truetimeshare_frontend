"use client";

import { useRouter } from "next/navigation";

import clsx from "clsx";
import { MdSell } from "react-icons/md";
import { LuBadgePercent } from "react-icons/lu";

import { ROLES } from "@/utils/constants";
import { Button } from "@/components/ui/button";

interface Props {
  selected: string;
}

export default function RoleSwitcher({ selected }: Props) {
  const router = useRouter();

  const handleSaleClick = () => {
    router.push("/sale");
  };

  const handleRentClick = () => {
    router.push("/rent");
  };

  return (
    <div className="flex max-w-[500px] rounded-[16px] bg-[#0046380F] p-[6px]">
      <Button
        className={clsx(
          "flex gap-[10px] bg-transparent px-[40px] py-[24px] text-[16px] font-[600] text-[#0000007f] hover:bg-[#24aBe4] hover:text-[#ffffff]",
          selected === ROLES.SELL ? "bg-[#048BC4] text-[#ffffff]" : ""
        )}
        onClick={handleSaleClick}
      >
        <MdSell />
        For Sale
      </Button>

      <Button
        className={clsx(
          "flex gap-[10px] bg-transparent px-[40px] py-[24px] text-[16px] font-[600] text-[#0000007f] hover:bg-[#24aBe4] hover:text-[#ffffff]",
          selected === ROLES.RENT ? "bg-[#048BC4] text-[#ffffff]" : ""
        )}
        onClick={handleRentClick}
      >
        <LuBadgePercent /> For Rent
      </Button>
    </div>
  );
}

"use client";

import clsx from "clsx";

import { Button } from "@/components/ui/button";

interface Props {
  className?: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ButtonExt({ className, children, onClick }: Props) {
  return (
    <Button
      className={clsx(
        "font-hg rounded-[34px] bg-[#FA5B32] px-[16px] py-[8px] text-[16px] font-[600] text-[#FFFFFF] hover:bg-[#DA3B12]",
        className
      )}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

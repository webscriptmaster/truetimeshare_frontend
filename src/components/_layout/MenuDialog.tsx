"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useState } from "react";

import { LuAlignJustify } from "react-icons/lu";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import CurrencyDialog from "./CurrencyDialog";

export default function MenuDialog() {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <LuAlignJustify className="block cursor-pointer text-[15px] font-[600] text-[#4F4F4F] lg:hidden" />
      </DialogTrigger>

      <DialogContent>
        <div className="flex flex-col gap-[32px]">
          <Link
            href="/rent"
            className={pathName.includes("/rent") ? "text-[#FA5B32]" : ""}
          >
            Rent
          </Link>

          <Link
            href="/sale"
            className={pathName.includes("/sale") ? "text-[#FA5B32]" : ""}
          >
            Sell
          </Link>

          <Link
            href="/blog"
            className={pathName.includes("/blog") ? "text-[#FA5B32]" : ""}
          >
            Blog
          </Link>

          <Link
            href="/aboutus"
            className={pathName.includes("/aboutus") ? "text-[#FA5B32]" : ""}
          >
            About Us
          </Link>

          <div className="flex flex-col gap-[32px] sm:hidden">
            <CurrencyDialog />

            <Link href="/signin">Sign In</Link>

            <Link
              className="rounded-[32px] border border-[#FA5B32] px-[16px] py-[8px] text-[#FA5B32]"
              href="/signup"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

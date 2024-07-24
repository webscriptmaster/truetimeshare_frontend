"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "@/components/_layout/Logo";
import CurrencyDialog from "./CurrencyDialog";
import MenuDialog from "./MenuDialog";

export default function Header() {
  const pathName = usePathname();

  return (
    <header className="flex h-[96px] w-full items-center justify-between bg-[#F9F8F5] px-[24px] py-[24px] sm:px-[48px] md:px-[72px] lg:px-[96px]">
      <Logo />

      <div className="font-hg flex items-center gap-[32px] text-[15px] font-[600] text-[#4F4F4F]">
        <div className="hidden items-center gap-[32px] lg:flex">
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
        </div>

        <MenuDialog />

        <div className="hidden items-center gap-[32px] sm:flex">
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
    </header>
  );
}

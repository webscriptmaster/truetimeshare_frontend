"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

import { LuChevronDown, LuUserCircle2 } from "react-icons/lu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import Logo from "@/components/_layout/Logo";
import CurrencyDialog from "@/components/_layout/CurrencyDialog";

import useAuthStore from "@/zustand/Auth";

export default function OverviewHeader() {
  const router = useRouter();
  const auth = useAuthStore();

  const handleOverviewClick = () => {
    router.push("/overview");
  };

  const handleLogoutClick = () => {
    auth.logoutAction(router);
  };

  return (
    <header className="flex h-[96px] w-full items-center justify-between bg-[#F9F8F5] px-[24px] py-[24px] sm:px-[48px] md:px-[72px] lg:px-[96px]">
      <Logo />

      <div className="hidden gap-[16px] sm:flex">
        {auth.user ? (
          <>
            <CurrencyDialog />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex cursor-pointer items-center gap-[4px]">
                  <LuUserCircle2 className="text-[24px] text-[#222B57]" />
                  <LuChevronDown className="text-[20px] text-[#222B57]" />
                </div>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end">
                <DropdownMenuLabel>
                  {auth.user?.firstName && auth.user?.lastName && (
                    <div className="font-hg mb-[4px] text-[14px] font-[500] text-[#4F4F4F]">
                      {auth.user?.firstName} {auth.user?.lastName}
                    </div>
                  )}

                  {auth.user?.email && (
                    <div className="mb-[4px] text-[14px] font-[500] text-[#4F4F4F]">
                      {auth.user?.email}
                    </div>
                  )}

                  {auth.user?.phone && (
                    <div className="mb-[4px] text-[14px] font-[500] text-[#4F4F4F]">
                      {auth.user?.phone}
                    </div>
                  )}
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                {/* <DropdownMenuGroup>
                  <DropdownMenuItem>View Profile</DropdownMenuItem>
                  <DropdownMenuItem>Email Subscriptions</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                </DropdownMenuGroup>

                <DropdownMenuSeparator />

                <DropdownMenuGroup>
                  <DropdownMenuItem>My Postings</DropdownMenuItem>
                  <DropdownMenuItem>My Trips</DropdownMenuItem>
                  <DropdownMenuItem>My Orders</DropdownMenuItem>
                  <DropdownMenuItem>My Resorts</DropdownMenuItem>
                </DropdownMenuGroup>

                <DropdownMenuSeparator /> */}

                <DropdownMenuItem onClick={handleOverviewClick}>
                  Overview
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem>Support</DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem onClick={handleLogoutClick}>
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <>
            <Link
              href="/signin"
              className="font-hg rounded-[34px] border border-[#FA5B32] px-[16px] py-[8px] text-[16px] font-[600] text-[#FA5B32]"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="font-hg rounded-[34px] bg-[#FA5B32] px-[16px] py-[8px] text-[16px] font-[600] text-[#F9F8F5]"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

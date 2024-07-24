"use client";

import Link from "next/link";

import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-col pt-[72px]">
      <div className="flex flex-col gap-[24px] bg-[#FFFFFF] px-[24px] pb-[64px] sm:px-[48px] md:px-[72px] lg:px-[96px] xl:flex-row xl:justify-between">
        <div className="flex flex-col gap-[8px] xl:max-w-[500px]">
          <Logo />

          <div className="pl-[52px] text-[14px] font-[400] text-[#4F4F4F]">
            Your trusted companion in creating memorable and stress-free
            vacations. Thomas E Kessler, Lic. RE Broker #BK3094803.
          </div>

          <div className="pl-[52px] text-[14px] font-[400] text-[#4F4F4F]">
            Marriott Vacation Club is a registered trademark of Marriott®
            International, Inc.
          </div>
        </div>

        <div className="flex flex-row flex-wrap justify-between gap-[20px]">
          <div className="flex flex-col gap-[8px] whitespace-nowrap pl-[52px]">
            <Link
              href="/"
              className="font-hg text-[16px] font-[500] text-[#FA5B32]"
            >
              Home
            </Link>
            <Link
              href="/rent"
              className="text-[14px] font-[400] text-[##4F4F4F]"
            >
              Rent
            </Link>
            <Link
              href="/sale"
              className="text-[14px] font-[400] text-[##4F4F4F]"
            >
              Sell
            </Link>
            <Link
              href="/blog"
              className="text-[14px] font-[400] text-[##4F4F4F]"
            >
              Blog
            </Link>
            <Link
              href="/aboutus"
              className="text-[14px] font-[400] text-[##4F4F4F]"
            >
              About us
            </Link>
          </div>

          <div className="flex flex-col gap-[8px] whitespace-nowrap pl-[52px]">
            <Link
              href="/"
              className="font-hg text-[16px] font-[500] text-[#FA5B32]"
            >
              Explore
            </Link>
            <Link
              href="/alllistings"
              className="text-[14px] font-[400] text-[##4F4F4F]"
            >
              All Listings
            </Link>
            <Link href="/" className="text-[14px] font-[400] text-[##4F4F4F]">
              Most Popular Tours
            </Link>
            <Link href="/" className="text-[14px] font-[400] text-[##4F4F4F]">
              Last Deals
            </Link>
          </div>

          <div className="flex flex-col gap-[8px] whitespace-nowrap pl-[52px]">
            <Link
              href="/"
              className="font-hg text-[16px] font-[500] text-[#FA5B32]"
            >
              Terms and Policies
            </Link>
            <Link
              href="/privacy"
              className="text-[14px] font-[400] text-[##4F4F4F]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[14px] font-[400] text-[##4F4F4F]"
            >
              Terms of use
            </Link>
          </div>

          <div className="flex flex-col gap-[8px] whitespace-nowrap pl-[52px]">
            <Link
              href="/"
              className="font-hg text-[16px] font-[500] text-[#FA5B32]"
            >
              Help
            </Link>
            <Link
              href="/contactus"
              className="text-[14px] font-[400] text-[##4F4F4F]"
            >
              Contact us
            </Link>
            <Link
              href="/support"
              className="text-[14px] font-[400] text-[##4F4F4F]"
            >
              Support
            </Link>
            <Link href="/" className="text-[14px] font-[400] text-[##4F4F4F]">
              Cancel your bookings
            </Link>
          </div>
        </div>
      </div>

      <div className="font-hg bg-[#F9F8F5] py-[12px] text-center text-[16px] font-[700] text-[#4F4F4F]">
        &copy; Copyright {year} True Timeshare Realty, LLC
      </div>
    </footer>
  );
}

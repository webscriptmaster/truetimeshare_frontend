"use client";

import { Button } from "@/components/ui/button";

export default function ResortSpa() {
  return (
    <div className="flex flex-col bg-[#F9F3EF] bg-[url('/images/landing/spa-bg.png')] py-[140px]">
      <div className="flex flex-col justify-center gap-[24px] px-[24px] sm:gap-[48px] sm:px-[48px] md:flex-row md:gap-[72px] md:px-[72px] lg:gap-[96px] lg:px-[96px]">
        <div className="flex-1">
          <img className="w-full" src="/images/landing/spa-01.png" alt="Spa" />
        </div>

        <div className="flex flex-1 flex-col gap-[16px]">
          <div className="text-[16px] font-[400] uppercase text-[#000000]">
            MYRTLE BEACH, SOUTH CAROLINA
          </div>

          <h1 className="font-[400] text-[#000000] md:text-[30px] lg:text-[60px]">
            MARRIOTT MYRTLE BEACH RESORT & SPA AT GRANDE DUNES
          </h1>

          <div>
            <img
              src="/images/landing/wave-separator-red.svg"
              alt="Wave Separator"
            />
          </div>

          <div className="text-[18px] font-[400] text-[#00000099]">
            Enjoy all-day dining and delicious international cuisine while
            taking in ocean views at our on-site restaurants and bars. Bask in
            the sun, play in the surf or take a dip in our indoor and outdoor
            pools. At Hibiscus Spa, find a full menu of wellness services and
            maintain your gym routine at our complimentary health club.
          </div>

          <div>
            <Button className="font-hg rounded-[34px] border border-[#FA5B32] bg-transparent px-[16px] py-[8px] text-[16px] font-[600] text-[#FA5B32] hover:bg-transparent">
              Show Location
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-[140px] flex gap-[56px]">
        <div className="mb-[86px] flex-[0.5]">
          <img
            className="h-full w-full"
            src="/images/landing/spa-02.png"
            alt="Spa"
          />
        </div>

        <div className="mt-[86px] flex-1">
          <img
            className="h-full w-full"
            src="/images/landing/spa-03.png"
            alt="Spa"
          />
        </div>

        <div className="mb-[86px] flex-1">
          <img
            className="h-full w-full"
            src="/images/landing/spa-04.png"
            alt="Spa"
          />
        </div>

        <div className="mt-[86px] flex-[0.5] ">
          <img
            className="h-full w-full"
            src="/images/landing/spa-05.png"
            alt="Spa"
          />
        </div>
      </div>
    </div>
  );
}

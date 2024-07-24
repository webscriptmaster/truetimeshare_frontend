"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

export default function Service() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex w-full flex-col md:w-3/4 lg:w-2/3 xl:w-1/2">
        <div className="mb-[16px] text-center text-[16px] font-[400] uppercase text-[#132430]">
          why choose us?
        </div>

        <h1 className="text-center text-[60px] font-[400] text-[#132430]">
          Elevate your stay with our services
        </h1>
      </div>

      <div className="mt-[48px] flex w-full flex-col justify-between gap-[64px] md:w-5/6 md:flex-row lg:w-3/4 xl:w-2/3">
        <div className="flex flex-col items-center gap-[16px]">
          <img
            className="w-[75px]"
            src="/images/landing/service-thumb-up.svg"
            alt="Service"
          />

          <h2 className="text-center text-[24px] font-[400] text-[#132430]">
            Handpicked
            <br />
            Properties
          </h2>

          <div className="text-center text-[20px] font-[500] text-[#9D9C9A]">
            Discover carefully curated and hard to find Marriott Vacation Club{" "}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>"Legacy Weeks"</TooltipTrigger>
                <TooltipContent className="font-hg w-full text-justify sm:w-[400px]">
                  Legacy Weeks are what Marriott Vacation Club sold before they
                  debuted their Vacation Destination Points program in June
                  2010. A legacy week may be a floating or a fixed week at a
                  resort, in a 1, 2 or 3 bedroom villa with annual or bi-annual
                  use. In 2010 MVC began to sell Destination Points (now called
                  Abound) and they needed a term to differentiate points from
                  their previous product."
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            .
          </div>
        </div>

        <div className="flex flex-col items-center gap-[16px]">
          <img
            className="w-[75px]"
            src="/images/landing/service-thumb-up.svg"
            alt="Service"
          />

          <h2 className="text-center text-[24px] font-[400] text-[#132430]">
            Winning
            <br />
            Points
          </h2>

          <div className="text-center text-[20px] font-[500] text-[#9D9C9A]">
            Shop our impressively large inventory of points with an ever
            changing collection of anniversary month’s. Coming soon...a points
            rental marketplace.
          </div>
        </div>

        <div className="flex flex-col items-center gap-[16px]">
          <img
            className="w-[75px]"
            src="/images/landing/service-thumb-up.svg"
            alt="Service"
          />

          <h2 className="text-center text-[24px] font-[400] text-[#132430]">
            We Eat, Sleep &
            <br />
            Breathe MVC
          </h2>

          <div className="text-center text-[20px] font-[500] text-[#9D9C9A]">
            We have been selling and renting MVC exclusively full time since
            2014. We learn something new about the brand every day.
          </div>
        </div>
      </div>
    </div>
  );
}

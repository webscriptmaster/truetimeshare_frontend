"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ResortDetail() {
  return (
    <div className="flex flex-col justify-between gap-[24px] rounded-[17px] bg-[#FFFFFF] p-[24px] lg:w-5/12">
      <h2 className="text-[32px] font-[700] text-[#222B57]">
        Four Seasons Resort
      </h2>

      <div className="mb-[36px] flex flex-row gap-[12px]">
        <span className="w-1/3 text-[13px] font-[500] text-[#4F4F4F]">
          PRICE
        </span>

        <div className="flex w-2/3 flex-wrap justify-between gap-[12px]">
          <div className="text-[20px] font-[500] text-[#4F4F4F]">$24,975</div>

          <Link href="/offer/make-offer">
            <Button className="rounded-[34px] bg-[#FA5B32] text-[16px] font-[600] text-[#F9F8F5] hover:bg-[#EA4B22]">
              Make an Offer
            </Button>
          </Link>
        </div>
      </div>

      <div className="mb-[36px] flex flex-row gap-[12px]">
        <span className="w-1/3 text-[13px] font-[500] text-[#4F4F4F]">
          POINTS ON
          <br />
          CONTRACT
        </span>

        <div className="w-2/3 text-[20px] font-[500] text-[#4F4F4F]">225</div>
      </div>

      <div className="flex flex-row gap-[12px]">
        <span className="w-1/3 text-[13px] font-[500] text-[#4F4F4F]">
          PRICE PER
          <br />
          POINT
        </span>

        <div className="w-2/3 text-[20px] font-[500] text-[#4F4F4F]">$111</div>
      </div>

      <div className="flex flex-row gap-[12px]">
        <span className="w-1/3 text-[13px] font-[500] text-[#4F4F4F]">
          POINTS
          <br />
          AVAILABLE
        </span>

        <div className="w-2/3">
          <span className="text-[15px] font-[500] text-[#4F4F4F]">
            December 2023 - 0 points
          </span>
          <br />

          <span className="text-[15px] font-[500] text-[#4F4F4F]">
            December 2024 - 225 points
          </span>
          <br />

          <span className="text-[15px] font-[500] text-[#4F4F4F]">
            December 2025 - 225 points
          </span>
          <br />
          <br />

          <span className="text-[15px] font-[500] text-[#4F4F4F]">
            There are 225 points coming Dec. 2024 + 225 points coming Dec. 2025
            + 225 points coming Dec. 2026
          </span>
        </div>
      </div>

      <div className="flex flex-row gap-[12px]">
        <span className="w-1/3 text-[13px] font-[500] text-[#4F4F4F]">
          ANNUAL
          <br />
          DUES
        </span>

        <span className="w-2/3 text-[16px] font-[500] text-[#4F4F4F]">
          Seller Pays 2023 Annual Dues,Buyer Pays 2024 Annual Dues at closing
          ($2,043 based on proposed figures, Disney will ratify 2024 dues on
          Dec. 7th)
        </span>
      </div>

      <div className="flex flex-row gap-[12px]">
        <span className="w-1/3 text-[13px] font-[500] text-[#4F4F4F]">
          CLOSING
          <br />
          COST*
        </span>

        <div className="w-2/3">
          <div className="text-[20px] font-[500] text-[#4F4F4F]">$949</div>

          <div className="text-[13px] font-[500] text-[#8A8A8A]">
            *If you are financing, this does not include lender fees.
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-[12px] pb-[12px]">
        <span className="w-1/3 text-[13px] font-[500] text-[#4F4F4F]">
          TOTAL COST OF
          <br />
          PURCHASE**
        </span>

        <div className="w-2/3">
          <div className="text-[20px] font-[500] text-[#4F4F4F]">$27967</div>

          <div className="text-[13px] font-[500] text-[#8A8A8A]">
            **Total cost includes purchase price, closing costs and dues if
            applicable. Please note, this is an automated estimate; for the most
            accurate estimate please contact the DVC Resale Market Team.
          </div>
        </div>
      </div>
    </div>
  );
}

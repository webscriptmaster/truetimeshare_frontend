"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ResortInfo() {
  return (
    <div className="flex flex-col justify-between gap-[34px] lg:w-7/12">
      <div className="flex flex-col gap-[24px] rounded-[17px] bg-[#FFFFFF] px-[36px] py-[24px]">
        <h3 className="mt-[12px] text-[18px] font-[700] text-[#181818]">
          Overview
        </h3>

        <div className="text-[16px] font-[400] text-[#4F4F4F]">
          Live your very own adventure in a setting inspired by expeditions of
          19th century Africa. The resort includes two African-inspired
          buildings: Jambo House, which opened in 2007, and Kidani Village,
          which opened in 2009. Most rooms offer views of one of the four lush
          savannas that more than 200 hoofed animals and birds call home. There
          are over 30 species of animals, including giraffes, zebras, gazelles,
          flamingos and kudu. The Animal Kingdom also includes one of the
          largest collections of African artwork in the United States. For more
          information, please see Guide to Disney's Animal Kingdom Villas.{" "}
          <br />
          Open Date: July 2007 <br />
          Deed Expiration: Expires January 31, 2057 <br />
          Rooms: 709
        </div>

        <div className="flex flex-col gap-[24px]">
          <h3 className="text-[18px] font-[500] text-[#181818]">
            Top facilities
          </h3>

          <div className="flex flex-wrap gap-[84px]">
            <div className="flex flex-col gap-[12px]">
              <div className="flex items-center gap-[12px]">
                <img src="/images/rent/icon01.png" alt="icon01" />
                <div className="text-[15px] font-[400] text-[#4F4F4F]">
                  Free wifi
                </div>
              </div>

              <div className="flex items-center gap-[12px]">
                <img src="/images/rent/icon02.png" alt="icon02" />
                <div className="text-[15px] font-[400] text-[#4F4F4F]">
                  Air Conditioning
                </div>
              </div>

              <div className="flex items-center gap-[12px]">
                <img src="/images/rent/icon03.png" alt="icon03" />
                <div className="text-[15px] font-[400] text-[#4F4F4F]">
                  Parking available
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[12px]">
              <div className="flex items-center gap-[12px]">
                <img src="/images/rent/icon04.png" alt="icon04" />
                <div className="text-[15px] font-[400] text-[#4F4F4F]">
                  Business Services
                </div>
              </div>

              <div className="flex items-center gap-[12px]">
                <img src="/images/rent/icon05.png" alt="icon05" />
                <div className="text-[15px] font-[400] text-[#4F4F4F]">
                  Swimming pool
                </div>
              </div>

              <div className="flex items-center gap-[12px]">
                <img src="/images/rent/icon06.png" alt="icon06" />
                <div className="text-[15px] font-[400] text-[#4F4F4F]">
                  Top rated in area
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[26px] rounded-[17px] bg-[#FFFFFF] p-[36px]">
        <h3 className="text-[18px] font-[700] text-[#181818]">
          Additional Information
        </h3>

        <div className="text-[16px] font-[400] text-[#4F4F4F]">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </div>
      </div>

      <div className="flex flex-col gap-[24px] rounded-[17px] bg-[#FFFFFF] px-[36px] py-[20px]">
        <div className="flex flex-col gap-[12px] md:flex-row">
          <div className=" md:w-1/2">
            <h4 className="text-[13px] font-[500] text-[#010D3C]">
              DATA LISTED
            </h4>

            <span className="text-[14px] font-[500] text-[#9B9B9B]">
              September 15, 2023
            </span>
          </div>

          <div className="md:w-1/2">
            <h4 className="text-[13px] font-[500] text-[#010D3C]">
              DEED EXPIRATION
            </h4>

            <span className="text-[14px] font-[500] text-[#9B9B9B]">2057</span>
          </div>
        </div>

        <div className="flex flex-col gap-[12px] md:flex-row">
          <div className="md:w-1/2">
            <h4 className="text-[13px] font-[500] text-[#010D3C]">
              DUES PER POINT
            </h4>

            <span className="text-[14px] font-[500] text-[#9B9B9B]">$8.81</span>
          </div>

          <div className="md:w-1/2">
            <h4 className="text-[13px] font-[500] text-[#010D3C]">USE YEAR</h4>

            <span className="text-[14px] font-[500] text-[#9B9B9B]">
              December
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-[12px] md:flex-row">
          <div className="md:w-1/2">
            <h4 className="text-[13px] font-[500] text-[#010D3C]">
              LISTING ID
            </h4>

            <span className="text-[14px] font-[500] text-[#9B9B9B]">
              AK13987
            </span>
          </div>

          <div className="flex justify-end md:w-1/2">
            <Button className="rounded-[34px] bg-[#FA5B32] text-[16px] font-[600] text-[#F9F8F5] hover:bg-[#EA4B22]">
              <Link href="/offer/make-offer">Make an Offer</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

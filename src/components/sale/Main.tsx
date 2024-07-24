"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import Benefits from "@/components/sale/Benefits";
import WorkGuide from "@/components/sale/WorkGuide";
import CreateList from "@/components/sale/CreateList";

import ResaleMarketReport from "@/components/_shared/ResaleMarketReport";
import FineCollections from "@/components/_shared/FineCollections";
import RoleSwitcher from "@/components/_shared/RoleSwitcher";

export default function Main() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {!showPopup && (
        <>
          <section className="flex flex-col gap-[48px]">
            <h2 className="font-hg text-center text-[40px] font-[700] text-[#048BC4]">
              Welcome to Your Marriott Vacation <br />
              Club&reg; Resale Journey!
            </h2>

            <div className="mt-[52px] flex justify-center">
              <RoleSwitcher selected="sell" />
            </div>

            <div className="flex flex-col gap-[12px]">
              <h2 className="font-hg text-[36px] font-[900] text-[#048BC4]">
                Why Sell With Us?
              </h2>

              <p className="text-[20px] font-[500] text-[#9D9C9A]">
                Are you ready to embark on a new chapter? Whether your travel
                needs have evolved or you&#x27;re seeking a change, selling your
                Marriott Vacation Club property is a seamless process that opens
                doors to endless possibilities. At TrueTimeShare.com, we
                understand that parting with your Marriott Vacation Club
                membership is a stress-free experience when you let the friendly
                and experienced licensed sales team of MVC® experts sell your
                Marriott® timeshares. That&#x27;s why we&#x27;re here to make
                the selling process straightforward, transparent, and rewarding.
              </p>

              <div className="my-[12px] flex justify-end">
                <Button
                  className="h-[40px] rounded-[34px] bg-[#FA5B32] text-[16px] font-[600] text-[#F9F8F5] hover:bg-[#EA4B22]"
                  onClick={() => setShowPopup(true)}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </section>

          <Benefits />
          <WorkGuide />
          <ResaleMarketReport />

          <div className="mt-[120px]">
            <FineCollections />
          </div>
        </>
      )}

      {showPopup && <CreateList />}
    </>
  );
}

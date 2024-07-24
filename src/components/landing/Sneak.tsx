"use client";

import CountDownTimer from "./CountDownTimer";
import ButtonExt from "../_uiext/ButtonExt";

export default function Sneak() {
  const startedTimestamp = new Date();
  startedTimestamp.setHours(startedTimestamp.getHours() - 3);
  startedTimestamp.setMinutes(0);
  startedTimestamp.setSeconds(0);

  return (
    <div className="flex flex-col items-center">
      <div className="flex w-full flex-col md:w-3/4 lg:w-2/3 xl:w-1/2">
        <div className="text-center text-[20px] font-[500] uppercase text-[#048BC4]">
          Special Limited-time offer
        </div>

        <h2 className="mt-[18px] text-center text-[40px] font-[400] text-[#132430]">
          Before our official launch, we're offering you an exclusive sneak peek
          at what awaits you.
        </h2>

        <div className="mt-[18px] flex justify-center">
          <img
            src="/images/landing/wave-separator-blue.svg"
            alt="Wave Separator"
          />
        </div>

        <div className="mt-[18px] text-center text-[20px] font-[500] text-[#4F4F4F]">
          True Timeshare Realty LLC brings you a world of luxury timeshare
          properties for unforgettable getaways.
        </div>
      </div>

      <div className="mt-[60px] w-full rounded-[24px] bg-[#FFFFFF] py-[50px] md:w-[480px]">
        <CountDownTimer
          startedTimestamp={startedTimestamp}
          durationSeconds={3600 * 6}
        />
      </div>

      <div className="mt-[92px] flex w-full flex-col gap-[12px]">
        <div className="relative w-full">
          <img
            className="w-full"
            src="/images/landing/sneak-01.png"
            alt="Sneak"
          />

          <div className="font-hg absolute right-[32px] top-[40px] rounded-[21px] bg-[#048BC4] px-[20px] py-[10px] font-[600] text-[#F9F8F5]">
            35% OFF
          </div>

          <div className="absolute bottom-[24px] left-[24px] flex flex-col gap-[16px]">
            <div className="font-hg text-[25px] font-[700] text-[#F9F8F5]">
              Marriott's Maui Ocean Club - Lahaina & Napili Towers
            </div>
            <div className="flex items-end gap-[8px]">
              <span className="text-[30px] font-[700] text-[#FFFFFF]">
                $195
              </span>
              <s className="text-[20px] font-[500] text-[#FFFFFF]">$245</s>
              <span className="text-[20px] font-[500] text-[#FFFFFF]">/</span>
              <span className="text-[20px] font-[500] text-[#FFFFFF]">
                Person
              </span>
            </div>
          </div>

          <div className="absolute bottom-[24px] right-[32px]">
            <ButtonExt>Reserve Now</ButtonExt>
          </div>
        </div>

        <div className="flex flex-col gap-[12px] md:flex-row">
          <div className="relative flex-1">
            <img
              src="/images/landing/sneak-02.png"
              alt="Sneak"
              className="w-full object-contain"
            />

            <div className="font-hg absolute right-[32px] top-[40px] rounded-[21px] bg-[#048BC4] px-[20px] py-[10px] font-[600] text-[#F9F8F5]">
              35% OFF
            </div>

            <div className="absolute bottom-[24px] left-[24px] flex flex-col gap-[16px]">
              <div className="font-hg text-[25px] font-[700] text-[#F9F8F5]">
                Marriott's Aruba Ocean Club
              </div>
              <div className="flex items-end gap-[8px]">
                <span className="text-[30px] font-[700] text-[#FFFFFF]">
                  $195
                </span>
                <s className="text-[20px] font-[500] text-[#FFFFFF]">$245</s>
                <span className="text-[20px] font-[500] text-[#FFFFFF]">/</span>
                <span className="text-[20px] font-[500] text-[#FFFFFF]">
                  Person
                </span>
              </div>
            </div>

            <div className="absolute bottom-[24px] right-[32px]">
              <ButtonExt>Reserve Now</ButtonExt>
            </div>
          </div>

          <div className="relative flex-1">
            <img
              src="/images/landing/sneak-03.png"
              alt="Sneak"
              className="w-full object-contain"
            />

            <div className="font-hg absolute right-[32px] top-[40px] rounded-[21px] bg-[#048BC4] px-[20px] py-[10px] font-[600] text-[#F9F8F5]">
              35% OFF
            </div>

            <div className="absolute bottom-[24px] left-[24px] flex flex-col gap-[16px]">
              <div className="font-hg text-[25px] font-[700] text-[#F9F8F5]">
                Marriott's Crystal Shores
              </div>
              <div className="flex items-end gap-[8px]">
                <span className="text-[30px] font-[700] text-[#FFFFFF]">
                  $195
                </span>
                <s className="text-[20px] font-[500] text-[#FFFFFF]">$245</s>
                <span className="text-[20px] font-[500] text-[#FFFFFF]">/</span>
                <span className="text-[20px] font-[500] text-[#FFFFFF]">
                  Person
                </span>
              </div>
            </div>

            <div className="absolute bottom-[24px] right-[32px]">
              <ButtonExt>Reserve Now</ButtonExt>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

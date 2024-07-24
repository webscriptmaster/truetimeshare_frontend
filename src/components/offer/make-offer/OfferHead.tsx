"use client";

export default function OfferHead() {
  return (
    <div className="flex flex-col gap-[24px] rounded-[17px] bg-[#FFFFFF] px-[24px] py-[36px] lg:flex-row">
      <div className="flex flex-col gap-[18px] lg:w-1/2">
        <h2 className="text-[18px] font-[700] text-[#222B57] md:text-[32px]">
          An offer for AK13987 Listing
        </h2>

        <div className="flex gap-[48px]">
          <div className="text-[13px] font-[500] text-[#4F4F4F]">
            POINTS ON
            <br />
            CONTACT
          </div>

          <div className="text-[20px] font-[500] text-[#4F4F4F]">225</div>
        </div>
      </div>

      <div className="flex flex-col gap-[12px] md:flex-row lg:w-1/2">
        <div className="flex flex-col justify-between gap-[12px] md:w-1/2">
          <div className="flex flex-row items-center">
            <div className="w-1/2">
              <span className="text-[13px] font-[500] text-[#4F4F4F]">
                PRICE
              </span>
            </div>

            <div className="w-1/2">
              <span className="text-[20px] font-[500] text-[#4F4F4F]">
                $24,975
              </span>
            </div>
          </div>

          <div className="flex flex-row items-center">
            <div className="w-1/2">
              <span className="text-[13px] font-[500] text-[#4F4F4F]">
                PRICE PER POINT
              </span>
            </div>

            <div className="w-1/2">
              <span className="text-[20px] font-[500] text-[#4F4F4F]">
                $111
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-end md:w-1/2">
          <span className="pr-[12px] text-[16px] font-[600] text-[#FA5B32]">
            Total Cost: $27,967
          </span>
        </div>
      </div>
    </div>
  );
}

"use client";

export default function TopDestinations() {
  return (
    <div className="flex flex-col">
      <h1 className="font-hg text-center text-[36px] font-[700] text-[#FA5B32]">
        Top Destinations
      </h1>

      <div className="mt-[16px] text-center text-[20px] font-[500] text-[#4F4F4F]">
        Explore Top Places After Booking Your Dream Resort
      </div>

      <div className="mt-[56px] flex flex-col gap-[24px] lg:flex-row">
        <div className="flex flex-1 flex-col gap-[24px]">
          <div className="relative flex-1">
            <img
              className="h-full w-full rounded-[17px] object-cover"
              src="/images/reservation/destination-01.png"
              alt="Destination"
            />

            <div className="absolute left-[24px] top-[24px] rounded-[12px] bg-[#FFFFFF] px-[10px] py-[5px] text-[14px] font-[500] text-[#2D3134]">
              3.5
            </div>

            <div className="absolute bottom-[24px] left-[24px] flex flex-col gap-[10px]">
              <div className="text-[20px] font-[600] text-[#FFFFFF]">Place</div>
              <div className="text-[14px] font-[400] text-[#FFFFFF]">
                Waterfall
              </div>
            </div>
          </div>

          <div className="relative flex-1">
            <img
              className="h-full w-full rounded-[17px] object-cover"
              src="/images/reservation/destination-02.png"
              alt="Destination"
            />

            <div className="absolute left-[24px] top-[24px] rounded-[12px] bg-[#FFFFFF] px-[10px] py-[5px] text-[14px] font-[500] text-[#2D3134]">
              3.5
            </div>

            <div className="absolute bottom-[24px] left-[24px] flex flex-col gap-[10px]">
              <div className="text-[20px] font-[600] text-[#FFFFFF]">Place</div>
              <div className="text-[14px] font-[400] text-[#FFFFFF]">
                Museum
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex flex-[2]">
          <img
            className="h-full w-full rounded-[17px] object-cover"
            src="/images/reservation/destination-03.png"
            alt="Destination"
          />

          <div className="absolute left-[24px] top-[24px] rounded-[12px] bg-[#2D3134] px-[10px] py-[5px] text-[14px] font-[500] text-[#FFFFFF]">
            3.5
          </div>

          <div className="absolute bottom-[24px] left-[24px] flex flex-col gap-[10px]">
            <div className="text-[20px] font-[600] text-[#FFFFFF]">Place</div>
            <div className="text-[14px] font-[400] text-[#FFFFFF]">
              Old City
            </div>
          </div>
        </div>

        <div className="flex flex-[2] flex-col gap-[24px]">
          <div className="relative flex-1">
            <img
              className="h-full w-full rounded-[17px] object-cover"
              src="/images/reservation/destination-04.png"
              alt="Destination"
            />

            <div className="absolute left-[24px] top-[24px] rounded-[12px] bg-[#2D3134] px-[10px] py-[5px] text-[14px] font-[500] text-[#FFFFFF]">
              3.5
            </div>

            <div className="absolute bottom-[24px] left-[24px] flex flex-col gap-[10px]">
              <div className="text-[20px] font-[600] text-[#FFFFFF]">Place</div>
              <div className="text-[14px] font-[400] text-[#FFFFFF]">
                Bridge
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[24px] lg:flex-row">
            <div className="relative flex-1">
              <img
                className="h-full w-full rounded-[17px] object-cover"
                src="/images/reservation/destination-05.png"
                alt="Destination"
              />

              <div className="absolute left-[24px] top-[24px] rounded-[12px] bg-[#2D3134] px-[10px] py-[5px] text-[14px] font-[500] text-[#FFFFFF]">
                3.5
              </div>

              <div className="absolute bottom-[24px] left-[24px] flex flex-col gap-[10px]">
                <div className="text-[20px] font-[600] text-[#FFFFFF]">
                  Place
                </div>
                <div className="text-[14px] font-[400] text-[#FFFFFF]">
                  Tower
                </div>
              </div>
            </div>

            <div className="relative flex-1">
              <img
                className="h-full w-full rounded-[17px] object-cover"
                src="/images/reservation/destination-06.png"
                alt="Destination"
              />

              <div className="absolute left-[24px] top-[24px] rounded-[12px] bg-[#2D3134] px-[10px] py-[5px] text-[14px] font-[500] text-[#FFFFFF]">
                3.5
              </div>

              <div className="absolute bottom-[24px] left-[24px] flex flex-col gap-[10px]">
                <div className="text-[20px] font-[600] text-[#FFFFFF]">
                  Place
                </div>
                <div className="text-[14px] font-[400] text-[#FFFFFF]">
                  Clock Tower
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

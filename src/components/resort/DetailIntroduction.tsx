"use client";

import Seasons from "./Seasons";

export default function DetailIntroduction() {
  return (
    <div className="flex flex-col gap-[24px] px-[96px] pt-[33px] lg:flex-row">
      <div className="lg:w-[70%]">
        <Seasons />

        <div className="mt-[40px] flex flex-col gap-[24px] rounded-[6px] bg-[#FFFFFF] p-[30px]">
          <h3 className="text-[18px] font-[500] text-[#181818]">Overview</h3>

          <div className="text-[16px] font-[400] text-[#4F4F4F]">
            Featuring free WiFi throughout the property, Lakeside Motel
            Waterfront offers accommodations in Lakes Entrance, 19 mi from
            Bairnsdale. Free private parking is available on site.
            <br />
            <br />
            Each room at this motel is air conditioned and comes with a
            flat-screen TV. You will find a kettle, toaster and a microwave in
            the room. Each room is fitted with a private bathroom. Guests have
            access to barbecue facilities and a lovely large lawn area. Metung
            is 6.8 mi from Lakeside Motel Waterfront, while Paynesville is 14 mi
            from the property.
            <br />
            <br />
            Couples in particular like the location &#x2013; they rated it 9.2
            for a two-person trip.
          </div>

          <div className="mt-[32px] border-[1px] border-[#E0E0E0]" />

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
      </div>

      <div className="flex flex-col items-stretch gap-[24px] md:flex-row md:items-center lg:w-[30%] lg:flex-col lg:items-stretch">
        <img
          src="/images/rent/map.png"
          className="md:w-[50%] lg:w-[100%]"
          alt="map"
        />

        <div className="flex-1">
          <div className="flex flex-col gap-[12px]">
            <h3 className="mb-[12px] text-[18px] font-[600] text-[#181818]">
              Explore the area
            </h3>

            <div className="flex justify-between">
              <div className="flex gap-[12px]">
                <img
                  src="/images/rent/icon07.png"
                  className="h-[20px] w-[20px]"
                  alt="icon07"
                />

                <div className="w-full text-[14px] font-[400] text-[#4F4F4F]">
                  Hotel Penselvenyia
                </div>
              </div>

              <div className="text-[14px] font-[400] text-[#4F4F4F]">
                2 min drive
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex gap-[12px]">
                <img
                  src="/images/rent/icon08.png"
                  className="h-[20px] w-[20px]"
                  alt="icon08"
                />

                <div className="w-full text-[14px] font-[400] text-[#4F4F4F]">
                  Travis Bakery store house
                </div>
              </div>

              <div className="text-[14px] font-[400] text-[#4F4F4F]">
                10 min drive
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex gap-[12px]">
                <img
                  src="/images/rent/icon08.png"
                  className="h-[20px] w-[20px]"
                  alt="icon08"
                />

                <div className="w-full text-[14px] font-[400] text-[#4F4F4F]">
                  Olivia Johnson Garden
                </div>
              </div>

              <div className="text-[14px] font-[400] text-[#4F4F4F]">
                15 min drive
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex gap-[12px]">
                <img
                  src="/images/rent/icon08.png"
                  className="h-[20px] w-[20px]"
                  alt="icon08"
                />

                <div className="w-full text-[14px] font-[400] text-[#4F4F4F]">
                  Norman Opera Circus
                </div>
              </div>

              <div className="text-[14px] font-[400] text-[#4F4F4F]">
                18 min drive
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex gap-[12px]">
                <img
                  src="/images/rent/icon08.png"
                  className="h-[20px] w-[20px]"
                  alt="icon08"
                />

                <div className="w-full text-[14px] font-[400] text-[#4F4F4F]">
                  Rockdeset hotel
                </div>
              </div>

              <div className="text-[14px] font-[400] text-[#4F4F4F]">
                32 min drive
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

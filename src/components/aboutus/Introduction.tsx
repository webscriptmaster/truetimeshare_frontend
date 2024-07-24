"use client";

export default function Introduction() {
  return (
    <section>
      <h2 className="font-hg pt-[80px] text-center text-[36px] font-[700] text-[#048BC4] md:text-[50px] lg:text-left">
        Let True Timeshare Set You Free
      </h2>

      <div className="mt-[36px] flex flex-col gap-[36px] lg:flex-row">
        <div className="ml-0 mt-[36px] flex flex-col gap-[24px] lg:ml-[24px] lg:w-[50%]">
          <div className="flex flex-row gap-[16px]">
            <img
              src="/images/aboutus/icon01.png"
              className="h-[48px] w-[47px]"
              alt="icon01"
            />

            <div>
              <h5 className="text-[16px] font-[700] text-[#4F4F4F]">
                Marriott Vacation Club
              </h5>

              <p className="text-[16px] font-[400] text-[#5E6282]">
                Our superpower is selling and renting Marriott Vacation Club
                legacy weeks and points with no upfront fees.
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-[16px]">
            <img
              src="/images/aboutus/icon02.png"
              className="h-[48px] w-[47px]"
              alt="icon02"
            />

            <div>
              <h5 className="text-[16px] font-[700] text-[#4F4F4F]">
                What&#x27;s Best For You is Best For Us
              </h5>

              <p className="text-[16px] font-[400] text-[#5E6282]">
                We are paid once a sale is closed successfully. That is one
                reason you will find relaxed, pleasant conversations with us,
                there is no rushing a 90 day closing.
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-[16px]">
            <img
              src="/images/aboutus/icon03.png"
              className="h-[48px] w-[47px]"
              alt="icon03"
            />

            <div>
              <h5 className="text-[16px] font-[700] text-[#4F4F4F]">
                About Payment
              </h5>

              <p className="text-[16px] font-[400] text-[#5E6282]">
                Like you, we don’t see any money until closing, which takes
                about 90 days. A neutral closing company will conduct your
                closing remotely. You won’t be present at closing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

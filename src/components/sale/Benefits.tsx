"use client";

export default function Benefits() {
  return (
    <section className="mt-[60px] rounded-[24px] bg-[#FFFFFF] p-[36px]">
      <h2 className="font-hg mt-[12px] text-center text-[36px] font-[900] text-[#048BC4]">
        Key Benefits
      </h2>

      <div className="mt-[48px]">
        <div className="flex flex-wrap items-start justify-center gap-[36px] md:justify-between">
          <div className="flex w-[206px] flex-col justify-center text-center">
            <div className="flex justify-center">
              <img
                src="/images/sale/image01.svg"
                className="h-[165px] w-[165px]"
                alt="image01"
              />
            </div>

            <div className="px-[6px]">
              <h6 className="font-hg text-[16px] font-[700] text-[#048BC4]">
                Experienced Guidance
              </h6>

              <p className="text-[14px] font-[500] text-[#9D9C9A]">
                Benefit from our knowledge and experience throughout the selling
                journey.
              </p>
            </div>
          </div>

          <div className="flex w-[206px] flex-col justify-center text-center">
            <div className="flex justify-center">
              <img
                src="/images/sale/image02.svg"
                className="h-[165px] w-[165px]"
                alt="image02"
              />
            </div>

            <div className="px-[6px]">
              <h6 className="font-hg text-[16px] font-[700] text-[#048BC4]">
                Maximum Exposure
              </h6>

              <p className="text-[14px] font-[500] text-[#9D9C9A]">
                Showcase your property to a wide audience. Our platform attracts
                potential buyers actively seeking Marriott Vacation Club
                opportunities.
              </p>
            </div>
          </div>

          <div className="flex w-[206px] flex-col justify-center text-center">
            <div className="flex justify-center">
              <img
                src="/images/sale/image03.svg"
                className="h-[165px] w-[165px]"
                alt="image03"
              />
            </div>

            <div className="px-[6px]">
              <h6 className="font-hg text-[16px] font-[700] text-[#048BC4]">
                Effortless Listing
              </h6>

              <p className="text-[14px] font-[500] text-[#9D9C9A]">
                Create your property listing with ease. Provide essential
                details and highlight the unique features of your MVC
                membership.
              </p>
            </div>
          </div>

          <div className="flex w-[206px] flex-col justify-center text-center">
            <div className="flex justify-center">
              <img
                src="/images/sale/image04.svg"
                className="h-[165px] w-[165px]"
                alt="image04"
              />
            </div>

            <div className="px-[6px]">
              <h6 className="font-hg text-[16px] font-[700] text-[#048BC4]">
                Secure Transactions
              </h6>

              <p className="text-[14px] font-[500] text-[#9D9C9A]">
                Rest assured that your transaction is secure. We prioritize the
                safety and satisfaction, implementing best practices to protect
                your interests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

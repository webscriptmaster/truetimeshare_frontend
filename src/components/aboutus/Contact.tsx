"use client";

import ButtonExt from "@/components/_uiext/ButtonExt";

export default function Contact() {
  return (
    <section>
      <h2 className="font-hg my-[36px] text-center text-[36px] font-[700] text-[#048BC4] lg:text-left">
        Here We Are
      </h2>

      <div className="flex flex-wrap justify-center gap-[24px] text-center md:justify-between">
        <div className="flex w-[292px] flex-col gap-[12px] rounded-[16px] bg-[#FFFFFF] px-[36px] py-[24px] shadow-lg">
          <div className="mt-[12px] text-[24px] font-[500] text-[#15100D]">
            Give us a call
          </div>

          <div className="flex justify-center py-[12px]">
            <img src="/images/aboutus/image02.png" alt="image02" />
          </div>

          <a
            className="text-[24px] font-[700] text-[#048BC4]"
            href={`tel:${process.env.NEXT_PUBLIC_SUPPORT_PHONE}`}
          >
            {process.env.NEXT_PUBLIC_SUPPORT_PHONE}
          </a>

          <span className="text-[13px] font-[600] text-[#999999]">
            Available: 7 Days a Week
            <br /> 10am-10pm (ET)
          </span>
        </div>

        <div className="flex w-[292px] flex-col gap-[12px] rounded-[16px] bg-[#FFFFFF] px-[24px] py-[24px] shadow-lg">
          <div className="mt-[12px] text-[24px] font-[500] text-[#15100D]">
            Send us an email
          </div>

          <div className="flex justify-center py-[12px]">
            <img src="/images/aboutus/image03.png" alt="image03" />
          </div>

          <a
            className="mb-[12px] text-[13px] font-[400] text-[#999999]"
            href={`mailto:${process.env.NEXT_PUBLIC_BROKER_EMAIL}`}
          >
            {process.env.NEXT_PUBLIC_BROKER_EMAIL}
          </a>

          <div>
            <ButtonExt>Send Email</ButtonExt>
          </div>
        </div>

        <div className="flex w-[292px] flex-col gap-[12px] rounded-[16px] bg-[#FFFFFF] px-[24px] py-[24px] shadow-lg">
          <div className="mt-[12px] text-[24px] font-[500] text-[#15100D]">
            Send us a text
          </div>

          <div className="flex justify-center py-[12px]">
            <img src="/images/aboutus/image04.png" alt="image04" />
          </div>

          <a
            className="mb-[12px] text-[13px] font-[400] text-[#999999]"
            href={`tel:${process.env.NEXT_PUBLIC_SUPPORT_PHONE}`}
          >
            {process.env.NEXT_PUBLIC_SUPPORT_PHONE}
          </a>

          <div>
            <ButtonExt>Send us a text</ButtonExt>
          </div>
        </div>

        <div className="flex w-[292px] flex-col gap-[48px] rounded-[16px] bg-[#FFFFFF] px-[36px] py-[24px] shadow-lg">
          <div className="mt-[12px] flex text-[24px] font-[500] text-[#15100D]">
            Follow us in social media
          </div>

          <div className="flex flex-col gap-[30px] ">
            <div className="flex flex-row items-center justify-around">
              <img
                src="/images/aboutus/icon04.png"
                className="h-[25px] w-[25px]"
                alt="icon04"
              />
              <img
                src="/images/aboutus/line.png"
                className="h-[16px] w-[1px]"
                alt="line"
              />
              <img
                src="/images/aboutus/icon05.png"
                className="h-[25px] w-[25px]"
                alt="icon05"
              />
              <img
                src="/images/aboutus/line.png"
                className="h-[16px] w-[1px]"
                alt="line"
              />
              <img
                src="/images/aboutus/icon06.png"
                className="h-[25px] w-[25px]"
                alt="icon06"
              />
            </div>

            <div className="flex justify-center">
              <div className="flex flex-row items-center gap-[24px]">
                <img
                  src="/images/aboutus/icon07.png"
                  className="h-[25px] w-[25px]"
                  alt="icon07"
                />

                <img
                  src="/images/aboutus/line.png"
                  className="h-[16px] w-[1px]"
                  alt="line"
                />

                <img
                  src="/images/aboutus/icon08.png"
                  className="h-[25px] w-[25px]"
                  alt="icon08"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

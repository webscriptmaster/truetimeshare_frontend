"use client";

import { LuPhoneCall } from "react-icons/lu";
import { TbMessageHeart } from "react-icons/tb";
import ContactForm from "../_shared/ContactForm";

export default function SupportCustomer() {
  return (
    <>
      <div className="flex flex-col gap-[8px]">
        <div className="text-center text-[20px] font-[400] uppercase text-[#4F4F4F] md:text-left">
          Need further assistance?
        </div>

        <h1 className="font-hg text-center text-[36px] font-[900] text-[#048BC4] md:text-left">
          Request Customer Support
        </h1>

        <div className="text-center text-[20px] font-[400] text-[#4F4F4F] md:text-left">
          Fill the form below and we will get back to you shortly
        </div>
      </div>

      <div className="mt-[60px] flex flex-col justify-between gap-[80px] md:flex-row">
        <div className="flex w-full flex-col rounded-[26px] bg-[#048BC41A] p-[40px] md:max-w-[400px]">
          <h2 className="font-hg text-[24px] font-[700] text-[#048BC4]">
            We're here to help!
          </h2>

          <div className="mt-[24px] text-[16px] font-[400] text-[#4F4F4F]">
            Can't find what you're looking for? Send us a message, we will get
            back to you soon.
          </div>

          <div className="mt-[32px] flex items-center justify-between">
            <div className="h-[1px] w-auto flex-1 bg-[#4F4F4F80]" />
            <div className="px-[8px] text-center text-[#4F4F4F]">OR</div>
            <div className="h-[1px] w-auto flex-1 bg-[#4F4F4F80]" />
          </div>

          <div className="mt-[24px] text-[16px] font-[400] text-[#4F4F4F]">
            You can reach out to us by calling us or sending us an email
          </div>

          <div className="mt-[32px] flex items-center gap-[12px]">
            <LuPhoneCall className="text-[20px] text-[#FD9074]" />
            <a
              href={`tel:${process.env.NEXT_PUBLIC_SUPPORT_PHONE}`}
              className="text-[16px] font-[400] text-[#048BC4]"
            >
              {process.env.NEXT_PUBLIC_SUPPORT_PHONE}
            </a>
          </div>

          <div className="mt-[24px] flex items-center gap-[12px]">
            <TbMessageHeart className="text-[20px] text-[#FD9074]" />
            <a
              href={`mailto:${process.env.NEXT_PUBLIC_BROKER_EMAIL}`}
              className="text-[16px] font-[400] text-[#048BC4]"
            >
              {process.env.NEXT_PUBLIC_BROKER_EMAIL}
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </>
  );
}

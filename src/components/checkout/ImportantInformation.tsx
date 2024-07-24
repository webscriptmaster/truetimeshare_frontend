"use client";

import Link from "next/link";

import { useState } from "react";

import { RiShieldCheckFill } from "react-icons/ri";
import { TbLockSquareRoundedFilled } from "react-icons/tb";

import ButtonExt from "@/components/_uiext/ButtonExt";
import SuccessfulDialog from "./SuccessfulDialog";

export default function ImportantInformation() {
  const [open, setOpen] = useState(false);

  const handleConfirmBookingClick = () => {
    setOpen(true);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-1">
        <div className="flex items-center gap-[16px] rounded-t-[6px] bg-[#ECF2F5] px-[12px] py-[16px]">
          <RiShieldCheckFill className="text-[24px] text-[#FA5B32]" />
          <div className="text-[18px] font-[500] text-[#FA5B32]">
            Important information about your booking
          </div>
        </div>

        <div className="flex flex-col gap-[16px] rounded-b-[6px] bg-[#FFFFFF] p-[32px]">
          <ol className="list-inside list-decimal">
            {[
              "This rate is non-refundable. If you change or cancel your booking you will not get a refund or credit to use for a future stay.",
              "Stay extensions will require a new reservation.",
              "Front desk staff will greet guests on arrival",
              "No refunds will be issued for late check-in or early check-out."
            ].map((text) => (
              <li key={text} className="text-[15px] font-[400] text-[#333333]">
                {text}
              </li>
            ))}
          </ol>

          <div className="text-[15px] font-[400] text-[#4F4F4F]">
            By clicking the button below, I acknowledge that I have reviewed the{" "}
            <Link href="/privacy" className="text-[#2F80ED]">
              Privacy Statement
            </Link>{" "}
            and have reviewed and accept the{" "}
            <Link href="/privacy" className="text-[#2F80ED]">
              Rules and Restrictions
            </Link>{" "}
            and{" "}
            <Link href="/terms" className="text-[#2F80ED]">
              Terms of Use.
            </Link>
          </div>

          <div className="flex items-center gap-[8px] text-[14px] font-[400] text-[#4F4F4F]">
            <TbLockSquareRoundedFilled className="text-[20px] text-[#219653]" />
            We use secure transmission and encrypted storage to protect your
            personal information
          </div>

          <div className="flex justify-end">
            <ButtonExt
              className="font-hg text-[16px] font-[600]"
              onClick={handleConfirmBookingClick}
            >
              Confirm Booking
            </ButtonExt>
          </div>
        </div>
      </div>

      <SuccessfulDialog open={open} onOpenChange={setOpen} />
    </>
  );
}

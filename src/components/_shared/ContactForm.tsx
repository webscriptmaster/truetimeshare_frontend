"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import InputExt from "@/components/_uiext/InputExt";
import ButtonExt from "@/components/_uiext/ButtonExt";

export default function ContactForm() {
  return (
    <div className="flex w-full max-w-[768px] flex-col gap-[24px] rounded-[26px] bg-[#FFFFFF] p-[36px] shadow-md">
      <div className="flex flex-col justify-between gap-[24px] lg:flex-row lg:gap-[16px]">
        <div className="flex w-full flex-col gap-[12px]">
          <span className="text-[14px] font-[500] text-[#344054]">
            First name*
          </span>
          <InputExt placeholder="First name" />
        </div>

        <div className="flex w-full flex-col gap-[12px]">
          <span className="text-[14px] font-[500] text-[#344054]">
            Last name*
          </span>
          <InputExt placeholder="Last name" />
        </div>
      </div>

      <div className="flex w-full flex-col gap-[12px]">
        <span className="text-[14px] font-[500] text-[#344054]">Email*</span>
        <InputExt placeholder="your@email.com" />
      </div>

      <div className="flex w-full flex-col">
        <span className="mb-[12px] text-[14px] font-[500] text-[#344054]">
          Phone number
        </span>

        <div className="relative">
          <Input
            className="rounded-[34px] pl-[72px]"
            placeholder="+1 (555) 000-0000"
          />

          <div className="absolute bottom-[0px] top-[0px] w-[72px] p-[2px]">
            <Select>
              <SelectTrigger className="z-0 border-0 bg-transparent focus:ring-transparent focus:ring-offset-0">
                <SelectValue placeholder="US" />
              </SelectTrigger>

              <SelectContent className="z-0">
                <SelectGroup>
                  <SelectItem value="US">US</SelectItem>
                  <SelectItem value="UK">UK</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col gap-[12px]">
        <span className="text-[14px] font-[500] text-[#344054]">Message*</span>

        <div className="text-right">
          <Textarea className="rounded-[11.33px]" rows={5} />

          <span className="text-[14px] font-[500] text-[#667085]">0/500</span>
        </div>
      </div>

      <div>
        <div className="flex flex-row items-center gap-[12px]">
          <Checkbox id="guide" className="border border-[#D0D5DD]" />
          <label
            htmlFor="guide"
            className="text-[14px] font-[500] text-[#222B57]"
          >
            Yes, I want the{" "}
            <span className="font-[600]">
              Stress free guide to selling my timeshare.
            </span>
          </label>
        </div>

        <div className="flex flex-row items-center gap-[12px]">
          <Checkbox id="privacy" className="border border-[#D0D5DD]" />
          <label
            htmlFor="privacy"
            className="text-[14px] font-[500] text-[#222B57]"
          >
            I agree to your friendly{" "}
            <Link href="/privacy" className="font-[600] text-[#048BC4]">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/terms" className="font-[600] text-[#048BC4]">
              Terms of use
            </Link>
            .
          </label>
        </div>
      </div>

      <div className="flex justify-end">
        <ButtonExt>Submit</ButtonExt>
      </div>
    </div>
  );
}

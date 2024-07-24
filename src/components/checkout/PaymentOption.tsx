"use client";

import { useState } from "react";

import clsx from "clsx";
import { LuCreditCard } from "react-icons/lu";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function PaymentOption() {
  const [option, setOption] = useState("card");

  const handleOptionClick = (newOption: string) => () => {
    setOption(newOption);
  };

  return (
    <div className="flex flex-col lg:flex-1">
      <div className="flex items-center gap-[16px] rounded-t-[6px] bg-[#F4F1F1] px-[12px] py-[16px]">
        <LuCreditCard className="text-[24px] text-[#048BC4]" />
        <div className="text-[18px] font-[500] text-[#048BC4]">
          Payment Options
        </div>
      </div>

      <div className="flex flex-1 flex-col rounded-b-[6px] bg-[#FFFFFF]">
        <div className="flex gap-[14px] px-[32px] py-[10px]">
          <Button
            className={clsx(
              "rounded-[0] bg-transparent text-[14px] font-[400] text-[#333333] hover:border-b-[4px] hover:border-[#EA4B22] hover:bg-transparent",
              option === "card" ? "border-b-[2px] border-[#FA5B32]" : ""
            )}
            onClick={handleOptionClick("card")}
          >
            Debit/Credit Card
          </Button>
          <Button
            className={clsx(
              "rounded-[0] bg-transparent text-[14px] font-[400] text-[#333333] hover:border-b-[4px] hover:border-[#EA4B22] hover:bg-transparent",
              option === "paypal" ? "border-b-[2px] border-[#FA5B32]" : ""
            )}
            onClick={handleOptionClick("paypal")}
          >
            Paypal
          </Button>
        </div>

        <div className="flex gap-[8px] px-[32px] py-[10px]">
          <img alt="Card" src="/images/checkout/card_01.svg" />
          <img alt="Card" src="/images/checkout/card_02.svg" />
          <img alt="Card" src="/images/checkout/card_03.svg" />
          <img alt="Card" src="/images/checkout/card_04.svg" />
        </div>

        <div className="flex flex-col gap-[16px] p-[32px]">
          <div className="w-full">
            <Label className="text-[14px] font-[500] text-[#181818]">
              Debit/Credit Card Number
            </Label>
            <Input className="rounded-[34px] bg-[#F2F2F2]" />
          </div>

          <div className="w-full">
            <Label className="text-[14px] font-[500] text-[#181818]">
              Name on Card
            </Label>
            <Input className="rounded-[34px] bg-[#F2F2F2]" />
          </div>

          <div className="flex flex-col justify-between gap-[20px] md:flex-row">
            <div className="w-full">
              <Label className="text-[14px] font-[500] text-[#181818]">
                Expiration Date
              </Label>

              <Select>
                <SelectTrigger className="rounded-[34px] bg-[#F2F2F2]">
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Jan</SelectItem>
                  <SelectItem value="2">Feb</SelectItem>
                  <SelectItem value="3">Mar</SelectItem>
                  <SelectItem value="4">Apr</SelectItem>
                  <SelectItem value="5">May</SelectItem>
                  <SelectItem value="6">Jun</SelectItem>
                  <SelectItem value="7">Jul</SelectItem>
                  <SelectItem value="8">Aug</SelectItem>
                  <SelectItem value="9">Sep</SelectItem>
                  <SelectItem value="10">Oct</SelectItem>
                  <SelectItem value="11">Nov</SelectItem>
                  <SelectItem value="12">Dec</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="w-full">
              <Label className="text-[14px] font-[500] text-[#181818]">
                &nbsp;
              </Label>
              <Select>
                <SelectTrigger className="rounded-[34px] bg-[#F2F2F2]">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                  <SelectItem value="2021">2021</SelectItem>
                  <SelectItem value="2020">2020</SelectItem>
                  <SelectItem value="2019">2019</SelectItem>
                  <SelectItem value="2018">2018</SelectItem>
                  <SelectItem value="2017">2017</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-[20px] md:flex-row">
            <div className="w-full">
              <Label className="text-[14px] font-[500] text-[#181818]">
                CVV
              </Label>
              <Input className="rounded-[34px] bg-[#F2F2F2]" />
            </div>

            <div className="w-full">
              <Label className="text-[14px] font-[500] text-[#181818]">
                Billing Zip Code
              </Label>
              <Input className="rounded-[34px] bg-[#F2F2F2]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

export default function OfferForm() {
  return (
    <div className="rounded-[17px] bg-[#FFFFFF] shadow-md">
      <div className="flex flex-col gap-[24px] rounded-[26px] p-[36px]">
        <div className="flex flex-col justify-between gap-[24px] lg:flex-row">
          <div className="flex w-full flex-col gap-[12px]">
            <span className="text-[14px] font-[500] text-[#344054]">
              First name*
            </span>

            <Input
              className="rounded-[34px] pl-[16px]"
              placeholder="First name"
            />
          </div>

          <div className="flex w-full flex-col gap-[12px]">
            <span className="text-[14px] font-[500] text-[#344054]">
              Last name*
            </span>
            <Input
              className="rounded-[34px] pl-[16px]"
              placeholder="Last name"
            />
          </div>
        </div>

        <div className="flex w-full flex-col gap-[12px]">
          <span className="text-[14px] font-[500] text-[#344054]">Email*</span>

          <Input
            className="rounded-[34px] pl-[16px]"
            placeholder="you@email.com"
          />
        </div>

        <div className="flex w-full flex-col">
          <span className="mb-[12px] text-[14px] font-[500] text-[#344054]">
            Phone number
          </span>

          <div className="absolute flex">
            <Select>
              <SelectTrigger className="box-shadow-none relative left-[5px] top-[34px] w-auto border-hidden bg-transparent focus:ring-transparent focus:ring-offset-0">
                <SelectValue placeholder="US" />
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  <SelectItem value="us">US</SelectItem>
                  <SelectItem value="uk">UK</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <Input
            className="rounded-[34px] pl-[60px]"
            placeholder="+1 (555) 000-0000"
          />

          <span className="mt-[10px] text-[14px] font-[500] text-[#667085]">
            You can skip phone number
          </span>
        </div>

        <div className="flex flex-col gap-[12px]">
          <span className="text-[14px] font-[500] text-[#344054]">
            Address*
          </span>

          <Input
            className="rounded-[34px] pl-[16px]"
            placeholder="Street Address"
          />
        </div>

        <div className="flex flex-col justify-between gap-[16px] lg:flex-row">
          <div className="flex w-full flex-col gap-[12px]">
            <span className="text-[14px] font-[500] text-[#344054]">City</span>

            <Input className="rounded-[34px] pl-[16px]" placeholder="City" />
          </div>

          <div className="flex w-full flex-col gap-[12px]">
            <span className="text-[14px] font-[500] text-[#344054]">State</span>

            <Input className="rounded-[34px] pl-[16px]" placeholder="State" />
          </div>

          <div className="flex w-full flex-col gap-[12px]">
            <span className="text-[14px] font-[500] text-[#344054]">
              Zip Code
            </span>

            <Input
              className="rounded-[34px] pl-[16px]"
              placeholder="Zip Code"
            />
          </div>
        </div>

        <div className="flex flex-col justify-between gap-[16px] lg:flex-row">
          <div className="flex w-full flex-col gap-[12px]">
            <span className="text-[14px] font-[500] text-[#344054]">
              Already a DVC Member*
            </span>

            <div className="rounded-[34px]">
              <Select>
                <SelectTrigger className="w-full rounded-[34px] pl-[16px] text-[#667085]">
                  <SelectValue placeholder="Buyer Pays" />
                </SelectTrigger>

                <SelectContent className="rounded-b-[20px]">
                  <div className="flex w-full flex-col gap-[12px]">
                    <SelectItem
                      value="Name01"
                      className="h-[44px] rounded-[34px] border bg-transparent"
                    >
                      item1
                    </SelectItem>

                    <SelectItem
                      value="Name01"
                      className="h-[44px] rounded-[34px] border bg-transparent"
                    >
                      item2
                    </SelectItem>
                  </div>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex w-full flex-col gap-[12px]">
            <span className="text-[14px] font-[500] text-[#344054]">
              Financing?*
            </span>

            <div className="rounded-[34px]">
              <Select>
                <SelectTrigger className="w-full rounded-[34px] pl-[16px] text-[#667085]">
                  <SelectValue placeholder="Buyer Pays" />
                </SelectTrigger>

                <SelectContent className="rounded-b-[20px]">
                  <div className="flex w-full flex-col gap-[12px]">
                    <SelectItem
                      value="Name01"
                      className="h-[44px] rounded-[34px] border bg-transparent"
                    >
                      item1
                    </SelectItem>

                    <SelectItem
                      value="Name01"
                      className="h-[44px] rounded-[34px] border bg-transparent"
                    >
                      item2
                    </SelectItem>
                  </div>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex w-full flex-col gap-[12px]">
            <span className="text-[14px] font-[500] text-[#344054]">
              Preferred Agent
            </span>

            <div className="rounded-[34px]">
              <Select>
                <SelectTrigger className="w-full rounded-[34px] pl-[16px] text-[#667085]">
                  <SelectValue placeholder="Buyer Pays" />
                </SelectTrigger>

                <SelectContent className="rounded-b-[20px]">
                  <div className="flex w-full flex-col gap-[12px]">
                    <SelectItem
                      value="Name01"
                      className="h-[44px] rounded-[34px] border bg-transparent"
                    >
                      item1
                    </SelectItem>

                    <SelectItem
                      value="Name01"
                      className="h-[44px] rounded-[34px] border bg-transparent"
                    >
                      item2
                    </SelectItem>
                  </div>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[12px]">
          <span className="text-[14px] font-[500] text-[#344054]">
            Comments
          </span>

          <Textarea
            className="pl-[16px]"
            rows={6}
            placeholder="Any other comments or questions to add to your offer?"
          />

          <span className="text-right text-[14px] font-[500] text-[#667085]">
            0/500
          </span>
        </div>

        <div>
          <div className="flex flex-row items-center gap-[12px]">
            <Checkbox className="border border-[#D0D5DD] focus:border-[#FA5B32] data-[state=checked]:border-[#FA5B32] data-[state=checked]:bg-transparent data-[state=checked]:text-[#FA5B32]" />
            <p className="text-[14px] font-[500] text-[#222B57]">
              I agree to your friendly Privacy Policy.
            </p>
          </div>

          <div className="mt-[12px] flex justify-end">
            <Dialog>
              <DialogTrigger>
                <Button className="rounded-[34px] bg-[#FA5B32] px-[24px] text-[16px] font-[400] text-[#F9F8F5] hover:bg-[#eA4B22]">
                  Send My Offer
                </Button>
              </DialogTrigger>

              <DialogContent className="md:min-w-[629px]">
                <section className="flex justify-center">
                  <div className="flex flex-col justify-center gap-[24px] rounded-[16px] bg-[#FFFFFF] p-[24px] pt-[60px]">
                    <div className="flex justify-center">
                      <img src="/images/sale/success.png" alt="success" />
                    </div>

                    <h3 className="text-center text-[20px] font-[700]">
                      Thank You for Your Offer!
                    </h3>

                    <div className="text-center text-[16px] font-[400]">
                      Thank you for submitting your offer! We appreciate your
                      interest and will carefully review the details. Our team
                      will get back to you as soon as possible. If you have any
                      urgent questions, feel free to contact our support team.
                      We look forward to the possibility of working together!
                    </div>
                    <Link href="/" className="flex justify-center">
                      <Button className="w-[150px] rounded-[34px] bg-[#FA5B32] text-[16px] font-[600] text-[#F9F8F5] hover:bg-[#eA4B22]">
                        Go to Home
                      </Button>
                    </Link>
                  </div>
                </section>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}

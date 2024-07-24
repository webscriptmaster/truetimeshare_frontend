"use client";

import Link from "next/link";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function CreateList() {
  return (
    <div>
      <h2 className="text-center text-[36px] font-[900] text-[#048BC4]">
        List Your MVC Property for Sale
      </h2>

      <div className="mb-[64px] mt-[12px] text-center text-[20px] font-[700] text-[#9D9C9A]">
        Start Your Journey
      </div>

      <div className="flex justify-center">
        <div className="flex min-w-[300px] flex-col gap-[24px] rounded-[26px] bg-[#FFFFFF] p-[36px] shadow-md lg:w-[50%]">
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
            <span className="text-[14px] font-[500] text-[#344054]">
              Email*
            </span>
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
              Resort*
            </span>

            <div className="rounded-[34px]">
              <Select>
                <SelectTrigger className="w-full rounded-[34px] text-[#667085]">
                  <SelectValue placeholder="Select from list" />
                </SelectTrigger>

                <SelectContent className="rounded-b-[20px]">
                  <div className="flex w-full flex-col gap-[12px]">
                    <SelectItem
                      value="Name01"
                      className="h-[44px] rounded-[34px] border bg-transparent"
                    >
                      MVC Resort Name
                    </SelectItem>

                    <SelectItem
                      value="Name01"
                      className="h-[44px] rounded-[34px] border bg-transparent"
                    >
                      MVC Resort Name
                    </SelectItem>

                    <SelectItem
                      value="Name01"
                      className="h-[44px] rounded-[34px] border bg-transparent"
                    >
                      MVC Resort Name
                    </SelectItem>

                    <SelectItem
                      value="Name01"
                      className="h-[44px] rounded-[34px] border bg-transparent"
                    >
                      MVC Resort Name
                    </SelectItem>

                    <SelectItem
                      value="Name01"
                      className="h-[44px] rounded-[34px] border bg-transparent"
                    >
                      MVC Resort Name
                    </SelectItem>
                  </div>
                </SelectContent>
              </Select>
            </div>

            <div className="mt-[12px] flex flex-col items-center gap-[12px] lg:flex-row">
              <div className="mb-[10px] flex w-full flex-col gap-[12px] lg:w-[230px]">
                <span className="text-[14px] font-[500] text-[#344054]">
                  Total points of Membership*
                </span>

                <div className="flex w-full">
                  <Input
                    type="number"
                    placeholder="0"
                    className="h-[44px] rounded-[34px] pl-[18px] text-[14px] font-[700] text-black"
                  />
                </div>
              </div>

              <div className="mt-[10px] w-full lg:flex-1">
                <div className="flex w-full flex-col gap-[2px] lg:w-[70%]">
                  <span className="pl-[12px] text-[14px] font-[500] text-[#344054]">
                    Use Year*
                  </span>

                  <div className="rounded-[34px]">
                    <Select>
                      <SelectTrigger className="w-full rounded-[34px] text-[#667085]">
                        <SelectValue placeholder="Select from list" />
                      </SelectTrigger>

                      <SelectContent className="rounded-b-[20px]">
                        <div className="flex w-full flex-col gap-[12px]">
                          <SelectItem
                            value="Name01"
                            className="h-[44px] rounded-[34px] border bg-transparent"
                          >
                            February
                          </SelectItem>

                          <SelectItem
                            value="Name01"
                            className="h-[44px] rounded-[34px] border bg-transparent"
                          >
                            March
                          </SelectItem>

                          <SelectItem
                            value="Name01"
                            className="h-[44px] rounded-[34px] border bg-transparent"
                          >
                            April
                          </SelectItem>

                          <SelectItem
                            value="Name01"
                            className="h-[44px] rounded-[34px] border bg-transparent"
                          >
                            May
                          </SelectItem>
                        </div>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-[12px] flex w-full flex-col gap-[12px]">
              <span className="text-[14px] font-[500] text-[#344054]">
                Do you own Multiple Contracts?*
              </span>

              <RadioGroup defaultValue="option-one" className="flex flex-row">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="option-one"
                    className="border border-[#667085] data-[state=checked]:border-[#FA5B32] data-[state=checked]:bg-transparent data-[state=checked]:text-[#FA5B32]"
                    id="option-one"
                  />
                  <Label htmlFor="option-one">Yes</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="option-two"
                    className="border border-[#667085] data-[state=checked]:border-[#FA5B32] data-[state=checked]:bg-transparent data-[state=checked]:text-[#FA5B32]"
                    id="option-two"
                  />
                  <Label htmlFor="option-two">No</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="mt-[12px] flex flex-row items-center gap-[12px]">
              <Checkbox className="border border-[#D0D5DD] focus:border-[#FA5B32] data-[state=checked]:border-[#FA5B32] data-[state=checked]:bg-transparent data-[state=checked]:text-[#FA5B32]" />
              <p className="text-[14px] font-[500] text-[#222B57]">
                I agree to your friendly Privacy Policy.
              </p>
            </div>

            <div className="mt-[12px] flex justify-end">
              <Dialog>
                <DialogTrigger>
                  <Button className="rounded-[34px] bg-[#FA5B32] px-[24px] text-[16px] font-[400] text-[#F9F8F5] hover:bg-[#eA4B22]">
                    Create your Listing
                  </Button>
                </DialogTrigger>

                <DialogContent className="md:min-w-[629px]">
                  <section className="flex justify-center">
                    <div className="flex flex-col justify-center gap-[24px] rounded-[16px] bg-[#FFFFFF] p-[24px] pt-[60px]">
                      <div className="flex justify-center">
                        <img src="/images/sale/success.png" alt="success" />
                      </div>

                      <h3 className="text-center text-[20px] font-[700]">
                        Success! Your Marriott Vacation Club Property Listing is
                        on Its Way
                      </h3>

                      <div className="text-center text-[16px] font-[400]">
                        Thank you for submitting your information! Your Marriott
                        Vacation Club property listing is now under review. Our
                        team will ensure everything is in order, and your
                        listing will be live soon. Get ready for potential
                        buyers to discover your amazing opportunity!
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
    </div>
  );
}

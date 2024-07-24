"use client";

import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaStar } from "react-icons/fa";

import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";

export default function FilterBox() {
  return (
    <div className="flex w-full min-w-[300px] flex-col gap-[16px] sm:w-auto">
      <div className="flex flex-col gap-[24px] rounded-[8px] border border-[#E0E0E0] bg-[#ECF2F5] p-[16px]">
        <div className="text-[16px] font-[500] text-[#181818]">
          Search by property name
        </div>

        <div className="relative">
          <Input
            className="bg-transparent pl-[28px]"
            placeholder="eg. Beach westpalm"
          />
          <HiMagnifyingGlass className="absolute left-[4px] top-[10px] text-[20px] " />
        </div>
      </div>

      <div className="flex flex-col rounded-[8px] border border-[#E0E0E0] bg-[#ECF2F5] ">
        <div className="p-[16px] text-[16px] font-[500] text-[#181818]">
          Your budget per day
        </div>

        <div className="flex flex-col gap-[16px] border-t border-t-[#E0E0E0] bg-[#FFFFFF] p-[16px]">
          <div className="flex justify-between">
            <div className="flex items-center gap-[8px]">
              <Checkbox id="budget_0" className="h-[20px] w-[20px]" />
              <Label
                htmlFor="budget_0"
                className="text-[14px] font-[400] text-[#333333]"
              >
                $ 0 - $ 200
              </Label>
            </div>
            <span className="text-[14px] font-[400] text-[#333333]">200</span>
          </div>

          <div className="flex justify-between">
            <div className="flex items-center gap-[8px]">
              <Checkbox id="budget_1" className="h-[20px] w-[20px]" />
              <Label
                htmlFor="budget_1"
                className="text-[14px] font-[400] text-[#333333]"
              >
                $ 200 - $ 500
              </Label>
            </div>
            <span className="text-[14px] font-[400] text-[#333333]">100</span>
          </div>

          <div className="flex justify-between">
            <div className="flex items-center gap-[8px]">
              <Checkbox id="budget_2" className="h-[20px] w-[20px]" />
              <Label
                htmlFor="budget_2"
                className="text-[14px] font-[400] text-[#333333]"
              >
                $ 500 - $ 1,000
              </Label>
            </div>
            <span className="text-[14px] font-[400] text-[#333333]">15</span>
          </div>

          <div className="flex justify-between">
            <div className="flex items-center gap-[8px]">
              <Checkbox id="budget_3" className="h-[20px] w-[20px]" />
              <Label
                htmlFor="budget_3"
                className="text-[14px] font-[400] text-[#333333]"
              >
                $ 1,000 - $ 2,000
              </Label>
            </div>
            <span className="text-[14px] font-[400] text-[#333333]">12</span>
          </div>

          <div className="flex justify-between">
            <div className="flex items-center gap-[8px]">
              <Checkbox id="budget_4" className="h-[20px] w-[20px]" />
              <Label
                htmlFor="budget_4"
                className="text-[14px] font-[400] text-[#333333]"
              >
                $ 2,000 - $ 5,000
              </Label>
            </div>
            <span className="text-[14px] font-[400] text-[#333333]">230</span>
          </div>

          <div className="flex justify-between">
            <Label
              htmlFor="budget-own"
              className="text-[14px] font-[400] text-[#333333]"
            >
              Set your own budget
            </Label>
            <Switch id="budget-own" />
          </div>
        </div>
      </div>

      <div className="flex flex-col rounded-[8px] border border-[#E0E0E0] bg-[#ECF2F5] ">
        <div className="p-[16px] text-[16px] font-[500] text-[#181818]">
          Rating
        </div>

        <div className="flex flex-col gap-[16px] border-t border-t-[#E0E0E0] bg-[#FFFFFF] p-[16px]">
          <div className="text-[14px] font-[400] text-[#333333]">
            Show only ratings more than
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="px-[14px]">
              1 <FaStar className="text-[#F2994A]" />
            </Button>
            <Button variant="outline" className="px-[14px]">
              2 <FaStar className="text-[#F2994A]" />
            </Button>
            <Button variant="outline" className="px-[14px]">
              3 <FaStar className="text-[#F2994A]" />
            </Button>
            <Button variant="outline" className="px-[14px]">
              4 <FaStar className="text-[#F2994A]" />
            </Button>
            <Button variant="outline" className="px-[14px]">
              5 <FaStar className="text-[#F2994A]" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col rounded-[8px] border border-[#E0E0E0] bg-[#ECF2F5] ">
        <div className="p-[16px] text-[16px] font-[500] text-[#181818]">
          Number of bedrooms
        </div>

        <div className="flex flex-col gap-[16px] border-t border-t-[#E0E0E0] bg-[#FFFFFF] p-[16px]">
          <div className="flex justify-between">
            <div className="flex items-center gap-[8px]">
              <Checkbox id="bedroom-0" className="h-[20px] w-[20px]" />
              <Label
                htmlFor="bedroom-0"
                className="text-[14px] font-[400] text-[#333333]"
              >
                1
              </Label>
            </div>
            <span className="text-[14px] font-[400] text-[#333333]">200</span>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-[8px]">
              <Checkbox id="bedroom-1" className="h-[20px] w-[20px]" />
              <Label
                htmlFor="bedroom-1"
                className="text-[14px] font-[400] text-[#333333]"
              >
                2
              </Label>
            </div>
            <span className="text-[14px] font-[400] text-[#333333]">100</span>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-[8px]">
              <Checkbox id="bedroom-2" className="h-[20px] w-[20px]" />
              <Label
                htmlFor="bedroom-2"
                className="text-[14px] font-[400] text-[#333333]"
              >
                3
              </Label>
            </div>
            <span className="text-[14px] font-[400] text-[#333333]">15</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col rounded-[8px] border border-[#E0E0E0] bg-[#ECF2F5] ">
        <div className="p-[16px] text-[16px] font-[500] text-[#181818]">
          Occupancy
        </div>

        <div className="flex flex-col gap-[16px] border-t border-t-[#E0E0E0] bg-[#FFFFFF] p-[16px]">
          <div className="flex justify-between">
            <div className="flex items-center gap-[8px]">
              <Checkbox id="occupancy-0" className="h-[20px] w-[20px]" />
              <Label
                htmlFor="occupancy-0"
                className="text-[14px] font-[400] text-[#333333]"
              >
                4
              </Label>
            </div>
            <span className="text-[14px] font-[400] text-[#333333]">200</span>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-[8px]">
              <Checkbox id="occupancy-1" className="h-[20px] w-[20px]" />
              <Label
                htmlFor="occupancy-1"
                className="text-[14px] font-[400] text-[#333333]"
              >
                6
              </Label>
            </div>
            <span className="text-[14px] font-[400] text-[#333333]">100</span>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-[8px]">
              <Checkbox id="occupancy-2" className="h-[20px] w-[20px]" />
              <Label
                htmlFor="occupancy-2"
                className="text-[14px] font-[400] text-[#333333]"
              >
                8
              </Label>
            </div>
            <span className="text-[14px] font-[400] text-[#333333]">15</span>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-[8px]">
              <Checkbox id="occupancy-3" className="h-[20px] w-[20px]" />
              <Label
                htmlFor="occupancy-3"
                className="text-[14px] font-[400] text-[#333333]"
              >
                10
              </Label>
            </div>
            <span className="text-[14px] font-[400] text-[#333333]">8</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col rounded-[8px] border border-[#E0E0E0] bg-[#ECF2F5] ">
        <div className="p-[16px] text-[16px] font-[500] text-[#181818]">
          Activities
        </div>

        <div className="flex flex-col gap-[16px] border-t border-t-[#E0E0E0] bg-[#FFFFFF] p-[16px]">
          <div className="flex justify-between">
            <div className="flex items-center gap-[8px]">
              <Checkbox id="activity-0" className="h-[20px] w-[20px]" />
              <Label
                htmlFor="activity-0"
                className="text-[14px] font-[400] text-[#333333]"
              >
                Fishing
              </Label>
            </div>
            <span className="text-[14px] font-[400] text-[#333333]">100</span>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-[8px]">
              <Checkbox id="activity-1" className="h-[20px] w-[20px]" />
              <Label
                htmlFor="activity-1"
                className="text-[14px] font-[400] text-[#333333]"
              >
                Hiking
              </Label>
            </div>
            <span className="text-[14px] font-[400] text-[#333333]">15</span>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-[8px]">
              <Checkbox id="activity-2" className="h-[20px] w-[20px]" />
              <Label
                htmlFor="activity-2"
                className="text-[14px] font-[400] text-[#333333]"
              >
                Beach
              </Label>
            </div>
            <span className="text-[14px] font-[400] text-[#333333]">12</span>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-[8px]">
              <Checkbox id="activity-3" className="h-[20px] w-[20px]" />
              <Label
                htmlFor="activity-3"
                className="text-[14px] font-[400] text-[#333333]"
              >
                Cycling
              </Label>
            </div>
            <span className="text-[14px] font-[400] text-[#333333]">230</span>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-[8px]">
              <Checkbox id="activity-4" className="h-[20px] w-[20px]" />
              <Label
                htmlFor="activity-4"
                className="text-[14px] font-[400] text-[#333333]"
              >
                Sauna
              </Label>
            </div>
            <span className="text-[14px] font-[400] text-[#333333]">12</span>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-[8px]">
              <Checkbox id="activity-5" className="h-[20px] w-[20px]" />
              <Label
                htmlFor="activity-5"
                className="text-[14px] font-[400] text-[#333333]"
              >
                Night lights
              </Label>
            </div>
            <span className="text-[14px] font-[400] text-[#333333]">230</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col rounded-[8px] border border-[#E0E0E0] bg-[#ECF2F5] ">
        <div className="p-[16px] text-[16px] font-[500] text-[#181818]">
          Popular Filters
        </div>

        <div className="flex flex-col gap-[16px] border-t border-t-[#E0E0E0] bg-[#FFFFFF] p-[16px]">
          <div className="flex justify-between">
            <div className="flex items-center gap-[8px]">
              <Checkbox id="filter-0" className="h-[20px] w-[20px]" />
              <Label
                htmlFor="filter-0"
                className="text-[14px] font-[400] text-[#333333]"
              >
                Free cancellation
              </Label>
            </div>
            <span className="text-[14px] font-[400] text-[#333333]">200</span>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-[8px]">
              <Checkbox id="filter-1" className="h-[20px] w-[20px]" />
              <Label
                htmlFor="filter-1"
                className="text-[14px] font-[400] text-[#333333]"
              >
                Spa
              </Label>
            </div>
            <span className="text-[14px] font-[400] text-[#333333]">100</span>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-[8px]">
              <Checkbox id="filter-2" className="h-[20px] w-[20px]" />
              <Label
                htmlFor="filter-2"
                className="text-[14px] font-[400] text-[#333333]"
              >
                Beach front
              </Label>
            </div>
            <span className="text-[14px] font-[400] text-[#333333]">15</span>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-[8px]">
              <Checkbox id="filter-3" className="h-[20px] w-[20px]" />
              <Label
                htmlFor="filter-3"
                className="text-[14px] font-[400] text-[#333333]"
              >
                Hot tub / jacuzzi
              </Label>
            </div>
            <span className="text-[14px] font-[400] text-[#333333]">12</span>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-[8px]">
              <Checkbox id="filter-4" className="h-[20px] w-[20px]" />
              <Label
                htmlFor="filter-4"
                className="text-[14px] font-[400] text-[#333333]"
              >
                No prepayment
              </Label>
            </div>
            <span className="text-[14px] font-[400] text-[#333333]">230</span>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-[8px]">
              <Checkbox id="filter-5" className="h-[20px] w-[20px]" />
              <Label
                htmlFor="filter-5"
                className="text-[14px] font-[400] text-[#333333]"
              >
                Book without credit card
              </Label>
            </div>
            <span className="text-[14px] font-[400] text-[#333333]">12</span>
          </div>
        </div>
      </div>
    </div>
  );
}

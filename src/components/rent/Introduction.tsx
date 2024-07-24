"use client";

import { BiBuildings } from "react-icons/bi";
import { PiHouseLine } from "react-icons/pi";
import {
  GiAtSea,
  GiCruiser,
  GiIsland,
  GiCampingTent,
  GiMountains
} from "react-icons/gi";
import { LuSailboat } from "react-icons/lu";
import { RiCaravanLine } from "react-icons/ri";
import { BsSignpostSplit } from "react-icons/bs";

import { IPropertyCategory } from "@/types/interfaces";
import RoleSwitcher from "../_shared/RoleSwitcher";

function PropertyCategoryItem(props: IPropertyCategory) {
  const { icon, name } = props;

  return (
    <div className="flex flex-col items-center justify-center gap-[8px]">
      <div className="flex h-[72px] w-[72px] items-center justify-center rounded-[50%] bg-[#FEE3DC]">
        {icon}
      </div>

      <div className="text-[12px] font-[600] text-[#0000007A]">{name}</div>
    </div>
  );
}

function PropertyCategory() {
  const categories: IPropertyCategory[] = [
    {
      _id: "1",
      icon: <BiBuildings className="text-[24px] text-[#FA5B32]" />,
      name: "Hotels"
    },
    {
      _id: "2",
      icon: <PiHouseLine className="text-[24px] text-[#FA5B32]" />,
      name: "Houses"
    },
    {
      _id: "3",
      icon: <GiAtSea className="text-[24px] text-[#FA5B32]" />,
      name: "Seaside"
    },
    {
      _id: "4",
      icon: <GiCruiser className="text-[24px] text-[#FA5B32]" />,
      name: "Cruise"
    },
    {
      _id: "5",
      icon: <GiIsland className="text-[24px] text-[#FA5B32]" />,
      name: "Islands"
    },
    {
      _id: "6",
      icon: <GiCampingTent className="text-[24px] text-[#FA5B32]" />,
      name: "Camping"
    },
    {
      _id: "7",
      icon: <GiMountains className="text-[24px] text-[#FA5B32]" />,
      name: "Mountains"
    },
    {
      _id: "8",
      icon: <LuSailboat className="text-[24px] text-[#FA5B32]" />,
      name: "Ponds"
    },
    {
      _id: "9",
      icon: <RiCaravanLine className="text-[24px] text-[#FA5B32]" />,
      name: "Caravan"
    },
    {
      _id: "10",
      icon: <BsSignpostSplit className="text-[24px] text-[#FA5B32]" />,
      name: "Countryside"
    }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-[48px]">
      {categories.map((c) => (
        <PropertyCategoryItem key={c._id} {...c} />
      ))}
    </div>
  );
}

export default function Introduction() {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="font-hg text-center text-[40px] font-[700] text-[#048BC4]">
        Your Journey Starts with a Search
      </h1>

      <div className="mt-[52px] flex justify-center">
        <RoleSwitcher selected="rent" />
      </div>

      <div className="mt-[52px]">
        <PropertyCategory />
      </div>
    </div>
  );
}

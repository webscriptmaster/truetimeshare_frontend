"use client";

import { LuSearch } from "react-icons/lu";

import { Input } from "@/components/ui/input";

import Available from "@/components/overview/Available";
import Rented from "@/components/overview/Rented";
import Booked from "@/components/overview/Booked";
import NewProperty from "@/components/overview/NewProperty";
import NewOpening from "@/components/overview/NewOpening";

import useAuthStore from "@/zustand/Auth";

export default function Overview() {
  const auth = useAuthStore();

  return (
    <div className="flex flex-col">
      <section className="mb-[54px] mt-[12px] flex justify-center">
        <div className="flex w-full flex-col gap-[8px] lg:w-9/12">
          <h1 className="font-hg text-center text-[36px] font-[900] text-[#048BC4]">
            Your Property Portfolio at a Glance
          </h1>

          <div className="text-center text-[20px] font-[500] text-[#9D9C9A]">
            Welcome
            {!!auth.user?.firstName && !!auth.user?.lastName
              ? `, ${auth.user?.firstName} ${auth.user?.lastName}`
              : ``}
            ! This page provides you with a comprehensive overview of your
            timeshare properties, empowering you to manage and maximize, manage
            and maintain your portfolio of vacation ownership effortlessly.
          </div>
        </div>
      </section>

      <section className="flex flex-col">
        <div className="flex flex-col gap-[20px] lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-[12px]">
            <h2 className="font-hg text-[24px] font-[600] text-[#048BC4]">
              Overview of My Properties
            </h2>

            <div className="relative">
              <Input
                placeholder="Search"
                className="w-[300px] pl-[30px] text-[14px] font-[400] text-[#9AA6AC]"
              />

              <LuSearch className="absolute left-[8px] top-[12px] text-[18px] text-[#9AA6AC]" />
            </div>
          </div>

          <div className="flex justify-start gap-[16px] lg:justify-end">
            <NewProperty />

            <NewOpening />
          </div>
        </div>
      </section>

      <section className="mt-[24px] grid gap-[12px] md:grid-cols-2 lg:grid-cols-3">
        <Available />
        <Rented />
        <Booked />
      </section>
    </div>
  );
}

"use client";

import { ITimeshareItem } from "@/types/interfaces";

function Card(props: ITimeshareItem) {
  const { thumbnail, title, content } = props;

  return (
    <div className="flex min-w-[165px] flex-1 flex-col items-center">
      <img src={thumbnail} alt="Thumbnail" className="w-[165px]" />

      <div className="font-hg mt-[36px] text-[16px] font-[700] text-[#048BC4]">
        {title}
      </div>

      <div className="mt-[8px] text-center text-[16px] font-[500] text-[#9D9C9A]">
        {content}
      </div>
    </div>
  );
}

export default function Timeshares() {
  const timeshareItems: ITimeshareItem[] = [
    {
      _id: "1",
      thumbnail: "/images/home/timeshare/01.svg",
      title: "Value",
      content:
        "Timeshares offer exceptional value for vacationers, allowing you to experience top-notch accommodations at a fraction of the cost"
    },
    {
      _id: "2",
      thumbnail: "/images/home/timeshare/02.svg",
      title: "Diversity",
      content:
        "Whether you are purchasing points, selling a legacy week or renting legacy or points, our wide selection of MVC specific inventory"
    },
    {
      _id: "3",
      thumbnail: "/images/home/timeshare/03.svg",
      title: "Quality",
      content:
        "Experience consistent Marriott® quality and comfort with MVC timeshare properties that are of the high standards"
    }
  ];
  return (
    <div className="flex flex-col gap-[8px]">
      <h1 className="font-hg text-center text-[36px] font-bold text-[#048BC4] md:text-left">
        What Sets Us Apart In The World Of Timeshares?
      </h1>

      <div className="flex flex-wrap gap-[20px] xl:gap-[4%]">
        <div className="w-full text-[20px] font-[500] text-[#9D9C9A] xl:w-[48%]">
          We are Marriott Vacation Club® superfans!
          <br />
          You will discover a wonderful assortment of ever changing inventory
          full of sought after Legacy Weeks and jam packed with points of all
          anniversary months.
          <br />
          All we do is MVC®.
          <br />
          Our focus is narrow and our expertise is vast.
          <br />
          No Upfront Fees. No Hidden Fees. No Surprises.
        </div>

        <div className="flex w-full flex-wrap gap-[48px] rounded-[24px] bg-[#ffffff] px-[24px] py-[48px] xl:w-[48%]">
          {timeshareItems.map((timeshare) => (
            <Card key={timeshare._id} {...timeshare} />
          ))}
        </div>
      </div>
    </div>
  );
}

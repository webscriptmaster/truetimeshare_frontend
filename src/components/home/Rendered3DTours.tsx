"use client";

import { ITourItem } from "@/types/interfaces";
import TourItem from "../_shared/TourItem";

export default function Rendered3DTours() {
  const tourItems: ITourItem[] = [
    {
      _id: "1",
      thumbnail: "/images/home/tour/01.png",
      title: "Exciting Discoveries And Adventures",
      content:
        "Our travels are different from all the others! We love our business and want to see...",
      price: 242,
      unit: "Person"
    },
    {
      _id: "2",
      thumbnail: "/images/home/tour/02.png",
      title: "Unforgettable Trip To Wild Sri Lanka",
      content:
        "Our travels are different from all the others! We love our business and want to see...",
      price: 242,
      unit: "Person"
    },
    {
      _id: "3",
      thumbnail: "/images/home/tour/03.png",
      title: "Exciting Discoveries And Adventures",
      content:
        "Our travels are different from all the others! We love our business and want to see...",
      price: 242,
      unit: "Person"
    }
  ];

  return (
    <div
      className="px-[24px] sm:px-[48px] md:px-[72px] lg:px-[96px]"
      style={{
        backgroundImage: "url('/images/home/airplane.png')",
        backgroundSize: "auto",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top right"
      }}
    >
      <h1 className="font-hg text-center text-[36px] font-bold text-[#048BC4]">
        Rendered 3D Tours
      </h1>

      <div className="mt-[8px] text-center text-[20px] font-[500] text-[#9D9C9A]">
        Travel far enough, meet yourself!
      </div>

      <div className="mt-[48px] flex flex-wrap justify-center gap-[16px] lg:justify-between">
        {tourItems.map((item) => (
          <TourItem key={item._id} {...item} />
        ))}
      </div>
    </div>
  );
}

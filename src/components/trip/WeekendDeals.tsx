"use client";

import CountDownTimer from "@/components/_shared/CountDownTimer";
import { IPropertyItem } from "@/types/interfaces";
import PropertyThumbnailItem from "../_shared/PropertyThumbnailItem";

export default function WeekendDeals() {
  const startedTimestamp = new Date();
  startedTimestamp.setHours(startedTimestamp.getHours() - 3);
  startedTimestamp.setMinutes(0);
  startedTimestamp.setSeconds(0);

  const propertyItems: IPropertyItem[] = [
    {
      _id: "1",
      thumbnail: "/images/home/property/01.png",
      price: 242,
      rating: 5.0,
      country: "US",
      state: "Maui",
      title: "Marriott’s Bali Nusa Dua Gardens",
      subtitle: "9.2/10 Wonderful (224)",
      content: "15K people going"
    },
    {
      _id: "2",
      thumbnail: "/images/home/property/02.png",
      price: 242,
      rating: 5.0,
      country: "US",
      state: "Maui",
      title: "Four Seasons Resort",
      subtitle: "9.2/10 Wonderful (224)",
      content: "15K people going"
    },
    {
      _id: "3",
      thumbnail: "/images/home/property/03.png",
      price: 242,
      rating: 5.0,
      country: "US",
      state: "Maui",
      title: "Marriott’s Bali Nusa Dua Terrace",
      subtitle: "9.2/10 Wonderful (224)",
      content: "15K people going"
    }
  ];

  return (
    <div className="mt-[115px] flex flex-col justify-center">
      <h1 className="font-hg text-center text-[36px] font-bold text-[#048BC4]">
        Last Minute Weekend Deals
      </h1>

      <div className="mt-[24px] flex justify-center gap-[6px] text-center text-[20px] font-normal text-[#4F4F4F]">
        Join our vibrant community of travel enthusiasts and discover a world of
        possibilities. Let True Timeshare LLC be your trusted companion in
        creating memorable and stress-free vacations.
      </div>

      <div className="mt-[24px]">
        <CountDownTimer
          startedTimestamp={startedTimestamp}
          durationSeconds={3600 * 6}
        />
      </div>

      <div className="mt-[60px] flex flex-wrap justify-center gap-[16px] lg:justify-between">
        {propertyItems.map((item) => (
          <PropertyThumbnailItem key={item._id} {...item} />
        ))}
      </div>
    </div>
  );
}

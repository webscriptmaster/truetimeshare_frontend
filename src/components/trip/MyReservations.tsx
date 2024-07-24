"use client";

import { IPropertyItem } from "@/types/interfaces";
import PropertyListItem from "../_shared/PropertyListItem";

export default function MyReservations() {
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
    }
  ];

  return (
    <div className="flex flex-col gap-[36px]">
      <h1 className="font-hg text-[32px] font-[700] text-[#048BC4]">
        My Reservations
      </h1>
      {propertyItems.map((item) => (
        <PropertyListItem key={item._id} {...item} />
      ))}
    </div>
  );
}

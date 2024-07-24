"use client";

import { useState } from "react";

import { IPropertyItem } from "@/types/interfaces";

import { SHOW_BY } from "@/utils/constants";
import FilterHeader from "./FilterHeader";
import Pagination from "./Pagination";
import FilterBox from "./FilterBox";
import PropertyListHeader from "./PropertyListHeader";
import SearchBox from "../_shared/SearchBox";
import PropertyThumbnailItem from "../_shared/PropertyThumbnailItem";
import PropertyListItem from "../_shared/PropertyListItem";

export default function Properties() {
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
    },
    {
      _id: "4",
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
      _id: "5",
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
      _id: "6",
      thumbnail: "/images/home/property/03.png",
      price: 242,
      rating: 5.0,
      country: "US",
      state: "Maui",
      title: "Marriott’s Bali Nusa Dua Terrace",
      subtitle: "9.2/10 Wonderful (224)",
      content: "15K people going"
    },
    {
      _id: "7",
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
      _id: "8",
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
      _id: "9",
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

  const [showBy, setShowBy] = useState(SHOW_BY.THUMBNAIL);
  const [showAllFilter, setShowAllFilter] = useState(false);

  const handleShowByChange = (newShowBy: string) => {
    setShowBy(newShowBy);
  };

  const handleShowAllFilterChange = (newShowAllFilter: boolean) => {
    setShowAllFilter(newShowAllFilter);
  };

  return (
    <div className="flex flex-col">
      <SearchBox />

      <div className="mt-[80px]">
        <FilterHeader
          showBy={showBy}
          onShowByChange={handleShowByChange}
          showAllFilter={showAllFilter}
          onShowAllFilterChange={handleShowAllFilterChange}
        />
      </div>

      <div className="mt-[48px] flex flex-col justify-between gap-[32px] sm:flex-row">
        {showAllFilter && <FilterBox />}

        {showBy === SHOW_BY.THUMBNAIL && (
          <div className="flex flex-wrap justify-between gap-[24px]">
            {propertyItems.map((item) => (
              <PropertyThumbnailItem key={item._id} {...item} />
            ))}
          </div>
        )}

        {showBy === SHOW_BY.LIST && (
          <div className="flex flex-1 flex-col gap-[40px]">
            <PropertyListHeader />

            <div className="flex flex-col gap-[24px]">
              {propertyItems.map((item) => (
                <PropertyListItem key={item._id} {...item} />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mb-[120px] mt-[60px]">
        <Pagination />
      </div>
    </div>
  );
}

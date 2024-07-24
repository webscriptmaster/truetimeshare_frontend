"use client";

import { FaPlayCircle } from "react-icons/fa";

import { useRouter } from "next/navigation";
import { IGuideItem } from "@/types/interfaces";
import { Button } from "../ui/button";

function BigCard(props: IGuideItem) {
  const { thumbnail, title, content } = props;

  return (
    <div className="flex h-full flex-col rounded-[8px] bg-[#F9F9F9]">
      <img src={thumbnail} alt="Guide" />

      <div className="flex gap-[16px] px-[24px] py-[12px]">
        <div className="flex flex-col gap-[8px]">
          <h2 className="font-hg text-[20px] font-[700] text-[#048BC4]">
            {title}
          </h2>

          <div className="text-[16px] font-[400] text-[#576074]">{content}</div>
        </div>

        <div className="flex w-[72px] items-center justify-center">
          <FaPlayCircle className="text-[48px] text-[#FA5B32]" />
        </div>
      </div>
    </div>
  );
}

function SmallCard(props: IGuideItem) {
  const router = useRouter();
  const { thumbnail, title, content } = props;

  const handleReadClick = () => {
    router.push("/blog/1");
  };

  return (
    <div className="flex h-full gap-[20px] rounded-[8px] bg-[#F9F9F9] p-[12px]">
      <img src={thumbnail} alt="Guide" />

      <div className="flex flex-col gap-[24px]">
        <h2 className="font-hg text-[20px] font-[700] text-[#048BC4]">
          {title}
        </h2>

        <div className="text-[16px] font-[400] text-[#576074]">{content}</div>

        <div className="flex justify-end">
          <Button
            variant="link"
            className="font-hg text-[16px] font-[600] text-[#FA5B32]"
            onClick={handleReadClick}
          >
            Read
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function GuidesTips() {
  const bigGuide: IGuideItem = {
    _id: "1",
    thumbnail: "/images/home/tip/01.png",
    title: "Marriott Vacation Club Pulse®, San Francisco",
    content:
      "Located in the historic Fisherman’s Wharf district, Marriott Vacation Club Pulse®, San Francisco, is within walking distance to some of the city’s most popular attractions."
  };

  const smallGuides: IGuideItem[] = [
    {
      _id: "2",
      thumbnail: "/images/home/tip/02.png",
      title: "The Westin Los Cabos Resort Villas & Spa Baja Point",
      content:
        "Perched on gentle cliffs overlooking the Sea of Cortez, this magnificent architectural landmark is also a cherished vacation retreat."
    },
    {
      _id: "3",
      thumbnail: "/images/home/tip/03.png",
      title: "Marriott Vacation Club® at Los Suenos",
      content:
        "You'll find the first Marriott Vacation Club® resort in Central America amid the unspoiled tranquility of Costa Rica's lush Green Coast."
    }
  ];

  return (
    <div className="mt-[96px] px-[24px] sm:px-[48px] md:px-[72px] lg:px-[96px]">
      <div className="mb-[8px] text-center text-[20px] font-[400] uppercase text-[#4F4F4F]">
        Recent Story Entries
      </div>

      <h1 className="font-hg text-center text-[36px] font-bold text-[#048BC4]">
        Unlock The World Of Timeshares With Our Guides & Tips
      </h1>

      <div className="mt-[32px] flex flex-wrap justify-center gap-[20px] lg:justify-between lg:gap-[4%]">
        <div className="w-full lg:w-[48%]">
          <BigCard {...bigGuide} />
        </div>

        <div className="flex w-full flex-1 flex-col gap-[20px] lg:w-[48%]">
          {smallGuides.map((guide) => (
            <SmallCard key={guide._id} {...guide} />
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import dynamic from "next/dynamic";
import { IVideo } from "@/types/interfaces";

const ReactPlayer = dynamic(() => import("react-player/lazy"), {
  ssr: false
});

export default function SupportVideo() {
  const videos: IVideo[] = [
    {
      _id: "1",
      title: "The Bear",
      url: "https://www.w3schools.com/tags/movie.mp4",
      duration: "1:35"
    },
    {
      _id: "2",
      title: "The Bear",
      url: "https://www.w3schools.com/tags/movie.mp4",
      duration: "1:35"
    },
    {
      _id: "3",
      title: "The Bear",
      url: "https://www.w3schools.com/tags/movie.mp4",
      duration: "1:35"
    },
    {
      _id: "4",
      title: "The Bear",
      url: "https://www.w3schools.com/tags/movie.mp4",
      duration: "1:35"
    },
    {
      _id: "5",
      title: "The Bear",
      url: "https://www.w3schools.com/tags/movie.mp4",
      duration: "1:35"
    },
    {
      _id: "6",
      title: "The Bear",
      url: "https://www.w3schools.com/tags/movie.mp4",
      duration: "1:35"
    }
  ];

  return (
    <>
      <div className="flex flex-col gap-[8px]">
        <div className="text-center text-[20px] font-[400] uppercase text-[#4F4F4F]">
          Media Support
        </div>

        <h1 className="font-hg text-center text-[36px] font-[900] text-[#048BC4]">
          Video Guides
        </h1>

        <div className="text-center text-[20px] font-[400] text-[#4F4F4F]">
          A range of helpful video guides to get you started with TrueTimeshare
          LLC
        </div>
      </div>

      <div className="mt-[72px] w-full columns-1 gap-[32px] md:columns-2 lg:columns-3">
        {videos.map((v) => (
          <div
            key={v._id}
            className="mb-[32px] flex w-full flex-col gap-[12px] rounded-[16px] bg-[#FFFFFF] p-[24px]"
          >
            <ReactPlayer url={v.url} controls width="100%" height="auto" />

            <div className="flex items-center justify-between">
              <div className="text-[18px] font-[400] text-[#01303A]">
                {v.title}
              </div>
              <div className="text-[13px] font-[400] text-[#34484D]">
                {v.duration}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Props {
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

export default function ViewCard({
  image,
  title,
  subtitle,
  description
}: Props) {
  return (
    <section className="flex w-[340px] flex-col">
      <img className="h-[200px] w-auto" src={image} alt="Blog Thumbnail" />

      <div className="mt-[10px] flex-1 flex-col gap-[20px]">
        <div>
          <div className="text-[15px] font-[700] text-[#004638]">{title}</div>
          <div className="text-[15px] font-[300]">{subtitle}</div>
        </div>
        <div className="mt-[12px] text-[12px] font-[400] text-[#000000]">
          {description}
        </div>
      </div>

      <Link href="/blog/1" className="mt-[24px] flex items-center">
        <Button className="h-[40px] w-[133px] rounded-[34px] border border-[#FA5B32] bg-transparent px-[16px] py-[8px] text-[16px] font-[600] text-[#FA5B32] hover:bg-transparent">
          Read More
        </Button>
      </Link>
    </section>
  );
}

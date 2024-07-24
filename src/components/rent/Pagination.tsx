"use client";

import { MdKeyboardArrowRight } from "react-icons/md";

import { Button } from "@/components/ui/button";

export default function Pagination() {
  return (
    <div className="flex items-center justify-center">
      <Button className="border border-[#FA5B32] bg-[#FFCFC0] text-[#FA5B32] hover:bg-transparent">
        1
      </Button>
      <Button className="border-0 bg-transparent text-[#00000080] hover:bg-transparent">
        2
      </Button>
      <Button className="border-0 bg-transparent text-[#00000080] hover:bg-transparent">
        3
      </Button>
      <Button className="border-0 bg-transparent text-[#00000080] hover:bg-transparent">
        ...
      </Button>
      <Button className="border-0 bg-transparent text-[#00000080] hover:bg-transparent">
        13
      </Button>
      <Button className="border-0 bg-transparent text-[#00000080] hover:bg-transparent">
        14
      </Button>
      <Button className="border border-[#00000080] bg-transparent text-[#00000080] hover:bg-transparent">
        <MdKeyboardArrowRight />
      </Button>
    </div>
  );
}

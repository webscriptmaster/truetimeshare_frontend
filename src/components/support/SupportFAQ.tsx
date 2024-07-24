"use client";

import { useState } from "react";

import { LuMinus, LuPlus } from "react-icons/lu";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible";
import { IFaq } from "@/types/interfaces";

function FAQItem(props: IFaq) {
  const { title, content } = props;
  const [open, setOpen] = useState(false);

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className="mb-[24px] flex break-inside-avoid flex-col gap-[16px] rounded-[16px] bg-[#FFFFFF] p-[32px]"
    >
      <CollapsibleTrigger className="flex w-full justify-between gap-[16px]">
        <div className="text-[22px] font-[500] text-[#4F4F4F]">{title}</div>
        {open && (
          <LuMinus className="rounded-[8px] bg-[#FA5B32] text-[40px] text-[#FFFFFF]" />
        )}
        {!open && (
          <LuPlus className="rounded-[8px] bg-[#F9F8F5] text-[40px] text-[#FA5B32]" />
        )}
      </CollapsibleTrigger>

      <CollapsibleContent className="text-[18px] font-[400] text-[#7A7979]">
        {content}
      </CollapsibleContent>
    </Collapsible>
  );
}

export default function SupportFAQ() {
  const faqs: IFaq[] = [
    {
      _id: "1",
      title: "Lorem ipsum sit dolore?",
      content:
        "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor"
    },
    {
      _id: "2",
      title: "Lorem ipsum sit dolore?",
      content:
        "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor"
    },
    {
      _id: "3",
      title: "Lorem ipsum sit dolore?",
      content:
        "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor"
    },
    {
      _id: "4",
      title: "Lorem ipsum sit dolore?",
      content:
        "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor"
    },
    {
      _id: "5",
      title: "Lorem ipsum sit dolore?",
      content:
        "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor"
    },
    {
      _id: "6",
      title: "Lorem ipsum sit dolore?",
      content:
        "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor"
    }
  ];

  return (
    <div className="flex flex-col">
      <div className="font-hg rounded-[18px] bg-[#FFFFFF] p-[36px] text-[24px] font-[700] text-[#4F4F4F]">
        FAQs
      </div>

      <div className="mt-[48px] columns-1 gap-[24px] rounded-[20px] bg-[#FDAD981A] px-[40px] py-[80px] md:columns-2">
        {faqs.map((faq) => (
          <FAQItem key={faq._id} {...faq} />
        ))}
      </div>
    </div>
  );
}

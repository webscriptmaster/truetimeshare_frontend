"use client";

import { useState } from "react";
import clsx from "clsx";

import { Rating } from "react-simple-star-rating";

import {
  BsEmojiSmile,
  BsEmojiHeartEyes,
  BsEmojiNeutral,
  BsEmojiFrown,
  BsEmojiTear
} from "react-icons/bs";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IReviewOption } from "@/types/interfaces";
import WriteReviewSuccess from "./WriteReviewSuccess";

export default function WriteReview() {
  const options: IReviewOption[] = [
    {
      _id: "1",
      icon: <BsEmojiHeartEyes className="text-[#FA5B32]" />,
      description: "HIGHLY SATISFIED"
    },
    {
      _id: "2",
      icon: <BsEmojiSmile className="text-[#FA5B32]" />,
      description: "SATISFIED"
    },
    {
      _id: "3",
      icon: <BsEmojiNeutral className="text-[#FA5B32]" />,
      description: "NEUTRAL"
    },
    {
      _id: "4",
      icon: <BsEmojiFrown className="text-[#FA5B32]" />,
      description: "DISSATISFIED"
    },
    {
      _id: "5",
      icon: <BsEmojiTear className="text-[#FA5B32]" />,
      description: "HIGHLY DISSATISFIED"
    }
  ];

  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selected, setSelected] = useState<IReviewOption | null>(null);
  const [msg, setMsg] = useState(
    "The Resort is a true gem! From the stunning location to the exceptional service, this place offers a dream vacation. The rooms are spacious and beautifully designed, the staff is incredibly friendly, and the dining options are top-notch."
  );

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMsg(e.target.value);
  };

  const handleSubmitClick = () => {
    setOpen(false);
    setSuccess(true);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <span className="font-[600] text-[#048BC4]">Write a Review</span>
        </DialogTrigger>

        <DialogContent className="w-2/3 max-w-[1000px] lg:w-1/2">
          <img src="/images/resort/review.png" alt="review" />

          <h2 className="text-[24px] font-[600] text-[#222B57]">
            Your opinion matters
          </h2>

          <div>
            <div className="text-[14px] font-[500] text-[#344054]">
              Rate with stars
            </div>
            <Rating
              initialValue={5}
              SVGclassName="inline-block"
              emptyClassName="hidden"
              size={18}
            />
          </div>

          <div className="flex flex-col gap-[8px]">
            <div className="flex flex-wrap justify-center gap-[8px] lg:gap-[40px]">
              {options.map((opt) => (
                <Button
                  key={opt._id}
                  onClick={() => setSelected(opt)}
                  className={clsx(
                    "flex h-[53px] w-full min-w-[180px] items-center justify-center gap-[6px] rounded-[34px] border border-[#E9E9E9] bg-transparent hover:border-[#FA5B32] hover:bg-transparent lg:max-w-[220px] xl:max-w-[250px]",
                    opt._id === selected?._id && "border-[#FA5B32]"
                  )}
                >
                  {opt.icon}

                  <span className="text-[16px] font-[600] text-[#222B57]">
                    {opt.description}
                  </span>
                </Button>
              ))}
            </div>
          </div>

          {selected && (
            <div className="flex flex-col">
              <div className="mb-[6px] text-[14px] font-[500] text-[#344054]">
                Message (optional)
              </div>

              <Textarea
                rows={6}
                className="text-[16px] font-[400] text-[#01303A]"
                value={msg ?? ""}
                onChange={handleMessageChange}
              />

              <span className="text-[14px] font-[500] text-[#667085]">
                {msg.length ?? 0}/500
              </span>
            </div>
          )}

          <div className="flex flex-col gap-[10px] border border-dashed p-[24px]">
            <div className="flex justify-center">
              <img src="/images/overview/file.png" alt="file" />
            </div>

            <div className="text-[14px] font-[400] text-[#01303A]">
              Browse and chose the files you want to upload from your computer
            </div>

            <div className="flex justify-center">
              <Input
                id="file"
                accept="images/*"
                type="file"
                placeholder="Up load"
                className="hidden"
              />

              <Button className="rounded-[34px] border border-[#FA5B32] bg-transparent text-[#FA5B32] hover:bg-transparent">
                Upload
              </Button>
            </div>
          </div>

          <div className="flex justify-end">
            <Button
              onClick={handleSubmitClick}
              className="rounded-[34px] bg-[#FA5B32] text-[16px] font-[500] text-[#F9F8F5] hover:bg-[#DA3B12]"
            >
              Submit
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <WriteReviewSuccess open={success} onOpenChange={setSuccess} />
    </>
  );
}

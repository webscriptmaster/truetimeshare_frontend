"use client";

import { useRouter } from "next/navigation";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Props {
  open: boolean;
  onOpenChange: (newOpen: boolean) => void;
}

export default function WriteReviewSuccess({ open, onOpenChange }: Props) {
  const router = useRouter();

  const handleGoToHomeClick = () => {
    router.push("/");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-1/2 max-w-[1000px] lg:w-1/3">
        <div className="flex justify-center">
          <img src="/images/resort/review.png" alt="review" />
        </div>

        <h2 className="text-center text-[20px] font-[700] text-[#222B57]">
          Thank You for Sharing Your Experience!
        </h2>

        <div className="text-center text-[16px] font-[400] text-[#4F4F4F]">
          Your feedback is invaluable. Your review has been submitted, and it
          will help us enhance our services. We appreciate your time and
          contribution!
        </div>

        <div className="flex justify-center">
          <Button
            onClick={handleGoToHomeClick}
            className="rounded-[34px] bg-[#FA5B32] text-[16px] font-[500] text-[#F9F8F5] hover:bg-[#DA3B12]"
          >
            Go to Home
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

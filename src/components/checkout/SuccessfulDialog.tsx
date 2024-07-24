"use client";

import { useRouter } from "next/navigation";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import ButtonExt from "@/components/_uiext/ButtonExt";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function SuccessfulDialog({ open, onOpenChange }: Props) {
  const router = useRouter();

  const handleViewTripClick = () => {
    router.push("/trip");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex flex-col items-center justify-center gap-[24px] py-[32px]">
        <img
          src="/images/checkout/booking-success.svg"
          alt="Booking Success"
          className="w-[240px]"
        />

        <h2 className="font-hg text-[20px] font-[700] text-[#222B57]">
          Booking Successful
        </h2>

        <p className="text-[16px] font-[400] text-[#4F4F4F]">
          Congratulations your reservation has been made.
        </p>

        <ButtonExt onClick={handleViewTripClick}>View Trip</ButtonExt>
      </DialogContent>
    </Dialog>
  );
}

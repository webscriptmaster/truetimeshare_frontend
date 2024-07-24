"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getSignup, setStage } from "@/redux/slices/signupSlice";

export default function EmailSignUp3() {
  const router = useRouter();
  const signup = useAppSelector(getSignup);
  const dispatch = useAppDispatch();

  const handleBackToSignin = () => {
    router.push("/signin");
    dispatch(setStage(1));
  };

  return (
    <div className="flex w-full max-w-[400px] flex-col md:w-[400px]">
      <div className="mb-[40px] flex justify-center">
        <img src="/images/check/inbox.svg" alt="inbox" />
      </div>

      <h3 className="font-hg mb-[12px] text-center text-[28px] font-[600] text-[#181818]">
        Check your Inbox
      </h3>

      <div className="mb-[40px] text-center text-[16px] font-[400] text-[#4F4F4F]">
        We have just emailed you the confirmation link to{" "}
        <span className="font-[500] text-[#333333]">{signup.data.email}.</span>{" "}
        It might take a few minutes to arrive.
      </div>

      <Button
        className="h-[40px] w-full rounded-[34px] bg-[#FA5B32] text-[16px] font-[600] text-[#F9F8F5] hover:bg-[#eA4B22]"
        onClick={handleBackToSignin}
      >
        Back to Sign In
      </Button>
    </div>
  );
}

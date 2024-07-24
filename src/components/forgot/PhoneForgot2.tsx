"use client";

import { useState } from "react";

import VerificationInput from "react-verification-input";
import { useTimer } from "react-timer-hook";

import { Button } from "@/components/ui/button";
import LoadingOverlay from "@/components/_shared/LoadingOverlay";
import { toastError } from "@/lib/toast";

import * as API from "@/api";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getForgot, setStage } from "@/redux/slices/forgotSlice";

export default function PhoneForgot2() {
  const forgot = useAppSelector(getForgot);
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState("");
  const [hasError, setHasError] = useState(false);
  const [resendable, setResendable] = useState(true);

  const resendInterval = 30;

  const {
    minutes,
    seconds,
    restart: restartTimer
  } = useTimer({
    expiryTimestamp: new Date(),
    autoStart: false,
    onExpire: () => {
      setResendable(true);
    }
  });

  const handleCodeChange = (newCode: string) => {
    if (hasError) {
      setHasError(false);
    }

    setCode(newCode);
  };

  const handleCodeComplete = (newCode: string) => {
    setCode(newCode);
  };

  const handleResendCode = async () => {
    try {
      setLoading(true);
      setResendable(false);

      await API.resendResetCode({ ...forgot.data });
      const newExpiryTimestamp = new Date();
      newExpiryTimestamp.setSeconds(
        newExpiryTimestamp.getSeconds() + resendInterval
      );
      restartTimer(newExpiryTimestamp, true);
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCancelClick = () => {
    dispatch(setStage(forgot.stage - 1));
  };

  const handleVerifyClick = async () => {
    try {
      setLoading(true);
      await API.verifyResetCode({
        phone: forgot.data.phone,
        code
      });
      dispatch(setStage(forgot.stage + 1));
    } catch (err: any) {
      console.error(err);
      if (err && err.response && err.response.data && err.response.data.msg) {
        toastError(err.response.data.msg);
      }
      setCode("");
      setHasError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <LoadingOverlay loading={loading} />

      <div className="flex w-full max-w-[400px] flex-col rounded-[12px] bg-[#FFFFFF] p-[24px] shadow-[0px_8px_8px_-4px_#10182808,0px_20px_24px_-4px_#10182814] md:w-[400px]">
        <div className="mb-[20px] flex justify-center">
          <img
            src="/images/signup/checkemail.png"
            className="h-[48px] w-[48px]"
            alt="Message Logo"
          />
        </div>

        <div className="font-hg mb-[8px] text-center text-[18px] font-[500] text-[#101828]">
          Please check your messages.
        </div>

        <div className="mb-[20px] text-center text-[14px] font-[400] text-[#667085]">
          Enter the 4-digit that we have sent via the phone number.
        </div>

        <div className="mb-[8px] flex justify-center">
          <VerificationInput
            autoFocus
            length={4}
            validChars="0-9"
            placeholder=""
            classNames={{
              container: "flex gap-[8px] justify-between w-full h-[80px]",
              character:
                "flex flex-col justify-center rounded-[8px] border border-[#FDAD98] text-center font-hg font-[500] text-[48px] text-[#FA5B32] p-[8px] w-[80px] h-[80px]",
              characterInactive: "",
              characterSelected: "shadow-[0px_1px_2px_0px_#1018280D]"
            }}
            value={code}
            onChange={handleCodeChange}
            onComplete={handleCodeComplete}
          />
        </div>

        {hasError && (
          <div className="mb-[12px] text-[14px] font-[400] text-[#D76464]">
            Wrong code, please try again
          </div>
        )}

        {resendable && (
          <div className="mb-[32px] text-[14px] font-[400] text-[#667085]">
            Didn’t get a code?{" "}
            <span
              className="cursor-pointer underline"
              onClick={handleResendCode}
            >
              Click to resend.
            </span>
          </div>
        )}

        {!resendable && (
          <div className="my-[32px] text-center text-[14px] font-[500] text-[#667085]">
            Send code again {minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}
          </div>
        )}

        <div className="flex gap-[12px]">
          <Button
            className="w-full rounded-[34px] border border-[#FA5B32] bg-transparent text-[16px] font-[600] text-[#FA5B32] hover:bg-transparent"
            onClick={handleCancelClick}
          >
            Cancel
          </Button>

          <Button
            className="w-full rounded-[34px] border bg-[#FA5B32] text-[16px] font-[600] text-[#FFFFFF] hover:bg-[#FA5B32]"
            disabled={code.length !== 4}
            onClick={handleVerifyClick}
          >
            Verify
          </Button>
        </div>
      </div>
    </>
  );
}

"use client";

import { SIGN_MODE } from "@/utils/constants";

import { useAppSelector } from "@/redux/hooks";
import { getForgot } from "@/redux/slices/forgotSlice";

import EmailForgot1 from "./EmailForgot1";
import EmailForgot2 from "./EmailForgot2";
import PhoneForgot1 from "./PhoneForgot1";
import PhoneForgot2 from "./PhoneForgot2";
import PhoneForgot3 from "./PhoneForgot3";

export default function Forgot() {
  const forgot = useAppSelector(getForgot);

  return (
    <>
      {forgot.mode === SIGN_MODE.EMAIL && forgot.stage === 1 && (
        <EmailForgot1 />
      )}

      {forgot.mode === SIGN_MODE.EMAIL && forgot.stage === 2 && (
        <EmailForgot2 />
      )}

      {forgot.mode === SIGN_MODE.PHONE && forgot.stage === 1 && (
        <PhoneForgot1 />
      )}

      {forgot.mode === SIGN_MODE.PHONE && forgot.stage === 2 && (
        <PhoneForgot2 />
      )}

      {forgot.mode === SIGN_MODE.PHONE && forgot.stage === 3 && (
        <PhoneForgot3 />
      )}
    </>
  );
}

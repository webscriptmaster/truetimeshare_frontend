"use client";

import { SIGN_MODE } from "@/utils/constants";

import { getSignup } from "@/redux/slices/signupSlice";
import { useAppSelector } from "@/redux/hooks";

import EmailSignUp1 from "./EmailSignUp1";
import EmailSignUp2 from "./EmailSignUp2";
import EmailSignUp3 from "./EmailSignUp3";
import PhoneSignUp1 from "./PhoneSignUp1";
import PhoneSignUp2 from "./PhoneSignUp2";
import PhoneSignUp3 from "./PhoneSignUp3";

export default function SignUp() {
  const signup = useAppSelector(getSignup);

  return (
    <>
      {signup.data.mode === SIGN_MODE.EMAIL && signup.stage === 1 && (
        <EmailSignUp1 />
      )}

      {signup.data.mode === SIGN_MODE.EMAIL && signup.stage === 2 && (
        <EmailSignUp2 />
      )}

      {signup.data.mode === SIGN_MODE.EMAIL && signup.stage === 3 && (
        <EmailSignUp3 />
      )}

      {signup.data.mode === SIGN_MODE.PHONE && signup.stage === 1 && (
        <PhoneSignUp1 />
      )}

      {signup.data.mode === SIGN_MODE.PHONE && signup.stage === 2 && (
        <PhoneSignUp2 />
      )}

      {signup.data.mode === SIGN_MODE.PHONE && signup.stage === 3 && (
        <PhoneSignUp3 />
      )}
    </>
  );
}

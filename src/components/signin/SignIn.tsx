"use client";

import { SIGN_MODE } from "@/utils/constants";
import useAuthStore from "@/zustand/Auth";

import EmailSignIn from "./EmailSignIn";
import PhoneSignIn from "./PhoneSignIn";

export default function SignIn() {
  const auth = useAuthStore();

  return (
    <>
      {auth.mode === SIGN_MODE.EMAIL && <EmailSignIn />}

      {auth.mode === SIGN_MODE.PHONE && <PhoneSignIn />}
    </>
  );
}

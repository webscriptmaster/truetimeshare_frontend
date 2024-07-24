import { Metadata } from "next";

import Logo from "@/components/_layout/Logo";
import SignUp from "@/components/signup/SignUp";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Sign Up`,
  description: `${SITE_TITLE} - Sign Up`
};

export default function SignUpPage() {
  return (
    <main className="h-[100vh] bg-[#F9F8F5]">
      <section className="px-[24px] pt-[24px] sm:px-[48px] md:px-[72px] lg:px-[96px]">
        <Logo />
      </section>

      <section className="mt-[88px] flex justify-center">
        <SignUp />
      </section>
    </main>
  );
}

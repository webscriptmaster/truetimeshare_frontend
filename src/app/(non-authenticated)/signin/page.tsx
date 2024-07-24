import { Metadata } from "next";

import Logo from "@/components/_layout/Logo";
import SignIn from "@/components/signin/SignIn";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Sign In`,
  description: `${SITE_TITLE} - Sign In`
};

export default function SignInPage() {
  return (
    <main className="h-[100vh] bg-[#F9F8F5]">
      <section className="px-[24px] pt-[24px] sm:px-[48px] md:px-[72px] lg:px-[96px]">
        <Logo />
      </section>

      <section className="mt-[88px] flex justify-center">
        <SignIn />
      </section>
    </main>
  );
}

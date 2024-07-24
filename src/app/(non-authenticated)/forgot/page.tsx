import { Metadata } from "next";

import Logo from "@/components/_layout/Logo";

import { SITE_TITLE } from "@/utils/constants";
import Forgot from "@/components/forgot/Forgot";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Forgot Password`,
  description: `${SITE_TITLE} - Forgot Password`
};

export default function ForgotPage() {
  return (
    <main className="h-[100vh] bg-[#F9F8F5]">
      <section className="ml-[148px] pt-[24px]">
        <Logo />
      </section>

      <section className="mt-[88px] flex justify-center">
        <Forgot />
      </section>
    </main>
  );
}

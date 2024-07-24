import { Metadata } from "next";

import Logo from "@/components/_layout/Logo";
import Reset from "@/components/reset/Reset";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Reset Password`,
  description: `${SITE_TITLE} - Reset Password`
};

interface Props {
  params: {
    token: string;
  };
}

export default function ResetPage({ params }: Props) {
  const { token } = params;

  return (
    <main className="h-[100vh] bg-[#F9F8F5]">
      <section className="ml-[148px] pt-[24px]">
        <Logo />
      </section>

      <section className="mt-[88px] flex justify-center">
        <Reset token={token} />
      </section>
    </main>
  );
}

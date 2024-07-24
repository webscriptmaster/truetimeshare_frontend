import { Metadata } from "next";

import Logo from "@/components/_layout/Logo";
import VerifyToken from "@/components/verify/VerifyToken";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Verify`,
  description: `${SITE_TITLE} - Verify`
};

interface Props {
  params: {
    token: string;
  };
}

export default function VerifyTokenPage({ params }: Props) {
  const { token } = params;

  return (
    <main className="h-[100vh] bg-[#F9F8F5]">
      <section className="px-[24px] pt-[24px] sm:px-[48px] md:px-[72px] lg:px-[96px]">
        <Logo />
      </section>

      <section className="mt-[88px] flex justify-center">
        <VerifyToken token={token} />
      </section>
    </main>
  );
}

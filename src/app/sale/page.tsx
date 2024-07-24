import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";

import Header from "@/components/_layout/Header";
import Footer from "@/components/_layout/Footer";

import Main from "@/components/sale/Main";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Sale`,
  description: `${SITE_TITLE} - Sale`
};

export default function SalePage() {
  return (
    <>
      <Header />

      <main className="bg-[#F9F8F5] px-[24px] pb-[120px] pt-[70px] sm:px-[48px] md:px-[72px] lg:px-[96px]">
        <Main />
      </main>

      <Footer />
    </>
  );
}

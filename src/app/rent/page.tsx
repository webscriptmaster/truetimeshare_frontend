import { Metadata } from "next";

import Header from "@/components/_layout/Header";
import Footer from "@/components/_layout/Footer";

import Introduction from "@/components/rent/Introduction";
import Properties from "@/components/rent/Properties";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Rent`,
  description: `${SITE_TITLE} - Rent`
};

export default function RentPage() {
  return (
    <>
      <Header />

      <main className="flex flex-col bg-[#F9F8F5]">
        <section className="mt-[72px] px-[24px] sm:px-[48px] md:px-[72px] lg:px-[96px]">
          <Introduction />
        </section>

        <section className="mt-[64px] px-[24px] sm:px-[48px] md:px-[72px] lg:px-[96px]">
          <Properties />
        </section>
      </main>

      <Footer />
    </>
  );
}

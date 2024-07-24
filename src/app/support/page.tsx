import { Metadata } from "next";

import Header from "@/components/_layout/Header";
import Footer from "@/components/_layout/Footer";
import SupportHeader from "@/components/support/SupportHeader";

import { SITE_TITLE } from "@/utils/constants";
import SupportFAQ from "@/components/support/SupportFAQ";
import SupportCustomer from "@/components/support/SupportCustomer";
import SupportVideo from "@/components/support/SupportVideo";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Support`,
  description: `${SITE_TITLE} - Support`
};

export default function SupportPage() {
  return (
    <>
      <Header />

      <main className="bg-[#F9F8F5] pb-[120px] pt-[68px]">
        <section className="mb-[72px] px-[24px] sm:px-[48px] md:px-[72px] lg:px-[96px]">
          <SupportHeader />
        </section>

        <section className="mb-[120px] px-[24px] sm:px-[48px] md:px-[72px] lg:px-[96px]">
          <SupportFAQ />
        </section>

        <section className="mb-[120px] px-[24px] sm:px-[48px] md:px-[72px] lg:px-[96px]">
          <SupportCustomer />
        </section>

        <section className="px-[24px] sm:px-[48px] md:px-[72px] lg:px-[96px]">
          <SupportVideo />
        </section>
      </main>

      <Footer />
    </>
  );
}

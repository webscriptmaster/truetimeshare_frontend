import { Metadata } from "next";

import Header from "@/components/_layout/Header";
import Footer from "@/components/_layout/Footer";
import PrivacyHeader from "@/components/privacy/PrivacyHeader";
import PrivacyTOC from "@/components/privacy/PrivacyTOC";
import PrivacyContent from "@/components/privacy/PrivacyContent";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Privacy`,
  description: `${SITE_TITLE} - Privacy`
};

export default function PrivacyPage() {
  return (
    <>
      <Header />

      <main className="bg-[#F9F8F5] pb-[120px] pt-[68px]">
        <section className="flex flex-col px-[24px] sm:px-[48px] md:px-[72px] lg:px-[96px]">
          <PrivacyHeader />

          <div className="mt-[72px] flex gap-[64px]">
            <PrivacyTOC />
            <PrivacyContent />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

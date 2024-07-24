import { Metadata } from "next";

import Header from "@/components/_layout/Header";
import Footer from "@/components/_layout/Footer";
import TermsHeader from "@/components/terms/TermsHeader";
import TermsTOC from "@/components/terms/TermsTOC";
import TermsContent from "@/components/terms/TermsContent";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Terms`,
  description: `${SITE_TITLE} - Terms`
};

export default function TermsPage() {
  return (
    <>
      <Header />

      <main className="bg-[#F9F8F5] pb-[120px] pt-[68px]">
        <section className="flex flex-col px-[24px] sm:px-[48px] md:px-[72px] lg:px-[96px]">
          <TermsHeader />

          <div className="mt-[72px] flex gap-[64px]">
            <TermsTOC />
            <TermsContent />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

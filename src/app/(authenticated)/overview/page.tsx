import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
import Footer from "@/components/_layout/Footer";
import Overview from "@/components/overview/Overview";
import OverviewHeader from "@/components/overview/OverviewHeader";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Overview`,
  description: `${SITE_TITLE} - Overview`
};

export default function OverviewPage() {
  return (
    <>
      {/* <Header /> */}
      <OverviewHeader />

      <main className="flex flex-col bg-[#F9F8F5] px-[24px] pb-[80px] sm:px-[48px] md:px-[72px] lg:px-[96px]">
        <Overview />
      </main>

      <Footer />
    </>
  );
}

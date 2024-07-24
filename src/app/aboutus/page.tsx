import { Metadata } from "next";

import Header from "@/components/_layout/Header";
import Footer from "@/components/_layout/Footer";

import FineCollections from "@/components/_shared/FineCollections";
import ResaleMarketReport from "@/components/_shared/ResaleMarketReport";

import Introduction from "@/components/aboutus/Introduction";
import FavoriteMarriott from "@/components/aboutus/FavoriteMarriott";
import Contact from "@/components/aboutus/Contact";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - About Us`,
  description: `${SITE_TITLE} - About Us`
};

export default function AboutUsPage() {
  return (
    <>
      <Header />

      <main className="bg-[#F9F8F5] px-[24px] pb-[120px] sm:px-[48px] md:px-[72px] lg:px-[96px]">
        <Introduction />
        <FavoriteMarriott />
        <Contact />

        <section className="mt-[120px]">
          <FineCollections />
        </section>

        <section className="mt-[120px]">
          <ResaleMarketReport />
        </section>
      </main>

      <Footer />
    </>
  );
}

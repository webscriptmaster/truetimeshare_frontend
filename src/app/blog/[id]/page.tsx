import { Metadata } from "next";

import Header from "@/components/_layout/Header";
import Footer from "@/components/_layout/Footer";

import Hero from "@/components/blog/detail/Hero";
import Adventure from "@/components/blog/detail/Adventure";
import Highlight from "@/components/blog/detail/Highlight";

import ResaleMarketReport from "@/components/_shared/ResaleMarketReport";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Blog Detail`,
  description: `${SITE_TITLE} - Blog Detail`
};

export default function BlogDetailPage() {
  return (
    <>
      <Header />

      <main className="bg-[#F9F8F5] px-[24px] pb-[120px] pt-[72px] sm:px-[48px] md:px-[72px] lg:px-[96px]">
        <Hero />
        <Adventure />
        <Highlight />
        <ResaleMarketReport />
      </main>

      <Footer />
    </>
  );
}

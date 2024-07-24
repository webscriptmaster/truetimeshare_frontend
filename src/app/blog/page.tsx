import { Metadata } from "next";

import Header from "@/components/_layout/Header";
import Footer from "@/components/_layout/Footer";

import Title from "@/components/blog/Title";
import OwnerShip from "@/components/blog/OwnerShip";
import TravelTips from "@/components/blog/TravelTips";
import Industry from "@/components/blog/Industry";
import Vacation from "@/components/blog/Vacation";
import Resort from "@/components/blog/Resort";

import ResaleMarketReport from "@/components/_shared/ResaleMarketReport";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Blog`,
  description: `${SITE_TITLE} - Blog`
};

export default function BlogPage() {
  return (
    <>
      <Header />

      <main className="bg-[#F9F8F5]  px-[24px] py-[96px] sm:px-[48px] md:px-[72px] lg:px-[96px]">
        <Title />
        <OwnerShip />
        <TravelTips />
        <Industry />
        <Vacation />
        <Resort />
        <ResaleMarketReport />
      </main>

      <Footer />
    </>
  );
}

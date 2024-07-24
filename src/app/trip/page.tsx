import { Metadata } from "next";

import Header from "@/components/_layout/Header";
import Footer from "@/components/_layout/Footer";

import ResaleMarketReport from "@/components/_shared/ResaleMarketReport";
import FineCollections from "@/components/_shared/FineCollections";

import MyReservations from "@/components/trip/MyReservations";
import TopDestinations from "@/components/trip/TopDestinations";
import WeekendDeals from "@/components/trip/WeekendDeals";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Trip`,
  description: `${SITE_TITLE} - Trip`
};

export default function TripPage() {
  return (
    <>
      <Header />

      <main className="bg-[#F9F8F5] pb-[80px] pt-[72px]">
        <section className="px-[24px] sm:px-[48px] md:px-[72px] lg:px-[96px]">
          <MyReservations />
        </section>

        <section className="mt-[86px] px-[24px] sm:px-[48px] md:px-[72px] lg:px-[96px]">
          <TopDestinations />
        </section>

        <section className="mt-[100px] px-[24px] sm:px-[48px] md:px-[72px] lg:px-[96px]">
          <WeekendDeals />
        </section>

        <section className="mt-[36.5px] px-[24px] sm:px-[48px] md:px-[72px] lg:px-[96px]">
          <ResaleMarketReport />
        </section>

        <section className="mt-[64px] px-[24px] sm:px-[48px] md:px-[72px] lg:px-[96px]">
          <FineCollections />
        </section>
      </main>

      <Footer />
    </>
  );
}

import { Metadata } from "next";

import Header from "@/components/_layout/Header";
import Footer from "@/components/_layout/Footer";
import PointsForSale from "@/components/points/PointsForSale";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Points`,
  description: `${SITE_TITLE} - Points`
};

export default function PointsPage() {
  return (
    <>
      <Header />

      <main className="flex flex-col bg-[#F9F8F5]">
        <section className="mt-[22px] px-[24px] sm:px-[48px] md:px-[72px] lg:px-[96px]">
          <PointsForSale />
        </section>
      </main>

      <Footer />
    </>
  );
}

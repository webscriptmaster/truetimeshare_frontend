import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
import Header from "@/components/_layout/Header";
import Footer from "@/components/_layout/Footer";

import FineCollections from "@/components/_shared/FineCollections";
import ImageView from "@/components/offer/ImageView";
import ResortDetail from "@/components/offer/ResortDetail";
import ResortInfo from "@/components/offer/ResortInfo";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Offer Details`,
  description: `${SITE_TITLE} - Offer Details`
};

export default function OfferDetails() {
  return (
    <>
      <Header />

      <main>
        <section className="px-[96px] py-[24px]">
          <ImageView />
        </section>

        <section className="bg-[#F9F8F5] px-[96px] pb-[120px]">
          <div className="flex flex-col gap-[36px] pt-[45px] lg:flex-row">
            <ResortDetail />

            <ResortInfo />
          </div>

          <div className="mt-[120px]">
            <FineCollections />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

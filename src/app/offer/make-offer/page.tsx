import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
import Header from "@/components/_layout/Header";
import Footer from "@/components/_layout/Footer";

import FineCollections from "@/components/_shared/FineCollections";
import ImageView from "@/components/offer/ImageView";
import OfferHead from "@/components/offer/make-offer/OfferHead";
import OfferTable from "@/components/offer/make-offer/OfferTable";
import OfferForm from "@/components/offer/make-offer/OfferForm";
import OfferRule from "@/components/offer/make-offer/OfferRule";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Offer Details`,
  description: `${SITE_TITLE} - Offer Details`
};

export default function OfferDetails() {
  return (
    <>
      <Header />

      <main>
        <section className="bg-gradient-to-b from-[#F9F8F5] to-[#FFFFFF] px-[96px] py-[24px]">
          <ImageView />
        </section>

        <section className="bg-[#F9F8F5] px-[96px] pb-[120px] pt-[45px]">
          <div className="flex flex-col gap-[36px]">
            <OfferHead />

            <OfferTable />

            <OfferForm />

            <div className="mt-[24px]">
              <OfferRule />
            </div>
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

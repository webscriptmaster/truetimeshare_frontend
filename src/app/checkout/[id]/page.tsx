import { Metadata } from "next";

import { LuMapPin } from "react-icons/lu";

import Header from "@/components/_layout/Header";
import Footer from "@/components/_layout/Footer";

import SecureReservation from "@/components/checkout/SecureReservation";
import PaymentOption from "@/components/checkout/PaymentOption";
import PriceDetail from "@/components/checkout/PriceDetail";
import ViewReview from "@/components/checkout/ViewReview";
import RatingReview from "@/components/checkout/RatingReview";
import FeedbackReview from "@/components/checkout/FeedbackReview";
import ImportantInformation from "@/components/checkout/ImportantInformation";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Checkout Detail`,
  description: `${SITE_TITLE} - Checkout Detail`
};

export default function CheckoutDetailPage() {
  return (
    <>
      <Header />

      <main className="bg-[#F9F8F5] pb-[120px] pt-[60px]">
        <section className="flex flex-col gap-[16px] px-[24px] sm:px-[48px] md:px-[72px] lg:px-[96px]">
          <h1 className="text-[32px] font-[700] text-[#222B57]">
            Four Seasons Resort
          </h1>

          <div className="flex items-center gap-[6px]">
            <LuMapPin className="text-[20px] text-[#222B57]" />
            <div className="text-[14px] font-[400] text-[#333333]">
              Location address, Melbourne, Australia
            </div>
          </div>
        </section>

        <section className="mt-[36px] flex flex-col gap-[32px] px-[24px] sm:px-[48px] md:px-[72px] lg:flex-row lg:justify-between lg:px-[96px]">
          <ViewReview />
          <RatingReview />
          <FeedbackReview />
        </section>

        <section className="mt-[60px] flex flex-col px-[24px] sm:px-[48px] md:px-[72px] lg:px-[96px]">
          <h1 className="font-hg mb-[36px] text-[32px] font-[700] text-[#222B57]">
            Secure your reservation
          </h1>

          <div className="flex flex-col gap-[36px] lg:flex-row">
            <SecureReservation />
            <PaymentOption />
          </div>
        </section>

        <section className="mt-[36px] px-[24px] sm:px-[48px] md:px-[72px] lg:px-[96px]">
          <PriceDetail />
        </section>

        <section className="mt-[36px] px-[24px] sm:px-[48px] md:px-[72px] lg:px-[96px]">
          <ImportantInformation />
        </section>
      </main>

      <Footer />
    </>
  );
}

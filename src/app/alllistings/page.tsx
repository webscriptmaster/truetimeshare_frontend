import { Metadata } from "next";

import Header from "@/components/_layout/Header";
import Footer from "@/components/_layout/Footer";

import { SITE_TITLE } from "@/utils/constants";
import AllListings from "@/components/alllistings/AllListings";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - All Listings`,
  description: `${SITE_TITLE} - All Listings`
};

export default function AllListingsPage() {
  return (
    <>
      <Header />

      <main className="flex flex-col bg-[#F9F8F5]">
        <section className="mt-[22px] px-[24px] sm:px-[48px] md:px-[72px] lg:px-[96px]">
          <AllListings />
        </section>
      </main>

      <Footer />
    </>
  );
}

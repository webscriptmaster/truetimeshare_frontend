import { Metadata } from "next";

import ContactHeader from "@/components/contactus/ContactHeader";
import Header from "@/components/_layout/Header";
import Footer from "@/components/_layout/Footer";
import ContactForm from "@/components/_shared/ContactForm";
import FineCollections from "@/components/_shared/FineCollections";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Contact Us`,
  description: `${SITE_TITLE} - Contact Us`
};

export default function ContactUsPage() {
  return (
    <>
      <Header />

      <main className="bg-[#F9F8F5] px-[24px] pb-[120px] pt-[48px] sm:px-[48px] md:px-[72px] lg:px-[96px]">
        <section className="mb-[70px] flex justify-center">
          <ContactHeader />
        </section>

        <section className="mb-[120px] flex flex-col justify-between gap-[64px] md:flex-row">
          <div className="flex w-full justify-center md:w-1/2 md:max-w-[530px] md:justify-start">
            <img
              className="object-contain"
              src="/images/contactus/left.png"
              alt="Contact"
            />
          </div>

          <div className="flex flex-1 justify-end">
            <ContactForm />
          </div>
        </section>

        <section>
          <FineCollections />
        </section>
      </main>

      <Footer />
    </>
  );
}

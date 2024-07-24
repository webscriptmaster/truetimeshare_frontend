import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";

import Header from "@/components/_layout/Header";
import Footer from "@/components/_layout/Footer";
import Carousel from "@/components/home/Carousel";
import WeekendDeals from "@/components/home/WeekendDeals";
import Rendered3DTours from "@/components/home/Rendered3DTours";
import GuidesTips from "@/components/home/GuidesTips";
import Timeshares from "@/components/home/Timeshares";
import Reviews from "@/components/home/Reviews";
import FineCollections from "@/components/_shared/FineCollections";
import ResaleMarketReport from "@/components/_shared/ResaleMarketReport";
import ContactForm from "@/components/_shared/ContactForm";

import Banner from "@/components/landing/Banner";
import Sneak from "@/components/landing/Sneak";
import Service from "@/components/landing/Service";
import ResortSpa from "@/components/landing/ResortSpa";
import Logo from "@/components/_layout/Logo";
import LandingSignUp from "@/components/landing/LandingSignUp";
import BeTheFirstToKnow from "@/components/landing/BeTheFirstToKnow";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Landing`,
  description: `${SITE_TITLE} - Landing`
};

interface Props {
  searchParams?: {
    [key: string]: string;
  };
}

export default function HomePage({ searchParams }: Props) {
  let mode = 0;

  if (searchParams && searchParams.mode) {
    mode = Number(searchParams.mode);
  }

  return (
    <>
      {mode === 0 && (
        <>
          <main className="bg-[#F9F8F5]">
            <section className="px-[12px] pt-[32px]">
              <Banner />
            </section>

            <section className="px-[12px] pt-[100px]">
              <Sneak />
            </section>

            <section className="px-[12px] pt-[100px]">
              <Service />
            </section>

            <section className="pt-[120px]">
              <ResortSpa />
            </section>

            <section className="px-[12px] py-[120px]">
              <div className="flex flex-col items-center">
                <h2 className="font-hg mb-[8px] text-center text-[36px] font-[600] text-[#048BC4]">
                  Ready to Start Your Journey?
                </h2>

                <div className="mb-[64px] text-center text-[20px] font-[400] text-[#9D9C9A]">
                  Simply fill out the form below, and embark on a journey to
                  redefine your vacation experience.
                </div>

                <LandingSignUp />

                <div className="mb-[80px] w-full">
                  <FineCollections />
                </div>

                <BeTheFirstToKnow />
              </div>
            </section>
          </main>

          <footer className="flex flex-col pt-[32px]">
            <div className="flex flex-col gap-[24px] bg-[#FFFFFF] px-[24px] pb-[32px] sm:px-[48px] md:px-[72px] lg:px-[96px] xl:flex-row xl:justify-between">
              <div className="flex flex-col gap-[8px] xl:max-w-[500px]">
                <Logo />

                <div className="pl-[52px] text-[14px] font-[400] text-[#4F4F4F]">
                  Your trusted companion in creating memorable and stress-free
                  vacations.
                  <br />
                  Thomas E Kessler, Lic. RE Broker #BK3094803.
                </div>

                <div className="pl-[52px] text-[14px] font-[400] text-[#4F4F4F]">
                  Marriott Vacation Club is a registered trademark of Marriott®
                  International, Inc.
                </div>
              </div>
            </div>

            <div className="font-hg bg-[#F9F8F5] py-[12px] text-center text-[16px] font-[700] text-[#4F4F4F]">
              &copy; Copyright 2023 True Timeshare Realty, LLC
            </div>
          </footer>
        </>
      )}

      {mode > 0 && (
        <>
          <Header />

          <main className="bg-[#F9F8F5] pb-[120px]">
            <section className="px-[24px] sm:px-[48px] md:px-[72px] lg:px-[96px]">
              <Carousel />

              <WeekendDeals />
            </section>

            <section className="mt-[92px] bg-[#ffffff] pb-[40px] pt-[80px]">
              <Rendered3DTours />

              <GuidesTips />
            </section>

            <section className="mt-[120px] px-[24px] sm:px-[48px] md:px-[72px] lg:px-[96px]">
              <Timeshares />
            </section>

            <section className="mt-[100px] px-[24px] sm:px-[48px] md:px-[72px] lg:px-[96px]">
              <Reviews />
            </section>

            <section className="mt-[120px] px-[24px] sm:px-[48px] md:px-[72px] lg:px-[96px]">
              <FineCollections />
            </section>

            <section className="mt-[120px] px-[24px] sm:px-[48px] md:px-[72px] lg:px-[96px]">
              <ResaleMarketReport />
            </section>

            <section className="mt-[120px] flex flex-col items-center justify-center px-[24px] sm:px-[48px] md:px-[72px] lg:px-[96px]">
              <div className="mb-[64px] flex flex-col gap-[8px]">
                <h2 className="font-hg text-center text-[36px] font-[900] text-[#048BC4]">
                  Let's Plan Your Next Getaway Together!
                </h2>

                <div className="text-center text-[20px] font-[700] text-[#9D9C9A]">
                  We're Just a Message Away!
                </div>
              </div>

              <ContactForm />
            </section>
          </main>

          <Footer />
        </>
      )}
    </>
  );
}

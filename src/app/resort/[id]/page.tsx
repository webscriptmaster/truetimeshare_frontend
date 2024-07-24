import { Metadata } from "next";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Header from "@/components/_layout/Header";
import Footer from "@/components/_layout/Footer";
import ResaleMarketReport from "@/components/_shared/ResaleMarketReport";

import DetailOverview from "@/components/resort/DetailOverview";
import DetailRooms from "@/components/resort/DetailRooms";
import DetailReviews from "@/components/resort/DetailReviews";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Resort Detail`,
  description: `${SITE_TITLE} - Resort Detail`
};

export default function ResortDetailPage() {
  return (
    <>
      <Header />

      <main>
        <section className="flex w-full flex-col justify-between gap-[20px] bg-gradient-to-b from-[#F4F4F4] to-[#FFFFFF] px-[96px] py-[24px] lg:flex-row">
          <img
            src="/images/rent/image01.png"
            className="w-full lg:h-[500px] lg:w-[70%]"
            alt="image01"
          />

          <div className="flex w-auto flex-col justify-between gap-[16px] md:flex-row lg:h-[500px] lg:w-[30%] lg:flex-col">
            <img
              src="/images/rent/image02.png"
              className="md:w-[50%] lg:h-full lg:w-full"
              alt="image02"
            />
            <img
              src="/images/rent/image03.png"
              className="md:w-[50%] lg:h-full lg:w-full"
              alt="image03"
            />
          </div>
        </section>

        <section>
          <Tabs defaultValue="overview" className="w-auto">
            <TabsList className="ml-[90px] flex justify-start gap-[24px] bg-[#FFFFFF]">
              <TabsTrigger
                value="overview"
                className="rounded-none border-[2px] border-[#FFFFFF] text-[16px] font-[700] text-[#333333] hover:border-b-[#048BC4] hover:text-[#048BC4] data-[state=active]:border-b-[#048BC4] data-[state=active]:text-[#048BC4]"
              >
                Overview
              </TabsTrigger>

              <TabsTrigger
                value="rooms"
                className="rounded-none border-[2px] border-[#FFFFFF] text-[16px] font-[700] text-[#333333] hover:border-b-[#048BC4] hover:text-[#048BC4] data-[state=active]:border-b-[#048BC4] data-[state=active]:text-[#048BC4]"
              >
                Rooms
              </TabsTrigger>

              <TabsTrigger
                value="guest reviews"
                className="rounded-none border-[2px] border-[#FFFFFF] text-[16px] font-[700] text-[#333333] hover:border-b-[#048BC4] hover:text-[#048BC4] data-[state=active]:border-b-[#048BC4] data-[state=active]:text-[#048BC4]"
              >
                Guest Reviews
              </TabsTrigger>
            </TabsList>

            <div className="w-full bg-[#F9F8F5]">
              <TabsContent value="overview">
                <DetailOverview />
              </TabsContent>

              <TabsContent value="rooms">
                <DetailRooms />
              </TabsContent>

              <TabsContent value="guest reviews">
                <DetailReviews />
              </TabsContent>

              <div className="px-[96px] pb-[90px]">
                <ResaleMarketReport />
              </div>
            </div>
          </Tabs>
        </section>
      </main>

      <Footer />
    </>
  );
}

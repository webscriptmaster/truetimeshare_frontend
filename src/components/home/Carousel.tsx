"use client";

import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { LuChevronLeftCircle, LuChevronRightCircle } from "react-icons/lu";

import SwiperCore from "swiper";
import { A11y, Autoplay, Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useRef } from "react";
import SearchBox from "@/components/_shared/SearchBox";

import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export default function Carousel() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const onBeforeInit = (swiper: SwiperCore): void => {
    if (typeof swiper.params.navigation !== "boolean") {
      const { navigation } = swiper.params;
      if (navigation) {
        navigation.prevEl = prevRef.current;
        navigation.nextEl = nextRef.current;
      }
    }
  };

  return (
    <div className="relative">
      <Swiper
        loop
        spaceBetween={0}
        slidesPerView={1}
        className="relative rounded-[11px]"
        modules={[A11y, Autoplay, Navigation, EffectFade]}
        autoplay={{
          delay: 5000
        }}
        onBeforeInit={onBeforeInit}
        effect="fade"
      >
        <SwiperSlide className="relative">
          <img
            src="/images/home/carousel/01.png"
            alt="Swiper"
            className="h-[250px] w-full lg:h-[500px]"
          />

          <div className="absolute bottom-0 left-[60px] right-[50%] z-10 flex translate-y-[-48px] flex-col gap-[8px]">
            <h2 className="font-hg text-[24px] font-[700] text-[#F9F8F5]">
              MVC PROPERTIES ONLY
            </h2>
            <div className="text-[20px] font-[500] text-[#F9F8F5]">
              Plan and book our perfect trip with expert advice, travel tips,
              destination information and inspiration
            </div>
          </div>

          <div className="font-hg absolute bottom-0 right-[16px] flex translate-y-[-48px] items-center gap-[8px] text-[16px] font-[600] text-[#F9F8F5]">
            View Destination{" "}
            <FaArrowUpRightFromSquare className="rotate-[-45deg]" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src="/images/home/carousel/02.png"
            alt="Swiper"
            className="h-[250px] w-full lg:h-[500px]"
          />

          <div className="absolute bottom-0 left-[60px] right-[50%] z-10 flex translate-y-[-48px] flex-col gap-[8px]">
            <h2 className="font-hg text-[24px] font-[700] text-[#F9F8F5]">
              MVC PROPERTIES ONLY
            </h2>
            <div className="text-[20px] font-[500] text-[#F9F8F5]">
              Plan and book our perfect trip with expert advice, travel tips,
              destination information and inspiration
            </div>
          </div>

          <div className="font-hg absolute bottom-0 right-[16px] flex translate-y-[-48px] items-center gap-[8px] text-[16px] font-[600] text-[#F9F8F5]">
            View Destination{" "}
            <FaArrowUpRightFromSquare className="rotate-[-45deg]" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src="/images/home/carousel/03.png"
            alt="Swiper"
            className="h-[250px] w-full lg:h-[500px]"
          />

          <div className="absolute bottom-0 left-[60px] right-[50%] z-10 flex translate-y-[-48px] flex-col gap-[8px]">
            <h2 className="font-hg text-[24px] font-[700] text-[#F9F8F5]">
              MVC PROPERTIES ONLY
            </h2>
            <div className="text-[20px] font-[500] text-[#F9F8F5]">
              Plan and book our perfect trip with expert advice, travel tips,
              destination information and inspiration
            </div>
          </div>

          <div className="font-hg absolute bottom-0 right-[16px] flex translate-y-[-48px] items-center gap-[8px] text-[16px] font-[600] text-[#F9F8F5]">
            View Destination{" "}
            <FaArrowUpRightFromSquare className="rotate-[-45deg]" />
          </div>
        </SwiperSlide>

        <div
          ref={prevRef}
          className="absolute left-[24px] top-[50%] z-10 translate-y-[-50%]"
        >
          <LuChevronLeftCircle className="text-[20px] text-[#F9F8F5]" />
        </div>

        <div
          ref={nextRef}
          className="absolute right-[24px] top-[50%] z-10 translate-y-[-50%]"
        >
          <LuChevronRightCircle className="text-[20px] text-[#F9F8F5]" />
        </div>
      </Swiper>

      <SearchBox className="absolute bottom-0 left-[18px] right-[18px] z-10 translate-y-[90%] md:translate-y-[50%]" />
    </div>
  );
}

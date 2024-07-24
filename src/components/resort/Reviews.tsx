"use client";

import { Rating } from "react-simple-star-rating";
import WriteReview from "@/components/resort/WriteReview";

export default function Reviews() {
  return (
    <div className="mt-[36px] px-[96px]">
      <h2 className="text-[24px] font-[600] text-[#222B57]">Reviews</h2>

      <div className="mt-[24px] rounded-[17px] bg-[#FFFFFF] px-[24px] py-[36px]">
        <Rating
          allowFraction
          initialValue={5}
          SVGclassName="inline-block"
          emptyClassName="hidden"
          readonly
          size={20}
          className="mb-[8px]"
        />

        <div className="text-[16px] font-[400] text-[#01303A]">
          The Resort is a true gem! From the stunning location to the
          exceptional service, this place offers a dream vacation. The rooms are
          spacious and beautifully designed, the staff is incredibly friendly,
          and the dining options are top-notch.
          <br />
          <br />
          <span className="text-[18px]">Somali Roy</span>
          <br />
          <span className="text-[13px] text-[#34484D]">
            Manager, TechMatter
          </span>
        </div>
      </div>

      <div className="mt-[24px] rounded-[17px] bg-[#FFFFFF] px-[24px] py-[36px]">
        <Rating
          allowFraction
          initialValue={5}
          SVGclassName="inline-block"
          emptyClassName="hidden"
          readonly
          size={20}
          className="mb-[8px]"
        />

        <div className="text-[16px] font-[400] text-[#01303A]">
          The Resort is a true gem! From the stunning location to the
          exceptional service, this place offers a dream vacation. The rooms are
          spacious and beautifully designed, the staff is incredibly friendly,
          and the dining options are top-notch.
        </div>

        <div className="my-[29px] flex flex-wrap justify-center gap-[16px] md:justify-between">
          <img src="/images/rent/image07.png" alt="image07" />
          <img src="/images/rent/image08.png" alt="image08" />
          <img src="/images/rent/image09.png" alt="image09" />
          <img src="/images/rent/image10.png" alt="image10" />
        </div>

        <div>
          <div className="text-[18px] font-[400] text-[#01303A]">
            Somali Roy
          </div>
          <div className="text-[13px] font-[400] text-[#34484D]">
            Manager, TechMatter
          </div>
        </div>
      </div>

      <div className="mt-[16px] pb-[47px] text-[16px] font-[400] text-[#4F4F4F]">
        Already been here? <WriteReview />
      </div>
    </div>
  );
}

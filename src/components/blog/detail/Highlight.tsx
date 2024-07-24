"use client";

export default function Highlights() {
  return (
    <section className="mb-[96px]">
      <h3 className="font-hg mb-[12px] text-[32px] font-[500] text-[#048BC4]">
        Highlights
      </h3>

      <div className="flex flex-wrap justify-center gap-[24px] lg:justify-between">
        <div>
          <img
            src="/images/blog/detail/image04.png"
            className="h-[346.55px] w-[398.33px]"
            alt="image04"
          />
          <span className="text-[14px] font-[400] italic text-[#828181]">
            Harbour Town Lighthouse
          </span>
        </div>

        <div>
          <img
            src="/images/blog/detail/image05.png"
            className="h-[346.55px] w-[397.33px]"
            alt="image05"
          />
          <span className="text-[14px] font-[400] italic text-[#828181]">
            Water Adventures
          </span>
        </div>

        <div>
          <img
            src="/images/blog/detail/image06.png"
            className="h-[346.55px] w-[398.33px]"
            alt="image06"
          />
          <span className="text-[14px] font-[400] italic text-[#828181]">
            Family-Friendly Fun
          </span>
        </div>
      </div>
    </section>
  );
}

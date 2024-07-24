"use client";

export default function ImageView() {
  return (
    <div className="flex w-full flex-col justify-between gap-[20px] lg:flex-row">
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
    </div>
  );
}

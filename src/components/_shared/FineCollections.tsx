"use client";

interface Props {
  className?: string;
}

export default function FineCollections({ className }: Props) {
  return (
    <div className={className}>
      <h3 className="text-center text-[20px] font-[500] uppercase text-[#222B57]">
        Specializing in these fine Marriott Vacation Club collections
      </h3>

      <div className="mt-[24px] flex justify-center">
        <div className="flex flex-wrap justify-center gap-[56px]">
          <img
            src="/images/_shared/fine-collection/01.png"
            alt="Fine Collection"
          />
          <img
            src="/images/_shared/fine-collection/02.png"
            alt="Fine Collection"
          />
          <img
            src="/images/_shared/fine-collection/03.png"
            alt="Fine Collection"
          />
          <img
            src="/images/_shared/fine-collection/04.png"
            alt="Fine Collection"
          />
        </div>
      </div>
    </div>
  );
}

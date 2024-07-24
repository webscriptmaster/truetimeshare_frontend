"use client";

export default function adventure() {
  return (
    <section>
      <div className="mb-[36px] ">
        <h3 className="font-hg mb-[6px] text-[32px] font-[500] text-[#048BC4]">
          The Allure of Nature
        </h3>

        <p className="text-[16px] font-[400] text-[#434343]">
          Nestled along the southeastern coast of the United States, Hilton Head
          Island stands as a testament to the perfect harmony of natural beauty,
          luxury, and Southern hospitality. This enchanting destination is not
          just an island; it's a sensory experience that captivates visitors
          from the moment they set foot on its pristine shores.Hilton Head's
          allure begins with its breathtaking natural landscapes. Miles of
          sun-kissed beaches invite you to unwind against the backdrop of the
          Atlantic Ocean. The island's maritime forests and salt marshes provide
          a haven for wildlife enthusiasts and bird watchers, creating a
          symphony of nature that resonates throughout your stay.
        </p>
      </div>

      <div>
        <div className="flex flex-col gap-[36px] xl:flex-row">
          <div className="flex flex-col items-center justify-center gap-[15px] md:flex-row">
            <img
              src="/images/blog/detail/image01.png"
              className="h-[413px] max-w-[300px]"
              alt="image01"
            />

            <div className="flex flex-col gap-[16px]">
              <img
                src="/images/blog/detail/image02.png"
                className="h-[198.5px] max-w-[300px]"
                alt="image02"
              />

              <img
                src="/images/blog/detail/image03.png"
                className="h-[198.5px] max-w-[300px]"
                alt="image03"
              />
            </div>
          </div>

          <div className="flex-1 self-center">
            <div className="flex flex-col gap-[12px]">
              <div className="flex gap-[24px]">
                <img
                  src="/images/blog/detail/icon.png"
                  className="h-[26px] w-[34.62px]"
                  alt="icon"
                />

                <h2 className="font-hg text-[42px] font-[400] italic text-[#434343]">
                  Golfer&#x27;s Paradise...
                </h2>
              </div>

              <p className="text-[16px] font-[400] text-[#434343]">
                For those who relish the perfect swing, Hilton Head Island is a
                golfers&#x27; paradise. Home to world-class golf courses
                designed by legends such as Robert Trent Jones and Pete Dye, the
                island&#x27;s fairways and greens offer a challenging yet
                picturesque playground for enthusiasts of all skill levels.
              </p>

              <p className="text-[16px] font-[400] text-[#434343]">
                Hilton Head Island is not just for the romantic at heart or the
                avid adventurer; it&#x27;s a haven for families seeking quality
                time. Bike along the island's extensive network of trails, visit
                the iconic Harbour Town Lighthouse, or build sandcastles on the
                pristine beaches—each moment is an opportunity to create
                cherished family memories.
              </p>
            </div>
          </div>
        </div>

        <p className="mb-[24px] mt-[48px] text-[16px] font-[400] text-[#434343]">
          In Hilton Head Island, time seems to slow down, allowing you to savor
          every moment of your escape to this coastal gem. Whether you&#x27;re
          seeking relaxation, adventure, or a bit of both, Hilton Head promises
          an experience that lingers in your memory, inviting you to return to
          its sun-drenched shores again and again. It&#x27;s not just an island;
          it&#x27;s a sanctuary for the soul, where the beauty of nature meets
          the warmth of Southern hospitality.
        </p>
      </div>
    </section>
  );
}

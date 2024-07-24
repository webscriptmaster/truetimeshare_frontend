"use client";

export default function WorkGuide() {
  return (
    <section className="my-[80px] ">
      <h2 className="font-hg text-center text-[36px] font-[900] text-[#048BC4] lg:text-left">
        How It Works?
      </h2>

      <div className="mt-[36px] flex flex-wrap justify-center gap-[24px] md:justify-between">
        <div className="w-[292px] rounded-[16px] bg-[#FFFFFF] p-[36px] text-center">
          <h6 className="text-[16px] font-[700] text-[#FA5B32]">
            Submit Your Listing
          </h6>

          <p className="text-[16px] font-[500] text-[#9D9C9A]">
            Begin by filling out a simple form with details about your Marriott
            Vacation Club property. Include information such as the resort
            location, points allocation, and any additional perks.
          </p>
        </div>

        <div className="w-[292px] rounded-[16px] bg-[#FFFFFF] p-[36px] text-center">
          <h6 className="text-[16px] font-[700] text-[#FA5B32]">
            Review and Approval
          </h6>

          <p className="text-[16px] font-[500] text-[#9D9C9A]">
            Our team will review your listing to ensure accuracy and
            completeness. Once approved, your property will be featured on our
            platform, ready for potential buyers to discover.
          </p>
        </div>

        <div className="w-[292px] rounded-[16px] bg-[#FFFFFF] p-[36px] text-center">
          <h6 className="text-[16px] font-[700] text-[#FA5B32]">
            Connect with Buyers:
          </h6>

          <p className="text-[16px] font-[500] text-[#9D9C9A]">
            Interested buyers will reach out through our secure messaging
            system. Feel free to negotiate terms and share additional details
            about your Marriott Vacation Club membership.
          </p>
        </div>

        <div className="w-[292px] rounded-[16px] bg-[#FFFFFF] p-[36px] text-center">
          <h6 className="text-[16px] font-[700] text-[#FA5B32]">
            Smooth Closing
          </h6>

          <p className="text-[16px] font-[500] text-[#9D9C9A]">
            Once you&#x27;ve found the right buyer, our team will guide you
            through the closing process, ensuring a seamless transition of
            ownership.
          </p>
        </div>
      </div>
    </section>
  );
}

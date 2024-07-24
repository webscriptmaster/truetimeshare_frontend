"use client";

import { Rating } from "react-simple-star-rating";

import { IReviewItem } from "@/types/interfaces";

function Card(props: IReviewItem) {
  const { rating, content, reviewer } = props;

  return (
    <div className="mb-[20px] flex break-inside-avoid flex-col rounded-[16px] bg-[#ffffff] p-[24px]">
      <Rating
        initialValue={rating}
        SVGclassName="inline-block"
        emptyClassName="hidden"
        readonly
        size={18}
      />

      <div className="mt-[12px] text-[16px] font-[400] text-[#01303A]">
        {content}
      </div>

      <div className="mt-[12px] text-[18px] font-[400] text-[#01303A]">
        {reviewer}
      </div>
    </div>
  );
}

export default function Reviews() {
  const reviewItems: IReviewItem[] = [
    {
      _id: "1",
      rating: 5,
      content:
        "We are super grateful to Thomas and his team for selling our vacation ownership.  He was thorough and communicative during the process.  The entire process was easy when following his guidance and completed in a quick time frame.  We would highly recommend him if you are looking to sell your ownership.",
      reviewer: "Brien and Sabina"
    },
    {
      _id: "2",
      rating: 5,
      content:
        "Really great experience working with Thomas Kessler from start to finish.  From the beginning Thomas reached out to me via text to spend about an hour with me discussing strategies.  Throughout the rest of the bidding process (which took four tries before a successful win) he was the consummate professional and was highly responsive.  Should I consider additional purchases in the future Thomas would be my first call.",
      reviewer: "Matthew Burger"
    },
    {
      _id: "3",
      rating: 5,
      content:
        "Tom is a fantastic agent. He helped us acquire a Marriott timeshare we had been trying to find. He is honest, diligent and very professional. He did all of the negotiating with the sellers and got us a very good price. We highly recommend Tom.",
      reviewer: "Barbara Hill"
    },
    {
      _id: "4",
      rating: 5,
      content:
        "Tom was a pleasure to work with and extremely responsive. He addressed all of my questions promptly and gave me peace of mind for my trip to Aruba. The process to rent a timeshare was so easy!",
      reviewer: "Doreen Leontowycz"
    },
    {
      _id: "5",
      rating: 5,
      content:
        "Tom Kessler is a gem. He is dedicated and responsive and a pleasure to do business with. We have bought timeshares with Tom’s representation, sold timeshares and rented timeshares with Tom’s help. We will continue using Tom’s guidance to rent our timeshares and look forward to a very long relationship with True Timeshare Realty LLC.",
      reviewer: "Shelley Millar"
    },
    {
      _id: "6",
      rating: 5,
      content:
        "I highly recommend reaching out to Tom Kessler when booking your next vacation!  We booked through Vacation Candy last year to go on a family vacation to Aruba at the Marriott Surf Club, and due to Covid, we had to cancel, and  Vacation Candy refused to refund our money, and were extremely slow in even responding, and you can't even get anyone on the phone.  After months of complaints, they finally gave me the ability to rebook a new trip and I was put in contact with Tom.   From the get-go, Tom's customer service, care, and quick follow-up stood out to me.  He was able to secure me a timeshare in Orlando, at a beautiful Marriott resort, during spring break season, and it was easy, smooth, and we had zero issues once we arrived.  I'm already in contact with Tom for next year's trip, and I suggest you do the same.  He's a pleasure to work with and you won't be disappointed in his service!",
      reviewer: "Lance Wilcox"
    },
    {
      _id: "7",
      rating: 5,
      content:
        "Great experience renting a Hilton Head timeshare from Thomas Kessler.  Very responsive, communicative, clear with directions.",
      reviewer: "Kelly Gilliam"
    },
    {
      _id: "8",
      rating: 5,
      content:
        "I had 2 weeks in Aruba for rent.  Tom & Irene did the job quickly and efficiently-good communicators.  Would definitely use them again if need arises!!",
      reviewer: "Bev Roberts"
    },
    {
      _id: "9",
      rating: 5,
      content: "Very knowledgeable and responsive. Tom has a lot of resources.",
      reviewer: "Robert Cochran"
    }
  ];

  return (
    <div>
      <h1 className="font-hg text-center text-[36px] font-bold text-[#048BC4] md:text-left">
        Reviews from Happy Travelers
      </h1>

      <div className="mt-[8px] text-[20px] font-[500] text-[#9D9C9A]">
        Discover What Our Guests Love About Their True TimeShare Experiences
      </div>

      <div className="mt-[60px] columns-1 gap-[20px] sm:columns-2 md:columns-3">
        {reviewItems.map((review) => (
          <Card key={review._id} {...review} />
        ))}
      </div>
    </div>
  );
}

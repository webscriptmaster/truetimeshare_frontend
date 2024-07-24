"use client";

import ViewCard from "@/components/blog/ViewCard";

export default function OwnerShip() {
  const data = [
    {
      image: "/images/blog/image01.png",
      title: "Insider Tips for Timeshare Buyers ",
      subtitle: "Expert Advice",
      description:
        'In our "Insider Tips for Timeshare Buyers" series, we delve into the world of timeshare ownership with seasoned experts sharing their valuable insights and guidance. Discover a wealth of information, from understanding the different types of timeshares to ...'
    },
    {
      image: "/images/blog/image02.png",
      title: "Destination Spotlight",
      subtitle: "Explore Timeshare Resorts",
      description:
        'In our "Destination Spotlight" series, we take you on a virtual journey to some of the most enchanting timeshare destinations around the world. Discover hidden gems, renowned resorts, and captivating travel experiences that await timeshare owners ...'
    },
    {
      image: "/images/blog/image03.png",
      title: "Vacation Ownership Success Stories",
      subtitle: "Real People, Real Stories",
      description:
        'In our "Vacation Ownership Success Stories" series, we bring you the remarkable journeys and cherished memories of real timeshare owners. These authentic tales capture the essence of timeshare ownership, from unforgettable family vacations to dream getaways ...'
    }
  ];

  return (
    <section className="mb-[56px]">
      <div className="mb-[36px] flex flex-row items-center gap-[12px]">
        <img src="/images/blog/icon04.png" alt="icon04" />
        <h3 className="font-hg text-[20px] font-[700] text-[#048BC4] md:text-[24px]">
          Vacation Planning and Budgeting
        </h3>
      </div>

      <div className="flex w-full flex-col">
        <div className="flex flex-wrap justify-center gap-[96px] md:justify-between">
          {data.map((props) => (
            <ViewCard
              key={props.title}
              image={props.image}
              title={props.title}
              subtitle={props.subtitle}
              description={props.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

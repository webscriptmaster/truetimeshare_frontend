"use client";

import Reviews from "./Reviews";
import Seasons from "./Seasons";

export default function DetailReviews() {
  return (
    <div className="pt-[35px]">
      <div className="px-[96px]">
        <Seasons />
      </div>

      <Reviews />
    </div>
  );
}

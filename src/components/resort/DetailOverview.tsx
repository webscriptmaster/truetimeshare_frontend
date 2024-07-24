"use client";

import DetailIntroduction from "./DetailIntroduction";
import Reviews from "./Reviews";
import Rooms from "./Rooms";

export default function DetailOverview() {
  return (
    <div>
      <DetailIntroduction />
      <Rooms />
      <Reviews />
    </div>
  );
}

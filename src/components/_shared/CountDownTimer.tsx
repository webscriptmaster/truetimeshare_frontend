"use client";

import { useEffect, useState } from "react";

import { useTimer } from "react-timer-hook";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface Props {
  startedTimestamp: Date;
  durationSeconds: number;
}

export default function CountDownTimer({
  startedTimestamp,
  durationSeconds
}: Props) {
  const [expiryTimestamp, setExpiryTimestamp] = useState<Date>(new Date());

  const { seconds, minutes, hours, restart } = useTimer({
    expiryTimestamp,
    autoStart: false
  });

  useEffect(() => {
    const newExpiryTimestamp = new Date(startedTimestamp);
    newExpiryTimestamp.setSeconds(
      newExpiryTimestamp.getSeconds() + durationSeconds
    );
    setExpiryTimestamp(newExpiryTimestamp);
  }, [startedTimestamp, durationSeconds]);

  useEffect(() => {
    restart(expiryTimestamp, true);
  }, [expiryTimestamp]);

  return (
    <div className="flex items-center justify-center gap-[32px] pb-[48px]">
      <div className="relative w-[80px]">
        <CircularProgressbar
          strokeWidth={4}
          value={hours}
          minValue={0}
          maxValue={durationSeconds / 3600}
          text={hours.toString()}
          styles={{
            text: {
              dominantBaseline: "central",
              fontSize: "40px"
            }
          }}
        />

        <div className="absolute bottom-[-48px] w-[80px] text-center text-[18px] font-[400] text-[#4F4F4F73]">
          hours
        </div>
      </div>

      <div className="text-[28px] font-normal text-[#4F4F4F]">:</div>

      <div className="relative w-[80px]">
        <CircularProgressbar
          strokeWidth={4}
          value={60 - minutes}
          minValue={0}
          maxValue={60}
          text={minutes.toString().padStart(2, "0")}
          styles={{
            text: {
              dominantBaseline: "central",
              fontSize: "40px"
            }
          }}
        />

        <div className="absolute bottom-[-48px] w-[80px] text-center text-[18px] font-[400] text-[#4F4F4F73]">
          minutes
        </div>
      </div>

      <div className="text-[28px] font-normal text-[#4F4F4F]">:</div>

      <div className="relative w-[80px]">
        <CircularProgressbar
          strokeWidth={4}
          value={60 - seconds}
          minValue={0}
          maxValue={60}
          text={seconds.toString().padStart(2, "0")}
          styles={{
            text: {
              dominantBaseline: "central",
              fontSize: "40px"
            }
          }}
        />

        <div className="absolute bottom-[-48px] w-[80px] text-center text-[18px] font-[400] text-[#4F4F4F73]">
          seconds
        </div>
      </div>
    </div>
  );
}

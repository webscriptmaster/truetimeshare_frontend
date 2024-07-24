"use client";

import { FaHeartCirclePlus } from "react-icons/fa6";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { RESORT_STATUS } from "@/utils/constants";
import ResortStatusRenderer from "../_shared/ResortStatusRenderer";

export default function ListingTable() {
  const resorts = [
    {
      _id: "1",
      resortId: "ABC12345",
      resortName: "Resort Name",
      points: 100,
      pointsAvailable: [0, 100, 100],
      useYear: "Dec",
      pricePerPoint: 120,
      price: 12.345,
      status: RESORT_STATUS.AVAILABLE
    },
    {
      _id: "2",
      resortId: "ABC12345",
      resortName: "Resort Name",
      points: 100,
      pointsAvailable: [0, 100, 100],
      useYear: "Dec",
      pricePerPoint: 120,
      price: 12.345,
      status: RESORT_STATUS.BONUS
    },
    {
      _id: "3",
      resortId: "ABC12345",
      resortName: "Resort Name",
      points: 100,
      pointsAvailable: [0, 100, 100],
      useYear: "Dec",
      pricePerPoint: 120,
      price: 12.345,
      status: RESORT_STATUS.LOW_PAYMENT
    },
    {
      _id: "4",
      resortId: "ABC12345",
      resortName: "Resort Name",
      points: 100,
      pointsAvailable: [0, 100, 100],
      useYear: "Dec",
      pricePerPoint: 120,
      price: 12.345,
      status: RESORT_STATUS.NEW
    },
    {
      _id: "5",
      resortId: "ABC12345",
      resortName: "Resort Name",
      points: 100,
      pointsAvailable: [0, 100, 100],
      useYear: "Dec",
      pricePerPoint: 120,
      price: 12.345,
      status: RESORT_STATUS.OFFER_ACCEPTED
    },
    {
      _id: "6",
      resortId: "ABC12345",
      resortName: "Resort Name",
      points: 100,
      pointsAvailable: [0, 100, 100],
      useYear: "Dec",
      pricePerPoint: 120,
      price: 12.345,
      status: RESORT_STATUS.REDUCED
    },
    {
      _id: "7",
      resortId: "ABC12345",
      resortName: "Resort Name",
      points: 100,
      pointsAvailable: [0, 100, 100],
      useYear: "Dec",
      pricePerPoint: 120,
      price: 12.345,
      status: RESORT_STATUS.SALE_PRETENDING
    }
  ];

  return (
    <div className="bg-[#FFFFFF]">
      <Table>
        <TableHeader className="bg-[#FEE4DC] ">
          <TableRow>
            <TableHead className="px-[16px] py-[12px]">
              <div className="flex flex-col gap-[8px] text-[14px] font-[700] text-[#FD9074]">
                <div>Resort</div>
                <div className="font-[400]"># ID</div>
              </div>
            </TableHead>
            <TableHead className="px-[16px] py-[24px] text-[14px] font-[700] text-[#FD9074]">
              Pts.
            </TableHead>
            <TableHead className="px-[16px] py-[24px] text-[14px] font-[700] text-[#FD9074]">
              Pts. Available
            </TableHead>
            <TableHead className="px-[16px] py-[24px] text-[14px] font-[700] text-[#FD9074]">
              Use Year
            </TableHead>
            <TableHead className="px-[16px] py-[24px] text-[14px] font-[700] text-[#FD9074]">
              $/Point
            </TableHead>
            <TableHead className="px-[16px] py-[24px] text-[14px] font-[700] text-[#FD9074]">
              Price
            </TableHead>
            <TableHead className="px-[16px] py-[24px] text-[14px] font-[700] text-[#FD9074]">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {resorts.map((r) => (
            <TableRow key={r._id}>
              <TableCell className="border-r">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-[8px]">
                    <div className="text-[14px] font-[700] text-[#4F4F4F]">
                      {r.resortName}
                    </div>
                    <div>{r.resortId}</div>
                  </div>
                  <FaHeartCirclePlus className="text-[20px]" />
                </div>
              </TableCell>
              <TableCell className="border-r text-center text-[14px] font-[700] text-[#4F4F4F]">
                {r.points}
              </TableCell>
              <TableCell className="border-r">
                <div className="flex items-center justify-between text-[14px] font-[700] text-[#4F4F4F]">
                  <div>{r.pointsAvailable[0]}</div>
                  <div className="text-[#EEEEEE]">|</div>
                  <div>{r.pointsAvailable[1]}</div>
                  <div className="text-[#EEEEEE]">|</div>
                  <div>{r.pointsAvailable[2]}</div>
                </div>
              </TableCell>
              <TableCell className="border-r text-center text-[14px] font-[700] text-[#4F4F4F]">
                {r.useYear}
              </TableCell>
              <TableCell className="border-r text-center text-[14px] font-[700] text-[#4F4F4F]">
                ${r.pricePerPoint}
              </TableCell>
              <TableCell className="border-r text-center text-[14px] font-[700] text-[#4F4F4F]">
                ${r.price}
              </TableCell>
              <TableCell className="flex justify-center">
                <ResortStatusRenderer status={r.status} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

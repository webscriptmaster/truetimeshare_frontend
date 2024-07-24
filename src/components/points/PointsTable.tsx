"use client";

import { MdOutlineVerified } from "react-icons/md";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

export default function PointsTable() {
  const points = [
    {
      _id: "1",
      pointsAllotment: 560,
      isVerified: true,
      isNew: false,
      banked: 0,
      anniversary: "January",
      use: "Annual",
      type: "Deed",
      price: 1800,
      posting: "View"
    },
    {
      _id: "2",
      pointsAllotment: 1000,
      isVerified: false,
      isNew: false,
      banked: 200,
      anniversary: "January",
      use: "Annual",
      type: "Deed",
      price: 1800,
      posting: "View"
    },
    {
      _id: "3",
      pointsAllotment: 750,
      isVerified: false,
      isNew: true,
      banked: 0,
      anniversary: "January",
      use: "Annual",
      type: "Deed",
      price: 1800,
      posting: "View"
    },
    {
      _id: "4",
      pointsAllotment: 560,
      isVerified: false,
      isNew: false,
      banked: 0,
      anniversary: "January",
      use: "Annual",
      type: "Deed",
      price: 1800,
      posting: "Sold"
    },
    {
      _id: "5",
      pointsAllotment: 560,
      isVerified: true,
      isNew: true,
      banked: 0,
      anniversary: "January",
      use: "Annual",
      type: "Deed",
      price: 1800,
      posting: "View"
    },
    {
      _id: "6",
      pointsAllotment: 450,
      isVerified: false,
      isNew: false,
      banked: 0,
      anniversary: "January",
      use: "Annual",
      type: "Deed",
      price: 1800,
      posting: "View"
    },
    {
      _id: "7",
      pointsAllotment: 750,
      isVerified: false,
      isNew: true,
      banked: 0,
      anniversary: "January",
      use: "Annual",
      type: "Deed",
      price: 1800,
      posting: "View"
    },
    {
      _id: "8",
      pointsAllotment: 1000,
      isVerified: false,
      isNew: false,
      banked: 200,
      anniversary: "January",
      use: "Annual",
      type: "Deed",
      price: 1800,
      posting: "View"
    }
  ];

  return (
    <div className="bg-[#FFFFFF]">
      <Table>
        <TableHeader className="bg-[#FEE4DC] ">
          <TableRow>
            <TableHead className="px-[16px] py-[24px] text-[14px] font-[700] text-[#FD9074]">
              Points Allotment
            </TableHead>
            <TableHead className="px-[16px] py-[24px] text-[14px] font-[700] text-[#FD9074]">
              Banked
            </TableHead>
            <TableHead className="px-[16px] py-[24px] text-[14px] font-[700] text-[#FD9074]">
              Anniversary
            </TableHead>
            <TableHead className="px-[16px] py-[24px] text-[14px] font-[700] text-[#FD9074]">
              Use
            </TableHead>
            <TableHead className="px-[16px] py-[24px] text-[14px] font-[700] text-[#FD9074]">
              Type
            </TableHead>
            <TableHead className="px-[16px] py-[24px] text-[14px] font-[700] text-[#FD9074]">
              Price
            </TableHead>
            <TableHead className="px-[16px] py-[24px] text-[14px] font-[700] text-[#FD9074]">
              Posting
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {points.map((p) => (
            <TableRow key={p._id}>
              <TableCell className="border-r">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-[8px]">
                    <div className="text-[14px] font-[700] text-[#4F4F4F]">
                      {p.pointsAllotment}
                    </div>
                    <div>
                      {p.isVerified && (
                        <div className="flex items-center gap-[4px]">
                          <div className="text-[14px] font-[400] text-[#4F4F4F]">
                            Verified
                          </div>
                          <MdOutlineVerified className="text-[20px] text-[#048BC4]" />
                        </div>
                      )}
                    </div>
                  </div>

                  {p.isNew && (
                    <div className="rounded-[6px] bg-[#048BC4] px-[8px] text-[14px] font-[700] text-[#FFFFFF]">
                      New
                    </div>
                  )}
                </div>
              </TableCell>
              <TableCell className="border-r text-center text-[14px] font-[700] text-[#4F4F4F]">
                {p.banked}
              </TableCell>
              <TableCell className="border-r text-center text-[14px] font-[700] text-[#4F4F4F]">
                {p.anniversary}
              </TableCell>
              <TableCell className="border-r text-center text-[14px] font-[700] text-[#4F4F4F]">
                {p.use}
              </TableCell>
              <TableCell className="border-r text-center text-[14px] font-[700] text-[#4F4F4F]">
                {p.type}
              </TableCell>
              <TableCell className="border-r text-center text-[14px] font-[700] text-[#4F4F4F]">
                ${p.price}
              </TableCell>
              <TableCell>
                {p.posting === "View" ? (
                  <div className="rounded-[34px] bg-[#FEE4DC] px-[16px] py-[8px] text-center text-[16px] font-[600] text-[#FA5B32]">
                    {p.posting}
                  </div>
                ) : (
                  <div className="px-[16px] py-[8px] text-center text-[16px] font-[600] text-[#FA5B32]">
                    {p.posting}
                  </div>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

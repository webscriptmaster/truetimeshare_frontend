"use client";

import { useState } from "react";

import {
  AR,
  EU,
  GB,
  US,
  AU,
  AZ,
  BH,
  BR,
  BG,
  CA,
  CL,
  CN,
  CO,
  CZ,
  DK,
  EG,
  FJ,
  GE,
  HK,
  IN,
  ID,
  IR,
  IL,
  JP,
  JO,
  KZ,
  KW,
  MY,
  MX,
  MD,
  NA,
  TW,
  NZ,
  NO,
  OM,
  PL,
  QA,
  RO,
  RU,
  SA,
  SG,
  ZA,
  KR,
  SE,
  CH,
  TH,
  TR,
  UA,
  AE
} from "country-flag-icons/react/3x2";
import { LuChevronDown } from "react-icons/lu";
import clsx from "clsx";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ICurrency } from "@/types/interfaces";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getCurrency, setCurrency } from "@/redux/slices/currencySlice";

export default function CurrencyDialog() {
  const currency = useAppSelector(getCurrency);
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(false);

  const currencies: ICurrency[] = [
    {
      _id: "1",
      name: "United States Dollar",
      code: "USD",
      icon: <US className="h-[20px]" />
    },
    {
      _id: "2",
      name: "Pound sterling",
      code: "GBP",
      icon: <GB className="h-[20px]" />
    },
    {
      _id: "3",
      name: "Euro",
      code: "EUR",
      icon: <EU className="h-[20px]" />
    },
    {
      _id: "4",
      name: "Argentine Peso",
      code: "ARS",
      icon: <AR className="h-[20px]" />
    },
    {
      _id: "5",
      name: "Australian Dollar",
      code: "AUD",
      icon: <AU className="h-[20px]" />
    },
    {
      _id: "6",
      name: "Azerbaijani Manat",
      code: "AZN",
      icon: <AZ className="h-[20px]" />
    },
    {
      _id: "7",
      name: "Bahraini Dinar",
      code: "BHD",
      icon: <BH className="h-[20px]" />
    },
    {
      _id: "8",
      name: "Brazilian Real",
      code: "BRL",
      icon: <BR className="h-[20px]" />
    },
    {
      _id: "9",
      name: "Bulgarian Lev",
      code: "BGN",
      icon: <BG className="h-[20px]" />
    },
    {
      _id: "10",
      name: "Canadian Dollar",
      code: "CAD",
      icon: <CA className="h-[20px]" />
    },
    {
      _id: "11",
      name: "CLP- \u00A3",
      code: "CLP",
      icon: <CL className="h-[20px]" />
    },
    {
      _id: "12",
      name: "Chinese Yuan",
      code: "CNY",
      icon: <CN className="h-[20px]" />
    },
    {
      _id: "13",
      name: "Colombian Peso",
      code: "COP",
      icon: <CO className="h-[20px]" />
    },
    {
      _id: "14",
      name: "Czech Koruna",
      code: "CZK",
      icon: <CZ className="h-[20px]" />
    },
    {
      _id: "15",
      name: "Danish Krone",
      code: "DKK",
      icon: <DK className="h-[20px]" />
    },
    {
      _id: "16",
      name: "Egyptian Pound",
      code: "EGP",
      icon: <EG className="h-[20px]" />
    },
    {
      _id: "17",
      name: "Fijian Dollar",
      code: "FJD",
      icon: <FJ className="h-[20px]" />
    },
    {
      _id: "18",
      name: "Georgian Lari",
      code: "GEL",
      icon: <GE className="h-[20px]" />
    },
    {
      _id: "19",
      name: "Hong Kong Dollar",
      code: "HKD",
      icon: <HK className="h-[20px]" />
    },
    {
      _id: "20",
      name: "Indian Rupee",
      code: "INR",
      icon: <IN className="h-[20px]" />
    },
    {
      _id: "21",
      name: "Indonesian Rupiah",
      code: "IDR",
      icon: <ID className="h-[20px]" />
    },
    {
      _id: "22",
      name: "Iranian Rial",
      code: "IRR",
      icon: <IR className="h-[20px]" />
    },
    {
      _id: "23",
      name: "Israeli New Shekel",
      code: "ILS",
      icon: <IL className="h-[20px]" />
    },
    {
      _id: "24",
      name: "Japanese Yen",
      code: "JPY",
      icon: <JP className="h-[20px]" />
    },
    {
      _id: "25",
      name: "Jordanian Dinar",
      code: "JOD",
      icon: <JO className="h-[20px]" />
    },
    {
      _id: "26",
      name: "Kazakhstan Tenge",
      code: "KZT",
      icon: <KZ className="h-[20px]" />
    },
    {
      _id: "27",
      name: "Kuwaiti Dinar",
      code: "KWD",
      icon: <KW className="h-[20px]" />
    },
    {
      _id: "28",
      name: "Malaysian Ringgit",
      code: "MYR",
      icon: <MY className="h-[20px]" />
    },
    {
      _id: "29",
      name: "Mexican Peso",
      code: "MXN",
      icon: <MX className="h-[20px]" />
    },
    {
      _id: "30",
      name: "Moldovan Leu",
      code: "MDL",
      icon: <MD className="h-[20px]" />
    },
    {
      _id: "31",
      name: "Namibian Dollar",
      code: "NAD",
      icon: <NA className="h-[20px]" />
    },
    {
      _id: "32",
      name: "New Taiwan Dollar",
      code: "TWD",
      icon: <TW className="h-[20px]" />
    },
    {
      _id: "33",
      name: "New Zealand Dollar",
      code: "NZD",
      icon: <NZ className="h-[20px]" />
    },
    {
      _id: "34",
      name: "Norwegian Krone",
      code: "NOK",
      icon: <NO className="h-[20px]" />
    },
    {
      _id: "35",
      name: "Omani Rial",
      code: "OMR",
      icon: <OM className="h-[20px]" />
    },
    {
      _id: "36",
      name: "Polish Zloty",
      code: "PLN",
      icon: <PL className="h-[20px]" />
    },
    {
      _id: "37",
      name: "Qatari Riyal",
      code: "QAR",
      icon: <QA className="h-[20px]" />
    },
    {
      _id: "38",
      name: "Romanian Leo",
      code: "RON",
      icon: <RO className="h-[20px]" />
    },
    {
      _id: "39",
      name: "Russian Ruble",
      code: "RUB",
      icon: <RU className="h-[20px]" />
    },
    {
      _id: "40",
      name: "Saudi Arabian Riyal",
      code: "SAR",
      icon: <SA className="h-[20px]" />
    },
    {
      _id: "41",
      name: "Singapore Dollar",
      code: "SGD",
      icon: <SG className="h-[20px]" />
    },
    {
      _id: "42",
      name: "South African Rand",
      code: "ZAR",
      icon: <ZA className="h-[20px]" />
    },
    {
      _id: "43",
      name: "South Korean Won",
      code: "KRW",
      icon: <KR className="h-[20px]" />
    },
    {
      _id: "44",
      name: "Swedish Krona",
      code: "SEK",
      icon: <SE className="h-[20px]" />
    },
    {
      _id: "45",
      name: "Swiss Franc",
      code: "CHF",
      icon: <CH className="h-[20px]" />
    },
    {
      _id: "46",
      name: "Thai Baht",
      code: "THB",
      icon: <TH className="h-[20px]" />
    },
    {
      _id: "47",
      name: "Turkish Lira",
      code: "TRY",
      icon: <TR className="h-[20px]" />
    },
    {
      _id: "48",
      name: "Ukrainian Hryvnia",
      code: "UAH",
      icon: <UA className="h-[20px]" />
    },
    {
      _id: "49",
      name: "United Arab Emirates Dirham",
      code: "AED",
      icon: <AE className="h-[20px]" />
    },
    {
      _id: "50",
      name: "West African CFA Franc",
      code: "XOF",
      icon: ""
    }
  ];

  const handleItemClick = (c: ICurrency) => () => {
    dispatch(setCurrency(c));
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <div className="flex items-center gap-[4px]">
          <div className="flex gap-[8px]">
            {currency.currency?.icon ?? currencies[0].icon}
            <div className="text-[14px] font-[500] text-[#4F4F4F]">
              - {currency.currency?.code ?? currencies[0].code}
            </div>
          </div>
          <LuChevronDown />
        </div>
      </DialogTrigger>

      <DialogContent className="max-w-full p-0 sm:max-w-[80%]">
        <ScrollArea className="h-[100vh] p-[16px] pr-[16px] sm:h-[80vh]">
          <div className="flex w-full flex-col flex-wrap overflow-y-auto sm:flex-row">
            {currencies.map((c) => (
              <div
                key={c._id}
                className={clsx(
                  "flex w-full cursor-pointer flex-col gap-[8px] rounded-[16px] border p-[12px] hover:border-[#EA4B22] sm:w-1/2 md:w-1/3 lg:w-1/4",
                  currency.currency?._id === c._id
                    ? "border-[#FA5B32]"
                    : "border-[#FFFFFF]"
                )}
                onClick={handleItemClick(c)}
              >
                <div className="text-[14px] font-[500] text-[#4F4F4F]">
                  {c.name}
                </div>

                <div className="flex gap-[8px]">
                  {c.icon}
                  <div className="text-[14px] font-[500] text-[#4F4F4F]">
                    - {c.code}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { LuCalendarDays, LuCrown } from "react-icons/lu";
import * as z from "zod";

import clsx from "clsx";
import LoadingOverlay from "@/components/_shared/LoadingOverlay";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

import * as API from "@/api";
import { toastError, toastSuccess } from "@/lib/toast";
import { PROPERTY_OPEN_STATUS } from "@/utils/constants";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { IProperty } from "@/types/interfaces";
import { getAvailableProperty } from "@/redux/actions/propertyAction";

const FormSchema = z.object({
  propertyId: z
    .string()
    .min(2, { message: "Property name must be selected from the list" }),
  checkin: z.date().nullable(),
  checkout: z.date().nullable(),
  price: z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
    message: "Expected number, received a string"
  }),
  openingStatus: z
    .string()
    .min(2, { message: "Status must be selected from the list" }),
  openingAdditional: z.string().optional()
});

type FormSchemaType = z.infer<typeof FormSchema>;

export default function NewOpening() {
  const available = useAppSelector((state) => state.Property.available);
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      propertyId: "",
      checkin: null,
      checkout: null,
      price: "",
      openingStatus: "",
      openingAdditional: ""
    }
  });

  const handleDiscardClick = () => {
    form.reset();
    setOpen(false);
  };

  const onSubmit = async (values: FormSchemaType) => {
    try {
      setLoading(true);
      const response = await API.updateProperty(values);
      if (response && response.data && response.data.msg) {
        toastSuccess(response.data.msg);
      }
      dispatch(getAvailableProperty());
      setOpen(false);
      form.reset();
      setLoading(false);
    } catch (err: any) {
      console.error(err);
      if (err && err.response && err.response.data && err.response.data.msg) {
        toastError(err.response.data.msg);
      } else {
        toastError("Something went wrong. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <LoadingOverlay loading={loading} />

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button className="font-hg rounded-[34px] border border-[#FA5B32] bg-transparent text-[16px] font-[500] text-[#FA5B32] hover:bg-[#000000]/20">
            + Add Opening
          </Button>
        </SheetTrigger>

        <SheetContent
          className="w-9/12 !max-w-none p-0 md:w-8/12 lg:w-6/12"
          side="right"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <ScrollArea className="h-[100vh] w-full p-[32px]">
                <SheetHeader className="mb-[24px]">
                  <SheetTitle className="font-hg text-[20px] font-[600] text-[#048BC4]">
                    Add a New Opening
                  </SheetTitle>

                  <h3 className="mb-[8px] text-[14px] font-[500] text-[#333333]">
                    Overview
                  </h3>

                  <div className="text-[14px] font-[400] text-[#252C32]">
                    Ready to make your property available for bookings? Use this
                    form to specify when your timeshare property is open for
                    renting.
                  </div>
                </SheetHeader>

                <div className="flex flex-col">
                  <div className="mb-[24px] w-full px-[4px]">
                    <FormField
                      control={form.control}
                      name="propertyId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="mb-[6px] text-[14px] font-[500] text-[#344054]">
                            Property Name *
                          </FormLabel>

                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <SelectTrigger className="rounded-[34px]">
                              <SelectValue placeholder="Select from own properties" />
                            </SelectTrigger>

                            <SelectContent className="rounded-[20px]">
                              {available.map((p: IProperty, index: number) => (
                                <SelectItem
                                  key={p._id}
                                  value={p._id}
                                  className={clsx(
                                    "h-[40px] rounded-[34px] border bg-transparent",
                                    index < available.length - 1
                                      ? "mb-[8px]"
                                      : ""
                                  )}
                                >
                                  {p.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="mb-[24px] flex w-full justify-between gap-[24px]">
                    <div className="flex-1 px-[4px]">
                      <FormField
                        control={form.control}
                        name="checkin"
                        render={({ field }) => (
                          <FormItem>
                            <Popover>
                              <PopoverTrigger asChild>
                                <div className="relative">
                                  <LuCalendarDays className="absolute left-[16px] top-[50%] translate-y-[-50%] text-[20px] text-[#344054]" />

                                  <Input
                                    readOnly
                                    className="w-full rounded-[34px] pl-[44px]"
                                    placeholder="Check in"
                                    value={
                                      field.value
                                        ? format(field.value, "dd MMM yyyy")
                                        : ""
                                    }
                                  />
                                </div>
                              </PopoverTrigger>
                              <PopoverContent
                                className="w-auto p-0"
                                align="start"
                              >
                                <Calendar
                                  mode="single"
                                  selected={field.value || undefined}
                                  onSelect={field.onChange}
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="flex-1 px-[4px]">
                      <FormField
                        control={form.control}
                        name="checkout"
                        render={({ field }) => (
                          <FormItem>
                            <Popover>
                              <PopoverTrigger asChild>
                                <div className="relative">
                                  <LuCalendarDays className="absolute left-[16px] top-[50%] translate-y-[-50%] text-[20px] text-[#344054]" />

                                  <Input
                                    readOnly
                                    className="w-full rounded-[34px] pl-[44px]"
                                    placeholder="Check out"
                                    value={
                                      field.value
                                        ? format(field.value, "dd MMM yyyy")
                                        : ""
                                    }
                                  />
                                </div>
                              </PopoverTrigger>
                              <PopoverContent
                                className="w-auto p-0"
                                align="start"
                              >
                                <Calendar
                                  mode="single"
                                  selected={field.value || undefined}
                                  onSelect={field.onChange}
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <div className="mb-[24px] w-full px-[4px]">
                    <FormField
                      control={form.control}
                      name="price"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="mb-[6px] text-[14px] font-[500] text-[#344054]">
                            Price *
                          </FormLabel>

                          <Input
                            type="number"
                            className="w-full rounded-[34px]"
                            placeholder="Set the price for renting or selling your property"
                            {...field}
                          />
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="mb-[24px] w-full px-[4px]">
                    <FormField
                      control={form.control}
                      name="openingStatus"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="mb-[6px] text-[14px] font-[500] text-[#344054]">
                            Status *
                          </FormLabel>

                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <SelectTrigger className="rounded-[34px]">
                              <SelectValue placeholder="Indicate the status of the opening" />
                            </SelectTrigger>

                            <SelectContent className="rounded-[20px]">
                              <SelectItem
                                value={PROPERTY_OPEN_STATUS.AVAILABLE}
                                className="mb-[8px] h-[40px] rounded-[34px] border bg-transparent"
                              >
                                Available
                              </SelectItem>
                              <SelectItem
                                value={PROPERTY_OPEN_STATUS.PENDING}
                                className="mb-[8px] h-[40px] rounded-[34px] border bg-transparent"
                              >
                                Pending
                              </SelectItem>
                              <SelectItem
                                value={PROPERTY_OPEN_STATUS.UNAVAILABLE}
                                className="mb-[8px] h-[40px] rounded-[34px] border bg-transparent"
                              >
                                Unavailable
                              </SelectItem>
                              <SelectItem
                                value={PROPERTY_OPEN_STATUS.UNDER_MAINTENANCE}
                                className="h-[40px] rounded-[34px] border bg-transparent"
                              >
                                Under Maintenance
                              </SelectItem>
                            </SelectContent>
                          </Select>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="mb-[24px] w-full px-[4px]">
                    <FormField
                      control={form.control}
                      name="openingAdditional"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="mb-[6px] text-[14px] font-[500] text-[#344054]">
                            Additional Details
                          </FormLabel>

                          <Textarea
                            placeholder="Provide any additional details or specific instructions related to this opening."
                            rows={6}
                            {...field}
                          />

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="mb-[24px] w-full px-[4px]">
                    <div className="flex flex-col rounded-[6px] border">
                      <div className="flex items-center gap-[8px] bg-[#ECF2F5] px-[20px] py-[18px]">
                        <LuCrown className="text-[20px] text-[#FA5B32]" />
                        <span className="text-[18px] font-[500] text-[#FA5B32]">
                          Pro Tip
                        </span>
                      </div>

                      <div className="px-[20px] py-[16px] text-[15px] font-[400] text-[#333333]">
                        Keep your availability calendar up-to-date to attract
                        more bookings and enhance your timeshare experience. Use
                        this feature regularly to maximize the potential of your
                        property.
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button
                      type="button"
                      className="font-hg bg-transparent text-[16px] font-[600] text-[#FA5B32] hover:bg-transparent hover:text-[#FA5B32]/80"
                      onClick={handleDiscardClick}
                    >
                      Discard
                    </Button>

                    <Button
                      type="submit"
                      className="font-hg rounded-[34px] bg-[#FA5B32] text-[16px] font-[500] text-[#F9F8F5] hover:bg-[#FA5B32]/80"
                    >
                      Save
                    </Button>
                  </div>
                </div>
              </ScrollArea>
            </form>
          </Form>
        </SheetContent>
      </Sheet>
    </>
  );
}

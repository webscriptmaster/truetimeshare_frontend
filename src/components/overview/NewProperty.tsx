"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { LuCalendarDays } from "react-icons/lu";
import * as z from "zod";

import {
  Sheet,
  SheetContent,
  SheetDescription,
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
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
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
import FileDnD from "@/components/_uiext/FileDnD";
import LoadingOverlay from "@/components/_shared/LoadingOverlay";

import { PROPERTY_TYPE } from "@/utils/constants";

import * as API from "@/api";
import { toastError, toastSuccess } from "@/lib/toast";

import { getAvailableProperty } from "@/redux/actions/propertyAction";
import { useAppDispatch } from "@/redux/hooks";

const FormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Property name must be at least 2 characters long" }),
  type: z
    .string()
    .min(2, { message: "Property type must be selected from the list" }),
  location: z
    .string()
    .min(2, { message: "Location must be at least 2 characters long" }),
  price: z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
    message: "Expected number, received a string"
  }),
  description: z
    .string()
    .min(2, { message: "Description must be at least 2 characters long" }),
  images: z
    .array(z.any())
    .min(1, { message: "There should be at least 1 image" }),
  checkin: z.date().nullable(),
  checkout: z.date().nullable(),
  additional: z.string().optional()
});

type FormSchemaType = z.infer<typeof FormSchema>;

export default function NewProperty() {
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      type: "",
      location: "",
      price: "",
      description: "",
      images: [],
      checkin: null,
      checkout: null,
      additional: ""
    }
  });

  const onSubmit = async (values: FormSchemaType) => {
    try {
      setLoading(true);
      const response = await API.createProperty(values);
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
          <Button className="font-hg rounded-[34px] bg-[#FA5B32] text-[16px] font-[500] text-[#F9F8F5] hover:bg-[#FA5B32]/80">
            + Add Property
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
                    Add a New Property
                  </SheetTitle>

                  <SheetDescription className="text-[14px] font-[400] text-[#252C32]">
                    Welcome to the property addition wizard! Please fill in the
                    details below to add a new property to your timeshare
                    portfolio.
                  </SheetDescription>
                </SheetHeader>

                <div className="flex flex-col">
                  <div className="mb-[24px] w-full px-[4px]">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="mb-[6px] text-[14px] font-[500] text-[#344054]">
                            Property Name *
                          </FormLabel>

                          <Input
                            className="w-full rounded-[34px]"
                            placeholder="Enter name"
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
                      name="type"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="mb-[6px] text-[14px] font-[500] text-[#344054]">
                            Property Type*
                          </FormLabel>

                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <SelectTrigger className="rounded-[34px]">
                              <SelectValue placeholder="Select from list" />
                            </SelectTrigger>

                            <SelectContent className="rounded-[20px]">
                              <SelectItem
                                value={PROPERTY_TYPE.SALE}
                                className="mb-[8px] h-[40px] rounded-[34px] border bg-transparent"
                              >
                                For Sale
                              </SelectItem>
                              <SelectItem
                                value={PROPERTY_TYPE.RENT}
                                className="h-[40px] rounded-[34px] border bg-transparent"
                              >
                                For Rent
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
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="mb-[6px] text-[14px] font-[500] text-[#344054]">
                            Location *
                          </FormLabel>

                          <Input
                            className="w-full rounded-[34px]"
                            placeholder="Specify the location of your property"
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
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="mb-[6px] text-[14px] font-[500] text-[#344054]">
                            Description *
                          </FormLabel>

                          <Textarea
                            placeholder="Provide a detailed description of your property. Highlight key features and attractions"
                            rows={6}
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
                      name="images"
                      render={({ field }) => (
                        <FormItem>
                          <FileDnD {...field} />
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
                      name="additional"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="mb-[6px] text-[14px] font-[500] text-[#344054]">
                            Additional Details
                          </FormLabel>

                          <Textarea
                            placeholder="Provide a detailed description of your property. Highlight key features and attractions"
                            rows={6}
                            {...field}
                          />

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      className="rounded-[34px] bg-[#FA5B32] text-[16px] font-[500] text-[#F9F8F5] hover:bg-[#DA3B12]"
                    >
                      Submit
                    </Button>
                  </div>
                </div>

                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </form>
          </Form>
        </SheetContent>
      </Sheet>
    </>
  );
}

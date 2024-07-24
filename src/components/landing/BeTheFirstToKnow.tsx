"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import LoadingOverlay from "@/components/_shared/LoadingOverlay";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { registerEmail } from "@/redux/actions/communityAction";
import { getCommunity } from "@/redux/slices/communitySlice";

const FormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address"
  })
});

type FormSchemaType = z.infer<typeof FormSchema>;

export default function BeTheFirstToKnow() {
  const community = useAppSelector(getCommunity);
  const dispatch = useAppDispatch();

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: ""
    }
  });

  const onSubmit = (values: FormSchemaType) => {
    dispatch(registerEmail(values));
  };

  if (community.isEmailRegistered) return null;

  return (
    <div className="w-full px-[24px] sm:px-[48px] md:px-[72px] lg:px-[96px]">
      <LoadingOverlay loading={community.loading} />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-[24px] rounded-[16px] bg-[#FFFFFF] p-[36px] shadow-md xl:flex-row xl:items-center xl:justify-between"
        >
          <div className="flex flex-col">
            <h3 className="font-hg text-[20px] font-[600] text-[#048BC4]">
              Be The First To Know!
            </h3>

            <div className="text-[16px] font-[500] text-[#9D9C9A]">
              Be part of our community and be the first to receive updates,
              promotions, and early access to Truetimeshare.
            </div>
          </div>

          <div className="flex flex-row justify-center gap-[12px]">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full lg:w-auto">
                  <Input
                    type="email"
                    className="w-full rounded-[34px] lg:w-[400px]"
                    {...field}
                    placeholder="Enter email address"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="font-hg rounded-[34px] bg-[#FA5B32] px-[16px] py-[8px] text-[16px] font-[600] text-[#FFFFFF] hover:bg-[#DA3B12]"
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

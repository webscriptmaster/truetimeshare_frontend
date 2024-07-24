"use client";

import Link from "next/link";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { LuMail, LuPhone } from "react-icons/lu";
import { useForm } from "react-hook-form";
import { PhoneInput } from "react-international-phone";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import LoadingOverlay from "@/components/_shared/LoadingOverlay";

import { SIGN_MODE } from "@/utils/constants";

import * as API from "@/api";
import { getSignup, setData, setStage } from "@/redux/slices/signupSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import { toastError, toastSuccess } from "@/lib/toast";

import "react-international-phone/style.css";

const PhoneSchema = z.object({
  phone: z.string().min(3, {
    message: "Phone number is required"
  })
});

type PhoneSchemaType = z.infer<typeof PhoneSchema>;

export default function PhoneSignUp1() {
  const signup = useAppSelector(getSignup);
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(false);

  const phoneForm = useForm<PhoneSchemaType>({
    resolver: zodResolver(PhoneSchema),
    defaultValues: {
      phone: signup.data.phone
    }
  });

  const handleModeChange = (newMode: string) => () => {
    dispatch(setData({ mode: newMode }));
  };

  const onPhoneSubmit = async (values: PhoneSchemaType) => {
    try {
      setLoading(true);
      dispatch(setData(values));
      const response = await API.register({
        ...signup.data,
        ...values
      });
      const { msg } = response.data;
      toastSuccess(msg);
      dispatch(setStage(signup.stage + 1));
    } catch (err: any) {
      console.error(err);
      if (err && err.response && err.response.data && err.response.data.msg) {
        toastError(err.response.data.msg);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <LoadingOverlay loading={loading} />

      <div className="w-full max-w-[400px] md:w-[400px]">
        <h3 className="font-hg text-center text-[28px] font-[600] text-[#181818]">
          Register
        </h3>

        <div className="mb-[40px] mt-[24px] flex w-full justify-between">
          <Button
            onClick={handleModeChange(SIGN_MODE.EMAIL)}
            className={clsx(
              "flex w-full gap-[12px] bg-transparent font-[700] text-[#FA5B32] hover:bg-transparent",
              signup.data.mode === SIGN_MODE.EMAIL
                ? "border-[1px] border-[#FA5B32]"
                : "border-none"
            )}
          >
            <LuMail className="text-[20px]" /> Email
          </Button>

          <Button
            onClick={handleModeChange(SIGN_MODE.PHONE)}
            className={clsx(
              "flex w-full gap-[12px] bg-transparent font-[700] text-[#FA5B32] hover:bg-transparent",
              signup.data.mode === SIGN_MODE.PHONE
                ? "border-[1px] border-[#FA5B32]"
                : "border-none"
            )}
          >
            <LuPhone className="text-[20px]" /> Phone
          </Button>
        </div>

        <Form {...phoneForm}>
          <form
            onSubmit={phoneForm.handleSubmit(onPhoneSubmit)}
            className="flex flex-col gap-[24px]"
          >
            <div className="flex flex-col gap-[4px]">
              <FormField
                control={phoneForm.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[14px] font-[400] text-[#181818]">
                      Phone number
                    </FormLabel>
                    <FormControl>
                      <PhoneInput
                        countrySelectorStyleProps={{
                          className: "!h-[40px] !rounded-[34px] pr-[16px]",
                          buttonClassName: "w-[80px] !h-[40px] !rounded-[34px]"
                        }}
                        inputClassName="!h-[40px] !w-full !rounded-[34px]"
                        placeholder="Phone number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button
              type="submit"
              className="rounded-[34px] border border-[#FA5B32] bg-transparent text-[16px] font-[600] text-[#FA5B32] hover:bg-[#eA4B22] hover:bg-transparent"
            >
              Continue
            </Button>
          </form>
        </Form>

        <div className="mt-[40px] flex flex-col gap-[24px]">
          <div className="mt-[40px] text-center text-[16px] font-[400] text-[#4F4F4F]">
            Already have an account?{" "}
            <span className="font-[600] text-[#048BC4]">
              <Link href="/signin">Sign in</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

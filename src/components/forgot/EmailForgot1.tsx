"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { LuMail, LuPhone } from "react-icons/lu";
import { useForm } from "react-hook-form";
import * as z from "zod";

import Link from "next/link";
import { Input } from "@/components/ui/input";
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

import { SIGN_MODE, SITE_TITLE } from "@/utils/constants";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getForgot, setMode } from "@/redux/slices/forgotSlice";
import { sendResetLink } from "@/redux/actions/forgotAction";

const FormSchema = z.object({
  email: z.string().email({
    message: "Email is required"
  })
});

type FormSchemaType = z.infer<typeof FormSchema>;

export default function EmailForgot1() {
  const forgot = useAppSelector(getForgot);
  const dispatch = useAppDispatch();

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: forgot.data.email
    }
  });

  const handleModeChange = (newMode: string) => () => {
    dispatch(setMode(newMode));
  };

  const onSubmit = (values: FormSchemaType) => {
    dispatch(sendResetLink(values));
  };

  return (
    <>
      <LoadingOverlay loading={forgot.loading} />

      <div className="flex w-full max-w-[400px] flex-col md:w-[400px]">
        <h3 className="font-hg text-center text-[28px] font-[600] text-[#181818]">
          Forgot your password?
        </h3>

        <div className="mb-[40px] mt-[24px] flex w-full justify-between">
          <Button
            onClick={handleModeChange(SIGN_MODE.EMAIL)}
            className={clsx(
              "flex w-full gap-[12px] bg-transparent font-[700] text-[#FA5B32] hover:bg-transparent",
              forgot.mode === SIGN_MODE.EMAIL
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
              forgot.mode === SIGN_MODE.PHONE
                ? "border-[1px] border-[#FA5B32]"
                : "border-none"
            )}
          >
            <LuPhone className="text-[20px]" /> Phone
          </Button>
        </div>

        <div className="mb-[40px] text-center text-[16px] font-[400] text-[#4F4F4F]">
          We'll send you a link to reset it. Enter your email address used for{" "}
          {SITE_TITLE}
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col"
          >
            <div className="mb-[32px]">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[14px] font-[400] text-[#181818]">
                      Email address
                    </FormLabel>
                    <FormControl>
                      <Input
                        autoFocus
                        type="email"
                        className="w-full rounded-[34px]"
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
              className="mb-[32px] rounded-[34px] bg-[#FA5B32] text-[16px] font-[600] text-[#F9F8F5] hover:bg-[#eA4B22]"
            >
              Send Reset Link
            </Button>

            <div className="text-center text-[14px] font-[400] text-[#4F4F4F]">
              By creating an account, you agree with our{" "}
              <Link href="/terms" className="font-[500] text-[#048BC4]">
                Terms and Conditions
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="font-[500] text-[#048BC4]">
                Privacy Statement.
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
}

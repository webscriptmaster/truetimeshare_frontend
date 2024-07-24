"use client";

import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { LuMail, LuPhone } from "react-icons/lu";
import { useForm } from "react-hook-form";
import * as z from "zod";

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

import { SIGN_MODE } from "@/utils/constants";

import { getSignup, setData, setStage } from "@/redux/slices/signupSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const EmailSchema = z.object({
  email: z.string().email({
    message: "Email is required"
  })
});

type EmailSchemaType = z.infer<typeof EmailSchema>;

export default function EmailSignUp1() {
  const signup = useAppSelector(getSignup);
  const dispatch = useAppDispatch();

  const emailForm = useForm<EmailSchemaType>({
    resolver: zodResolver(EmailSchema),
    defaultValues: {
      email: signup.data.email
    }
  });

  const handleModeChange = (newMode: string) => () => {
    dispatch(setData({ mode: newMode }));
  };

  const onEmailSubmit = (values: EmailSchemaType) => {
    dispatch(setData(values));
    dispatch(setStage(signup.stage + 1));
  };

  return (
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

      <Form {...emailForm}>
        <form
          onSubmit={emailForm.handleSubmit(onEmailSubmit)}
          className="flex flex-col gap-[24px]"
        >
          <div className="flex flex-col gap-[4px]">
            <FormField
              control={emailForm.control}
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
            className="rounded-[34px] bg-[#FA5B32] text-[16px] font-[600] text-[#F9F8F5] hover:bg-[#eA4B22]"
          >
            Continue
          </Button>
        </form>
      </Form>

      <div className="mt-[40px] flex flex-col gap-[24px]">
        <div className="relative flex h-[24px] w-full flex-col justify-center">
          <div className="h-[1px] w-full border-b border-[#E0E0E0]" />

          <div className="absolute left-[50%] top-[50%] w-[50px] translate-x-[-50%] translate-y-[-50%] bg-[#F9F8F5] text-center text-[14px] font-[400] text-[#4F4F4F]">
            OR
          </div>
        </div>

        <div className="mt-[12px] flex flex-col gap-[16px]">
          <Button className="w-full rounded-[34px] bg-[#FFFFFF] hover:bg-[#FFFFFF]">
            <FcGoogle className="h-[25px] w-[25px]" />

            <span className="pl-[12px] text-[15px] font-[600] text-[#4F4F4F]">
              Continue with Google
            </span>
          </Button>

          <Button className="w-full rounded-[34px] bg-[#475993] hover:bg-[#475993]">
            <AiFillFacebook className="h-[25px] w-[25px]" />

            <span className="pl-[12px] text-[15px] font-[600] text-[#FFFFFF]">
              Continue with Facebook
            </span>
          </Button>
        </div>

        <div className="mt-[40px] text-center text-[16px] font-[400] text-[#4F4F4F]">
          Already have an account?{" "}
          <span className="font-[600] text-[#048BC4]">
            <Link href="/signin">Sign in</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

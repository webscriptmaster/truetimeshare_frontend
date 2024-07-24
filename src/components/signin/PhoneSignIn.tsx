"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { LuMail, LuPhone, LuEye, LuEyeOff } from "react-icons/lu";
import { useForm } from "react-hook-form";
import { PhoneInput } from "react-international-phone";
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
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import LoadingOverlay from "@/components/_shared/LoadingOverlay";

import { SIGN_MODE } from "@/utils/constants";

import useAuthStore from "@/zustand/Auth";

import "react-international-phone/style.css";

const PhoneSchema = z.object({
  phone: z.string().min(3, {
    message: "Phone number is required"
  }),
  password: z.string().min(6, {
    message: "Password should be at least 6 characters"
  })
});

type PhoneSchemaType = z.infer<typeof PhoneSchema>;

export default function PhoneSignIn() {
  const router = useRouter();
  const auth = useAuthStore();

  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<PhoneSchemaType>({
    resolver: zodResolver(PhoneSchema),
    defaultValues: {
      phone: "",
      password: ""
    }
  });

  const handleModeChange = (newMode: string) => () => {
    auth.setMode(newMode);
  };

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = (values: PhoneSchemaType) => {
    auth.loginByPhoneAction(values, router);
  };

  return (
    <>
      <LoadingOverlay loading={auth.loading} />

      <div className="w-full max-w-[400px] md:w-[400px]">
        <h3 className="font-hg mb-[24px] text-center text-[28px] font-[600] text-[#181818]">
          Sign in
        </h3>

        <div className="mb-[40px] flex w-full justify-between">
          <Button
            onClick={handleModeChange(SIGN_MODE.EMAIL)}
            className={clsx(
              "flex w-full gap-[12px] bg-transparent font-[700] text-[#FA5B32] hover:bg-transparent",
              auth.mode === SIGN_MODE.EMAIL
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
              auth.mode === SIGN_MODE.PHONE
                ? "border-[1px] border-[#FA5B32]"
                : "border-none"
            )}
          >
            <LuPhone className="text-[20px]" /> Phone
          </Button>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mb-[24px] flex flex-col"
          >
            <div className="mb-[24px]">
              <FormField
                control={form.control}
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

            <div className="mb-[24px]">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[14px] font-[500] text-[#181818]">
                      Password
                    </FormLabel>

                    <div className="relative w-full">
                      <Input
                        className="h-[40px] w-full rounded-[34px]"
                        type={!showPassword ? "password" : "text"}
                        {...field}
                      />

                      <div
                        className="absolute right-[4px] top-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer"
                        onClick={handleShowPassword}
                      >
                        {!showPassword ? (
                          <LuEye className="text-[20px] text-[#4F4F4F]" />
                        ) : (
                          <LuEyeOff className="text-[20px] text-[#4F4F4F]" />
                        )}
                      </div>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="mb-[32px] flex flex-col gap-[12px] md:flex-row md:items-center md:justify-between">
              <div className="flex flex-row items-center gap-[12px]">
                <Checkbox
                  id="keepSign"
                  className="border border-[#D0D5DD] focus:border-[#FA5B32] data-[state=checked]:border-[#FA5B32] data-[state=checked]:bg-transparent data-[state=checked]:text-[#FA5B32]"
                />

                <Label
                  htmlFor="keepSign"
                  className="text-[14px] font-[400] text-[#4F4F4F]"
                >
                  Keep me signed in
                </Label>
              </div>

              <div className="text-[14px] font-[600] text-[#048BC4]">
                <Link href="/forgot">Forgot password?</Link>
              </div>
            </div>

            <Button
              type="submit"
              className="rounded-[34px] bg-[#FA5B32] text-[16px] font-[600] text-[#F9F8F5] hover:bg-[#eA4B22]"
            >
              Sign In
            </Button>
          </form>
        </Form>

        <div className="flex flex-col gap-[24px]">
          <div className="mt-[40px] text-center text-[16px] font-[400] text-[#4F4F4F]">
            Don't have an account?{" "}
            <span className="font-[600] text-[#048BC4]">
              <Link href="/signup">Register</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

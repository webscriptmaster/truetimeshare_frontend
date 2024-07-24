"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LuEye, LuEyeOff } from "react-icons/lu";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import LoadingOverlay from "@/components/_shared/LoadingOverlay";

import * as API from "@/api";
import { toastError, toastSuccess } from "@/lib/toast";
import useAuthStore from "@/zustand/Auth";

const FormSchema = z
  .object({
    firstName: z
      .string()
      .min(2, { message: "First name must be at least 2 characters long" }),
    lastName: z
      .string()
      .min(2, { message: "Last name must be at least 2 characters long" }),
    email: z.string().email({
      message: "Please enter a valid email address"
    }),
    password: z.string().min(6, {
      message: "Create password should be at least 6 characters"
    }),
    confirm: z.string().min(6, {
      message: "Repeat password should be at least 6 characters"
    }),
    privacy: z.literal(true, {
      errorMap: () => ({
        message: "You must agree to your friendly Privacy Policy"
      })
    })
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"]
  });

type FormSchemaType = z.infer<typeof FormSchema>;

export default function LandingSignUp() {
  const router = useRouter();
  const auth = useAuthStore();

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirm: ""
    }
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = async (values: FormSchemaType) => {
    try {
      setLoading(true);
      const response = await API.registerFromLanding(values);
      const { msg } = response.data;
      toastSuccess(msg);
      router.push("/signin");
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

  if (auth.user) return null;

  return (
    <div className="mb-[120px] flex w-full justify-center">
      <LoadingOverlay loading={loading} />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full max-w-[768px] flex-col gap-[24px] rounded-[26px] bg-[#FFFFFF] p-[36px] shadow-md"
        >
          <div className="flex flex-col justify-between gap-[24px] lg:flex-row lg:gap-[16px]">
            <div className="w-full">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mb-[6px] text-[14px] font-[500] text-[#344054]">
                      First name *
                    </FormLabel>

                    <Input className="rounded-[34px]" {...field} />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="w-full">
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mb-[6px] text-[14px] font-[500] text-[#344054]">
                      Last name *
                    </FormLabel>

                    <Input className="rounded-[34px]" {...field} />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="w-full">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mb-[6px] text-[14px] font-[500] text-[#344054]">
                    Email *
                  </FormLabel>

                  <Input type="email" className="rounded-[34px]" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-full">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[14px] font-[500] text-[#344054]">
                    Create Password *
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

          <div className="w-full">
            <FormField
              control={form.control}
              name="confirm"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[14px] font-[500] text-[#344054]">
                    Repeat Password *
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

          <div className="w-full">
            <FormField
              control={form.control}
              name="privacy"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center space-y-0">
                    <Checkbox
                      id="privacy"
                      className="border border-[#D0D5DD]"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />

                    <FormLabel
                      htmlFor="privacy"
                      className="ml-[12px] text-[14px] font-[500] text-[#344054]"
                    >
                      I agree to your friendly{" "}
                      <Link
                        href="/privacy"
                        className="font-[600] text-[#048BC4]"
                      >
                        Privacy Policy
                      </Link>{" "}
                      and{" "}
                      <Link href="/terms" className="font-[600] text-[#048BC4]">
                        Terms of use
                      </Link>
                      .
                    </FormLabel>
                  </div>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-end">
            <Button
              type="submit"
              className="font-hg rounded-[34px] bg-[#FA5B32] px-[16px] py-[8px] text-[16px] font-[600] text-[#FFFFFF] hover:bg-[#DA3B12]"
            >
              Sign Up
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

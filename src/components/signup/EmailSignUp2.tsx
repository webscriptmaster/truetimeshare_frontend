"use client";

import Link from "next/link";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { useForm } from "react-hook-form";
import * as z from "zod";

import * as API from "@/api";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import LoadingOverlay from "@/components/_shared/LoadingOverlay";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getSignup, setStage } from "@/redux/slices/signupSlice";
import { toastError, toastSuccess } from "@/lib/toast";

const FormSchema = z
  .object({
    password: z.string().min(6, {
      message: "Password should be at least 6 characters"
    }),
    confirm: z.string().min(6, {
      message: "Repeat password should be at least 6 characters"
    })
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"]
  });

type FormSchemaType = z.infer<typeof FormSchema>;

export default function EmailSignUp2() {
  const signup = useAppSelector(getSignup);
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      password: "",
      confirm: ""
    }
  });

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = async (values: FormSchemaType) => {
    try {
      setLoading(true);
      const response = await API.register({
        ...signup.data,
        password: values.password
      });
      const { msg } = response.data;
      toastSuccess(msg);
      dispatch(setStage(signup.stage + 1));
    } catch (err: any) {
      console.error(err);
      if (err && err.response && err.response.data && err.response.data.msg) {
        toastError(err.response.data.msg);
      }
      dispatch(setStage(signup.stage - 1));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <LoadingOverlay loading={loading} />

      <div className="flex w-full max-w-[400px] flex-col md:w-[400px]">
        <h3 className="font-hg mb-[16px] text-center text-[28px] font-[600] text-[#181818]">
          Create Password
        </h3>

        <div className="mb-[20px] text-center text-[16px] font-[400] text-[#4F4F4F]">
          Use a minimum of 6 characters, including letters, lowercase letters,
          and numbers.
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mb-[32px] flex flex-col items-center justify-center"
          >
            <div className="mb-[20px] w-full">
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

            <div className="mb-[32px] w-full">
              <FormField
                control={form.control}
                name="confirm"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[14px] font-[500] text-[#181818]">
                      Confirm Password
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
              <Button
                type="submit"
                className="h-[40px] w-full rounded-[34px] bg-[#FA5B32] text-[16px] font-[600] text-[#F9F8F5] hover:bg-[#eA4B22]"
              >
                Create account
              </Button>
            </div>
          </form>
        </Form>

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
      </div>
    </>
  );
}

"use client";

import Link from "next/link";

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

import { SIGN_MODE, SITE_TITLE } from "@/utils/constants";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getForgot, setMode } from "@/redux/slices/forgotSlice";
import { sendResetCode } from "@/redux/actions/forgotAction";

import "react-international-phone/style.css";

const FormSchema = z.object({
  phone: z.string().min(3, {
    message: "Phone number is required"
  })
});

type FormSchemaType = z.infer<typeof FormSchema>;

export default function PhoneForgot1() {
  const forgot = useAppSelector(getForgot);
  const dispatch = useAppDispatch();

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      phone: forgot.data.phone
    }
  });

  const handleModeChange = (newMode: string) => () => {
    dispatch(setMode(newMode));
  };

  const onSubmit = async (values: FormSchemaType) => {
    dispatch(sendResetCode(values));
  };

  return (
    <>
      <LoadingOverlay loading={forgot.loading} />

      <div className="w-full max-w-[400px] md:w-[400px]">
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
          We'll send you a code to verify to reset password. Enter your phone
          number used for {SITE_TITLE}
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col"
          >
            <div className="mb-[32px]">
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

            <Button
              type="submit"
              className="mb-[32px] rounded-[34px] border border-[#FA5B32] bg-transparent text-[16px] font-[600] text-[#FA5B32] hover:bg-[#eA4B22] hover:bg-transparent"
            >
              Send Reset Code
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

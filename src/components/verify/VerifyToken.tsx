"use client";

import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

import * as API from "@/api";
import { toastError } from "@/lib/toast";
import LoadingOverlay from "@/components/_shared/LoadingOverlay";

interface Props {
  token: string;
}

export default function VerifyToken({ token }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const redirectSeconds = 10;

  const verifyToken = async () => {
    try {
      await API.verifyRegisterToken({ token });
      setLoading(false);
    } catch (err: any) {
      if (err && err.response && err.response.data && err.response.data.msg) {
        toastError(err.response.data.msg);
      }
      router.push("/signup");
    }
  };

  useEffect(() => {
    verifyToken();
  }, []);

  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        router.push("/signin");
      }, redirectSeconds * 1000);
    }
  }, [loading]);

  return (
    <>
      <LoadingOverlay loading={loading} />

      {!loading && (
        <div className="flex w-full max-w-[400px] flex-col md:w-[400px]">
          <h3 className="font-hg mb-[40px] text-center text-[28px] font-[600] text-[#181818]">
            Email verified!
          </h3>

          <div className="text-center text-[16px] font-[400] text-[#4F4F4F]">
            Your email address has been verified. You will be redirected to the
            signin page within {redirectSeconds} seconds.
          </div>
        </div>
      )}
    </>
  );
}

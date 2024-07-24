"use client";

import { useRouter } from "next/navigation";

import { useEffect } from "react";

import useAuthStore from "@/zustand/Auth";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const router = useRouter();
  const auth = useAuthStore();

  useEffect(() => {
    if (!auth.user) {
      router.push("/");
    }
  }, []);

  if (auth.user) return children;

  return null;
}

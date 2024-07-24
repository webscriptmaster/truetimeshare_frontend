"use client";

import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <img
        className="min-h-[48px] min-w-[234px]"
        src="/logo/logo.png"
        alt="Logo"
      />
    </Link>
  );
}

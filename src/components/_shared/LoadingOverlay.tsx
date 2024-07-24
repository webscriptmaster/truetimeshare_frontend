"use client";

import { Watch } from "react-loader-spinner";

interface Props {
  loading: boolean;
}

export default function LoadingOverlay({ loading }: Props) {
  if (!loading) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/60"
      style={{ zIndex: 2000 }}
    >
      <Watch visible height="120" width="120" radius="48" color="#FA5B32" />
    </div>
  );
}

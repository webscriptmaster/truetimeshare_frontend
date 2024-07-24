"use client";

import { useRef } from "react";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { makeStore, AppStore, persistor } from "@/redux/store";

export default function StoreProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return (
    <Provider store={storeRef.current}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}

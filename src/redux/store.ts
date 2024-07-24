"use client";

import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";

import rootReducer, { rootPersistConfig } from "./rootReducer";

export const makeStore = () =>
  configureStore({
    reducer: persistReducer(rootPersistConfig, rootReducer),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false
      }),
    devTools: process.env.NODE_ENV !== "production"
  });

// Create a persistor for data persistence using Redux Persist
const persistor = persistStore(makeStore());

// Extract the dispatch function from the store for convenience
const { dispatch } = makeStore();

// Export the persistor, dispatch for use in components
export { persistor, dispatch };

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

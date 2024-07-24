import { combineReducers } from "@reduxjs/toolkit";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

import { signupSlice } from "./slices/signupSlice";
import { forgotSlice } from "./slices/forgotSlice";
import { propertySlice } from "./slices/propertySlice";
import { communitySlice } from "./slices/communitySlice";
import { currencySlice } from "./slices/currencySlice";

export const createNoopStorage = () => ({
  getItem(_key: string) {
    return Promise.resolve(null);
  },

  setItem(_key: string, value: any) {
    return Promise.resolve(value);
  },

  removeItem(_key: string) {
    return Promise.resolve();
  }
});

export const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

export const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "tts-redux-"
};

const rootReducer = combineReducers({
  [signupSlice.name]: signupSlice.reducer,
  [forgotSlice.name]: forgotSlice.reducer,
  [propertySlice.name]: propertySlice.reducer,
  [communitySlice.name]: communitySlice.reducer,
  [currencySlice.name]: currencySlice.reducer
});

export default rootReducer;

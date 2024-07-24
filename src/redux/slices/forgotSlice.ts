/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

import { SIGN_MODE } from "@/utils/constants";
import type { RootState } from "@/redux/store";

interface IForgotSlice {
  loading: boolean;
  mode: string;
  stage: number;
  data: {
    email?: string;
    phone?: string;
  };
}

const initialState: IForgotSlice = {
  loading: false,
  mode: SIGN_MODE.EMAIL,
  stage: 1,
  data: {
    email: "",
    phone: ""
  }
};

export const forgotSlice = createSlice({
  name: "Forgot",
  initialState,
  reducers: {
    setLoading: (state: IForgotSlice, action) => {
      state.loading = action.payload;
    },

    setMode: (state: IForgotSlice, action) => {
      state.mode = action.payload;
    },

    setStage: (state: IForgotSlice, action) => {
      state.stage = action.payload;
    },

    increaseStage: (state: IForgotSlice) => {
      state.stage += 1;
    },

    setData: (state: IForgotSlice, action) => {
      state.data = { ...state.data, ...action.payload };
    }
  }
});

export const { setLoading, setMode, setStage, increaseStage, setData } =
  forgotSlice.actions;
export const getForgot = (state: RootState) => state.Forgot;

export default forgotSlice.reducer;

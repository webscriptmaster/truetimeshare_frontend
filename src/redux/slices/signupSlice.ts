/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

import { SIGN_MODE } from "@/utils/constants";
import type { RootState } from "@/redux/store";

interface ISignupSlice {
  stage: number;
  data: {
    mode: string;
    email?: string;
    phone?: string;
    password: string;
  };
}

const initialState: ISignupSlice = {
  stage: 1,
  data: {
    mode: SIGN_MODE.EMAIL,
    email: "",
    phone: "",
    password: ""
  }
};

export const signupSlice = createSlice({
  name: "Signup",
  initialState,
  reducers: {
    setStage: (state: ISignupSlice, action) => {
      state.stage = action.payload;
    },

    setData: (state: ISignupSlice, action) => {
      state.data = { ...state.data, ...action.payload };
    }
  }
});

export const { setStage, setData } = signupSlice.actions;
export const getSignup = (state: RootState) => state.Signup;

export default signupSlice.reducer;

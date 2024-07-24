/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

import type { RootState } from "@/redux/store";

interface ICommunitySlice {
  loading: boolean;
  isEmailRegistered: boolean;
}

const initialState: ICommunitySlice = {
  loading: false,
  isEmailRegistered: false
};

export const communitySlice = createSlice({
  name: "Community",
  initialState,
  reducers: {
    setLoading: (state: ICommunitySlice, action) => {
      state.loading = action.payload;
    },

    setIsEmailRegistered: (state: ICommunitySlice, action) => {
      state.isEmailRegistered = action.payload;
    }
  }
});

export const { setLoading, setIsEmailRegistered } = communitySlice.actions;
export const getCommunity = (state: RootState) => state.Community;

export default communitySlice.reducer;

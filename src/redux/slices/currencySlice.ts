/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

import type { RootState } from "@/redux/store";
import { ICurrency } from "@/types/interfaces";

interface ICurrencySlice {
  loading: boolean;
  currency: ICurrency | null;
}

const initialState: ICurrencySlice = {
  loading: false,
  currency: null
};

export const currencySlice = createSlice({
  name: "Currency",
  initialState,
  reducers: {
    setLoading: (state: ICurrencySlice, action) => {
      state.loading = action.payload;
    },

    setCurrency: (state: ICurrencySlice, action) => {
      state.currency = action.payload;
    }
  }
});

export const { setLoading, setCurrency } = currencySlice.actions;
export const getCurrency = (state: RootState) => state.Currency;

export default currencySlice.reducer;

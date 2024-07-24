/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

import type { RootState } from "@/redux/store";
import { IProperty } from "@/types/interfaces";

interface IPropertySlice {
  loading: boolean;
  available: IProperty[];
  rented: string[];
  booked: string[];
}

const initialState: IPropertySlice = {
  loading: false,
  available: [],
  rented: [],
  booked: []
};

export const propertySlice = createSlice({
  name: "Property",
  initialState,
  reducers: {
    setLoading: (state: IPropertySlice, action) => {
      state.loading = action.payload;
    },

    setAvailable: (state: IPropertySlice, action) => {
      state.available = action.payload;
    },

    setRented: (state: IPropertySlice, action) => {
      state.rented = action.payload;
    },

    setBooked: (state: IPropertySlice, action) => {
      state.booked = action.payload;
    }
  }
});

export const { setLoading, setAvailable, setRented, setBooked } =
  propertySlice.actions;
export const getProperty = (state: RootState) => state.Property;

export default propertySlice.reducer;

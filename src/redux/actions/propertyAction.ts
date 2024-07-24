import { Dispatch } from "@reduxjs/toolkit";

import * as API from "@/api";
import { toastError } from "@/lib/toast";
import { setAvailable, setLoading } from "../slices/propertySlice";

export function getAvailableProperty() {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await API.getAllProperty();
      if (response && response.data && response.data.properties) {
        dispatch(setAvailable(response.data.properties));
      }
    } catch (err: any) {
      console.error(err);
      if (err && err.response && err.response.data && err.response.data.msg) {
        toastError(err.response.data.msg);
      } else {
        toastError("Something went wrong. Please try again later.");
      }
    } finally {
      dispatch(setLoading(false));
    }
  };
}

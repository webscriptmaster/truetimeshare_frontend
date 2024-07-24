import { Dispatch } from "@reduxjs/toolkit";

import * as API from "@/api";
import { toastError } from "@/lib/toast";
import { setIsEmailRegistered, setLoading } from "../slices/communitySlice";

export function registerEmail(data: any) {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await API.registerEmail(data);
      if (response && response.data && response.data.success) {
        dispatch(setIsEmailRegistered(true));
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

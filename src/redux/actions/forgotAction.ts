import { Dispatch } from "@reduxjs/toolkit";

import * as API from "@/api";
import { toastError } from "@/lib/toast";
import { increaseStage, setData, setLoading } from "../slices/forgotSlice";

export function sendResetLink(data: any) {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setLoading(true));
      await API.sendResetLink(data);
      dispatch(setData(data));
      dispatch(increaseStage());
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

export function sendResetCode(data: any) {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setLoading(true));
      await API.sendResetCode(data);
      dispatch(setData(data));
      dispatch(increaseStage());
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

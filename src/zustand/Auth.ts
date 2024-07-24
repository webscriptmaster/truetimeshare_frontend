import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { IUser } from "@/types/interfaces";
import { SIGN_MODE } from "@/utils/constants";
import * as API from "@/api";
import {
  removeLocalAccessToken,
  removeLocalRefreshToken,
  setLocalAccessToken,
  setLocalRefreshToken
} from "@/lib/auth";
import { toastError, toastSuccess } from "@/lib/toast";

interface IAuthState {
  loading: boolean;
  mode: string;
  user: IUser | null;

  setLoading: (payload: boolean) => void;
  setMode: (payload: string) => void;
  setUser: (payload: IUser | null) => void;

  loginByEmailAction: (data: any, router: AppRouterInstance) => void;
  loginByPhoneAction: (data: any, router: AppRouterInstance) => void;
  logoutAction: (router: AppRouterInstance) => void;
}

const useAuthStore = create<IAuthState>()(
  persist(
    (set) => ({
      loading: false,
      mode: SIGN_MODE.EMAIL,
      user: null,

      setLoading: (payload: boolean) => set({ loading: payload }),
      setMode: (payload: string) => set({ mode: payload }),
      setUser: (payload: IUser | null) => set({ user: payload }),

      loginByEmailAction: async (data: any, router: AppRouterInstance) => {
        try {
          set({ loading: true });
          const response = await API.loginByEmail(data);

          if (response && response.data) {
            const { user, accessToken, refreshToken } = response.data;
            setLocalAccessToken(accessToken);
            setLocalRefreshToken(refreshToken);

            set({ user });
            toastSuccess("You have been successfully logged in.");
            router.push("/overview");
          }
        } catch (err: any) {
          console.error(err);
          if (
            err &&
            err.response &&
            err.response.data &&
            err.response.data.msg
          ) {
            toastError(err.response.data.msg);
          } else {
            toastError("Something went wrong. Please try again later.");
          }
        } finally {
          set({ loading: false });
        }
      },

      loginByPhoneAction: async (data: any, router: AppRouterInstance) => {
        try {
          set({ loading: true });
          const response = await API.loginByPhone(data);

          if (response && response.data) {
            const { user, accessToken, refreshToken } = response.data;
            setLocalAccessToken(accessToken);
            setLocalRefreshToken(refreshToken);

            set({ user });
            toastSuccess("You have been successfully logged in.");
            router.push("/overview");
          }
        } catch (err: any) {
          console.error(err);
          if (
            err &&
            err.response &&
            err.response.data &&
            err.response.data.msg
          ) {
            toastError(err.response.data.msg);
          } else {
            toastError("Something went wrong. Please try again later.");
          }
        } finally {
          set({ loading: false });
        }
      },

      logoutAction: async (router: AppRouterInstance) => {
        try {
          set({ loading: true });
          await API.logout();

          removeLocalAccessToken();
          removeLocalRefreshToken();
          set({ user: null });

          router.push("/");
        } catch (err: any) {
          console.error(err);
          if (
            err &&
            err.response &&
            err.response.data &&
            err.response.data.msg
          ) {
            toastError(err.response.data.msg);
          } else {
            toastError("Something went wrong. Please try again later.");
          }
        } finally {
          set({ loading: false });
        }
      }
    }),
    {
      name: "tts-auth",
      storage: createJSONStorage(() => sessionStorage)
    }
  )
);

export default useAuthStore;

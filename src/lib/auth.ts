export const AUTHORIZATION_PREFIX = "TrueTimeShare";

export const getLocalAccessToken = () =>
  localStorage.getItem("tts_access_token") || "";

export const setLocalAccessToken = (newAccessToken: string) =>
  localStorage.setItem("tts_access_token", newAccessToken);

export const removeLocalAccessToken = () =>
  localStorage.removeItem("tts_access_token");

export const getLocalRefreshToken = () =>
  localStorage.getItem("tts_refresh_token") || "";

export const setLocalRefreshToken = (newRefreshToken: string) =>
  localStorage.setItem("tts_refresh_token", newRefreshToken);

export const removeLocalRefreshToken = () =>
  localStorage.removeItem("tts_refresh_token");

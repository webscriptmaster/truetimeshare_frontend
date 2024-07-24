import api from "./api";

// Login
const loginByEmail = (data: any) => api().post("/auth/login-by-email", data);
const loginByPhone = (data: any) => api().post("/auth/login-by-phone", data);

// Logout
const logout = () => api().post("/auth/logout");

// Register
const register = (data: any) => api().post("/auth/register", data);
const registerFromLanding = (data: any) =>
  api().post("/auth/register-from-landing", data);

// Register via email
const verifyRegisterToken = (data: any) =>
  api().post("/auth/verify-register-token", data);

// Register via phone
const verifyRegisterCode = (data: any) =>
  api().post("/auth/verify-register-code", data);
const resendRegisterCode = (data: any) =>
  api().post("/auth/resend-register-code", data);
const updateRegisterPassword = (data: any) =>
  api().post("/auth/update-register-password", data);

// Reset via email
const sendResetLink = (data: any) => api().post("/auth/send-reset-link", data);
const verifyResetToken = (data: any) =>
  api().post("/auth/verify-reset-token", data);
const resetPasswordByToken = (data: any) =>
  api().post("/auth/reset-password-by-token", data);

// Reset via phone
const sendResetCode = (data: any) => api().post("/auth/send-reset-code", data);
const resendResetCode = (data: any) =>
  api().post("/auth/resend-reset-code", data);
const verifyResetCode = (data: any) =>
  api().post("/auth/verify-reset-code", data);
const resetPasswordByPhone = (data: any) =>
  api().post("/auth/reset-password-by-phone", data);

export {
  // Login
  loginByEmail,
  loginByPhone,

  // Logout
  logout,

  // Register
  register,
  registerFromLanding,

  // Register via email
  verifyRegisterToken,

  // Register via phone
  verifyRegisterCode,
  resendRegisterCode,
  updateRegisterPassword,

  // Reset via email
  sendResetLink,
  verifyResetToken,
  resetPasswordByToken,

  // Reset via phone
  sendResetCode,
  resendResetCode,
  verifyResetCode,
  resetPasswordByPhone
};

import api from "./api";

const registerEmail = (data: any) =>
  api().post("/community/register-email", data);

export { registerEmail };

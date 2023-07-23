import { atom } from "recoil";

export const adminState = atom({
  key: "adminState",
  default: {
    email: "",
    password: "",
    isLoggedIn: false,
  },
});

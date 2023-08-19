import { atom } from "recoil";

export const adminState = atom({
  key: "adminState",
  default: {
    email: localStorage.getItem('email'),
    username: localStorage.getItem('email')?.split('@')[0].toUpperCase(),
    isLoggedIn: localStorage.getItem("isLoggedIn") !== null,
  },
});

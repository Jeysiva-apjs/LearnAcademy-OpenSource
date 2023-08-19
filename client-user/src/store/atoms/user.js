import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  default: {
    email: localStorage.getItem('email'),
    username: localStorage.getItem('email')?.split('@')[0].toUpperCase(),
    isLoggedIn: localStorage.getItem('isLoggedIn') !== null,
  },
});

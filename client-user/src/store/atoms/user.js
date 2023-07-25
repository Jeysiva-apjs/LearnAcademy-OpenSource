import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  default: {
    email: "",
    password: "",
    isLoggedIn: localStorage.getItem("isLoggedIn") !== null,
  },
});

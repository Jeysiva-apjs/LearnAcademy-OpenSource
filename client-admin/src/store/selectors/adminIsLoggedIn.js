import { selector } from "recoil";
import { adminState } from "../atoms/admin";

export const adminIsLoggedInState = selector({
  key: "adminIsLoggedInState",
  get: ({ get }) => {
    const admin = get(adminState);
    return admin.isLoggedIn;
  },
});

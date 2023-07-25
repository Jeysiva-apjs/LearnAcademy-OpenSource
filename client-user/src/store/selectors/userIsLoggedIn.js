import { selector } from "recoil";
import { userState } from "../atoms/user";

export const userIsLoggedInState = selector({
  key: "userIsLoggedInState",
  get: ({ get }) => {
    const user = get(userState);
    return user.isLoggedIn;
  },
});

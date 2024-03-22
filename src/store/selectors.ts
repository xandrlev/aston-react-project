import { RootState } from "./store";

export const selectUserId = (state: RootState) => state.user.id;
export const selectUserEmail = (state: RootState) => state.user.email;
export const selectUserAuthStatus = (state: RootState) => state.user.isAuth;

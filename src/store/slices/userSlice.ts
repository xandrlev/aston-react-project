import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface State {
  id: string | null;
  email: string | null;
  isAuth: boolean;
}

const initialState: State = {
  id: null,
  email: null,
  isAuth: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, { payload }: PayloadAction<State>) {
      state.id = payload.id;
      state.email = payload.email;
      state.isAuth = true;
    },
    removeUser(state) {
      state.id = null;
      state.email = null;
      state.isAuth = false;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;

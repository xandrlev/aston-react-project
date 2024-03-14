import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface State {
  id: string | null;
  email: string | null;
}

const initialState: State = {
  id: null,
  email: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, { payload }: PayloadAction<State>) {
      state.id = payload.id;
      state.email = payload.email;
    },
    removeUser(state) {
      state.id = null;
      state.email = null;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;

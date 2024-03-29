import { configureStore } from "@reduxjs/toolkit";

import { heroesApi } from "./api/heroesApi";
import { userLoginLoggerMiddleware } from "./middleware/userLoginLoggerMiddleware";
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    [heroesApi.reducerPath]: heroesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      heroesApi.middleware,
      userLoginLoggerMiddleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

/* eslint-disable no-console */
import { Middleware } from "@reduxjs/toolkit";

export const userLoginLoggerMiddleware: Middleware =
  (store) => (next: (action: unknown) => void) => (action: unknown) => {
    console.log("dispatching", action);
    console.log("before", store.getState());
    const res = next(action);
    console.log("after", store.getState());
    return res;
  };

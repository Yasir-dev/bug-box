import { configureStore } from "@reduxjs/toolkit";
import bugsReducer from "./bugs";
import authenticationReducer from "./authenticationToken";

export const store = configureStore({
  reducer: {
    bugs: bugsReducer,
    token: authenticationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

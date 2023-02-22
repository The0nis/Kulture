import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { UserApi } from "../services/UserApi";
import { ForgetPasswordApi } from "../services/ForgetPasswordApi";
import globalReducer from "../../state";

export const store = configureStore({
  reducer: {
    global: globalReducer,
    [UserApi.reducerPath]: UserApi.reducer,
    [ForgetPasswordApi.reducerPath]: ForgetPasswordApi.reducer,
  },
  middleware: (getDefault) => getDefault().concat(UserApi.middleware),
});

setupListeners(store.dispatch);

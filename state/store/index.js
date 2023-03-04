import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { UserApi } from "../services/UserApi";
import { RegisterApi } from "../services/RegisterApi";
import { LoginApi } from "../services/LoginApi";
import { ForgetPasswordApi } from "../services/ForgetPasswordApi";
import globalReducer from "../../state";
import { persistStore } from "redux-persist";
import authReducer from "../slices/auth";

export const store = configureStore({
  reducer: {
    global: globalReducer,
    authStore: authReducer,
    [UserApi.reducerPath]: UserApi.reducer,
    [ForgetPasswordApi.reducerPath]: ForgetPasswordApi.reducer,
    [RegisterApi.reducerPath]: RegisterApi.reducer,
    [LoginApi.reducerPath]: LoginApi.reducer,
  },
  middleware: (getDefault) => getDefault().concat(UserApi.middleware),
  middleware: (getDefault) => getDefault().concat(RegisterApi.middleware),
  middleware: (getDefault) => getDefault().concat(ForgetPasswordApi.middleware),
  middleware: (getDefault) => getDefault().concat(LoginApi.middleware),
});

setupListeners(store.dispatch);

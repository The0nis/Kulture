import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { UserApi } from "../services/UserApi";
import { PasswordResetApi } from "../services/passwordResetApi";
import { RegisterApi } from "../services/RegisterApi";
import { SearchApi } from "../services/SearchApi";
import { PayStackApi } from "../services/PayStackApi";
import { StatusApi } from "../services/StatusApi";
import { authApi } from "../services/authApi";
import { ForgetPasswordApi } from "../services/ForgetPasswordApi";
import globalReducer from "../../state";
import { persistStore } from "redux-persist";
import authReducer from "../slices/auth";

export const store = configureStore({
  reducer: {
    global: globalReducer,
    authStore: authReducer,
    [UserApi.reducerPath]: UserApi.reducer,
    [PasswordResetApi.reducerPath]: PasswordResetApi.reducer,
    [StatusApi.reducerPath]: StatusApi.reducer,
    [ForgetPasswordApi.reducerPath]: ForgetPasswordApi.reducer,
    [RegisterApi.reducerPath]: RegisterApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [PayStackApi.reducerPath]: PayStackApi.reducer,
    [SearchApi.reducerPath]: SearchApi.reducer,
  },
  middleware: (getDefault) => getDefault().concat(UserApi.middleware),
  middleware: (getDefault) => getDefault().concat(StatusApi.middleware),
  middleware: (getDefault) => getDefault().concat(RegisterApi.middleware),
  middleware: (getDefault) => getDefault().concat(PasswordResetApi.middleware),
  middleware: (getDefault) => getDefault().concat(ForgetPasswordApi.middleware),
  middleware: (getDefault) => getDefault().concat(authApi.middleware),
  middleware: (getDefault) => getDefault().concat(SearchApi.middleware),
  middleware: (getDefault) => getDefault().concat(PayStackApi.middleware),
});

export const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    localStorage.clear();
    return reducers(undefined, action);
  }
  return reducers(state, action);
};

setupListeners(store.dispatch);

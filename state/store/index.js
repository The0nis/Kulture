import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { UserApi } from "../services/UserApi";
import { RegisterApi }  from '../services/RegisterApi';
import globalReducer from "../../state";

export const store = configureStore({
  reducer: {
    global: globalReducer,
    [UserApi.reducerPath]: UserApi.reducer,
    [RegisterApi.reducerPath]: RegisterApi.reducer,
  },
  middleware: (getDefault) => getDefault().concat(UserApi.middleware),
  middleware: (getDefault) => getDefault().concat(RegisterApi.middleware),
});

setupListeners(store.dispatch);

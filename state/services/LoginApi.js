import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth, createRequest } from "./shared";

export const LoginApi = createApi({
  reducerPath: "LoginApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (data) => {
        return {
          url: `login`,
          method: "post",
          body: data,
        };
      },
    }),
  }),
});

export const { useLoginUserMutation } = LoginApi;

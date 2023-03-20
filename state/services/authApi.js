import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth, createRequest } from "./shared";

export const authApi = createApi({
  reducerPath: "authApi",
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
    logoutUser: builder.query({
      query: () => createRequest(`logout`),
    }),
  }),
});

export const { useLoginUserMutation, useLogoutUserQuery } = authApi;

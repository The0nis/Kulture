import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const PasswordResetApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "PasswordResetApi",
  tagTypes: ["passwordReset"],
  endpoints: (builder) => ({
    passwordReset: builder.mutation({
      query: (data) => ({
        url: "passwordReset",
        method: "post",
        body: data,
      }),
      // invalidatesTags: ["passwordReset"],
    }),
  }),
});

export const { usePasswordResetMutation } = PasswordResetApi;

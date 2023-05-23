import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const PasswordResetApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://54.236.30.189:9000/api/" }),
  reducerPath: "PasswordResetApi",
  tagTypes: ["passwordReset"],
  endpoints: (builder) => ({
    passwordReset: builder.mutation({
      query: (data) => ({
        url: "passwordReset",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["passwordReset"],
    }),
  }),
});

export const { usePasswordResetMutation } = PasswordResetApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const RegisterApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "RegisterApi",
  tagTypes: ["register"],
  endpoints: (builder) => ({
    createUser: builder.mutation({
        query: (data) => {
          return {
            url: `register`,
            method: "POST",
            body: data,
          };
        },
        invalidatesTags: ["register"],
      }),
  }),
});

export const { useCreateUserMutation } = RegisterApi;

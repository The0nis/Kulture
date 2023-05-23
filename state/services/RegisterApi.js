import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const RegisterApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://54.236.30.189:9000/api/"}),
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

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ForgetPasswordApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://54.236.30.189:9000/api/"}),
  reducerPath: "ForgetPasswordApi",
  tagTypes: ["forgetpassword"],
  endpoints: (builder) => ({
    getPassword: builder.mutation({
      query: (data) => {
        return {
          url: `forgetpassword`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["forgetpassword"],
    }),
  }),
});

export const { useGetPasswordMutation } = ForgetPasswordApi;

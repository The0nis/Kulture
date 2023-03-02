import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ForgetPasswordApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "ForgetPasswordApi",
  tagTypes: ["forgetpassword"],
  endpoints: (builder) => ({
    getPassword: builder.mutation({
      query: (data) => {
        return {
          url: `forgetpassword`,
          method: "post",
          body: data,
        };
      },
      invalidatesTags: ["forgetpassword"],
    }),
  }),
});

export const { useGetPasswordMutation } = ForgetPasswordApi;

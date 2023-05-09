import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const PayStackApi = createApi({
  reducerPath: "PayStackApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  endpoints: (builder) => ({
    payStack: builder.mutation({
      query: (data) => {
        return {
          url: "paystack-pay",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { usePayStackMutation } = PayStackApi;

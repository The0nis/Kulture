import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const PaymentApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "PaymentApi",
  endpoints: (builder) => ({
    callback: builder.mutation({
      query: (payload) => ({
        url: 'payment/callback',
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useCallBackMutation } = PaymentApi;

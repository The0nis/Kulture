import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const PaymentApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://54.236.30.189:9000/api/" }),
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

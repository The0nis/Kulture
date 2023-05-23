import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const PayStackApi = createApi({
  reducerPath: "PayStackApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://54.236.30.189:9000/api/" }),
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

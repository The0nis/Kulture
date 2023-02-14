import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const KultureApi = createApi({
  reducerPath: "KultureApi",
  baseQuery: fetchBaseQuery({ baseUrl: "    " }),
  endpoints: (builder) => ({
    getAllKulture: builder.query({
      query: () => "kulture",
    }),
  }),
});

export const { useGetAllKultureQuery } = KultureApi;

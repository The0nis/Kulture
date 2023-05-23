import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const FilterApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://54.236.30.189:9000/api/"}),
  reducerPath: "FilterApi",
  endpoints: (builder) => ({
    getFilter: builder.query({
      query: (params) => 'filter?${params}',
    }),
  }),
});

export const {useGetFilterQuery} = FilterApi;
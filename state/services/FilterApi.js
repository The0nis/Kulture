import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const FilterApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "FilterApi",
  endpoints: (builder) => ({
    getFilter: builder.query({
      query: (params) => 'filter?${params}',
    }),
  }),
});

export const {useGetFilterQuery} = FilterApi;
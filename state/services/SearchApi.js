import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const SearchApi = createApi({
    reducerPath: "SearchApi",
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_BASE_URL }),
    endpoints: (builder) => ({
        getSearch: builder.query({
query: (query) => "search"
        }),
    }),
});

export const {useGetSearchQuery} = SearchApi;
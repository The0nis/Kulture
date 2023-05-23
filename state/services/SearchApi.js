import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const SearchApi = createApi({
    reducerPath: "SearchApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://54.236.30.189:9000/api/" }),
    endpoints: (builder) => ({
        getSearch: builder.query({
query: (query) => "search"
        }),
    }),
});

export const {useGetSearchQuery} = SearchApi;
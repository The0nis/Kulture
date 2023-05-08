import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const StatusApi = createApi({
    reducerPath: "statusApi",
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_BASE_URL }),
    endpoints: (builder) => ({
        getStatus:builder.mutation({
            query: () => "status"
        }),
    }),
});

export const {useGetStatusQuery} = StatusApi;
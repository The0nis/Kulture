import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const StatusApi = createApi({
    reducerPath: "statusApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://54.236.30.189:9000/api/"}),
    endpoints: (builder) => ({
        getStatus:builder.mutation({
            query: () => "status"
        }),
    }),
});

export const {useGetStatusQuery} = StatusApi;
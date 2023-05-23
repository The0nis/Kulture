import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const CreateApi = createApi({
  reducerPath: "CreateApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://54.236.30.189:9000/api/" }),
  endpoints: (builder) => ({
    create: builder.mutation({
      query: (data) => {
        return {
          url: "create",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const {useCreateMutation} = CreateApi;

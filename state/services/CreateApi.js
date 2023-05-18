import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const CreateApi = createApi({
  reducerPath: "CreateApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
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

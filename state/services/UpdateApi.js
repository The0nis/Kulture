import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const UpdateApi = createApi({
  reducerPath: "UpdateApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  endpoints: (builder) => ({
    updateItem: builder.mutation({
      query: (id, data) => ({
        url: 'update/${id}',
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {useUpdateItemMutation} = UpdateApi;
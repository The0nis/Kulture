import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const UpdateApi = createApi({
  reducerPath: "UpdateApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://54.236.30.189:9000/api/"}),
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
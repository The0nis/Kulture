import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const UserApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://54.236.30.189:9000/api/" }),
  reducerPath: "userApi",
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),
  }),
});

export const { useGetUserQuery } = UserApi;

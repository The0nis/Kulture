import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const UploadApi = createApi({
  reducerPath: "UploadApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://54.236.30.189:9000/api/"}),
  endpoints: (builder) => ({
    upload: builder.mutation({
      query: ({ file }) => {
        const formData = new FormData();
        formData.append("file", file);
        return {
          url: "upload",
          method: "POST",
          body: formData,
          headers: {
            "content-type": "multipart/form-data",
          },
        };
      },
    }),
  }),
});

export const { useUploadMutation } = UploadApi;

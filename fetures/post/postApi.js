import api from "../api/api";

export const postApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => "/posts?populate=*",
        }),
        createPost: builder.mutation({
            query: (data) => ({
                url: "/posts",
                method: "POST",
                body: data,
            }),
        }),
        upload: builder.mutation({
            query: (data) => ({
                url: "/upload",
                method: "POST",
                body: data,
            }),
        }),
    }),
});

export const { useGetPostsQuery, useCreatePostMutation, useUploadMutation } =
    postApi;

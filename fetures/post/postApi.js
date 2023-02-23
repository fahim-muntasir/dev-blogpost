import api from "../api/api";

export const postApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => "/posts",
        }),
    }),
});

export const { useGetPostsQuery } = postApi;

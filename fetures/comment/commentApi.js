import api from "../api/api";

export const commentApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getComments: builder.query({
            query: (id) =>
                `/comments?sort[0]=createdAt:DESC&&filters[posts_id][$eq]=${id}&&populate=*`,
        }),
        createComment: builder.mutation({
            query: (data) => ({
                url: "/comments",
                method: "POST",
                body: data,
            }),
            async onQueryStarted(
                { data, ...patch },
                { dispatch, queryFulfilled }
            ) {
                try {
                    const { data: updateComment } = await queryFulfilled;

                    dispatch(
                        api.util.updateQueryData(
                            "getComments",
                            data?.posts_id,
                            (draft) => {
                                draft.data.unshift(updateComment?.data);
                            }
                        )
                    );
                } catch {}
            },
        }),
    }),
});

export const { useGetCommentsQuery, useCreateCommentMutation } = commentApi;

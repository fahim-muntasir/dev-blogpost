import api from "../api/api";

export const commentApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getComments: builder.query({
            query: () => "/comments?populate=*",
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
                            undefined,
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

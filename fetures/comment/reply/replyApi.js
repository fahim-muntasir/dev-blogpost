import api from "../../api/api";

export const replyApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getReply: builder.query({
            query: (id) => `/replies?filters[parent][$eq]=${id}&&populate=*`,
        }),
        createReply: builder.mutation({
            query: (data) => ({
                url: "/replies",
                method: "POST",
                body: data,
            }),
            async onQueryStarted({ data }, { dispatch, queryFulfilled }) {
                try {
                    const { data: updateReply } = await queryFulfilled;

                    dispatch(
                        api.util.updateQueryData(
                            "getReply",
                            data?.parent,
                            (draft) => {
                                draft.data.push(updateReply?.data);
                            }
                        )
                    );
                } catch {}
            },
        }),
    }),
});

export const { useGetReplyQuery, useCreateReplyMutation } = replyApi;

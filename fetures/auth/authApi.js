import api from "../api/api";
import { userLogin } from "./authSlice";

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: "/auth/local/register",
                method: "POST",
                body: data,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    // set token and user in localstore
                    localStorage.setItem(
                        "auth",
                        JSON.stringify({
                            accessToken: result.data.jwt,
                            user: result.data.user,
                        })
                    );

                    // action dispatch
                    dispatch(
                        userLogin({
                            accessToken: result.data.jwt,
                            user: result.data.user,
                        })
                    );
                } catch (err) {
                    // do nothing
                }
            },
        }),
        login: builder.mutation({
            query: (data) => ({
                url: "/auth/local",
                method: "POST",
                body: data,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    // set token and user in localstore
                    localStorage.setItem(
                        "auth",
                        JSON.stringify({
                            accessToken: result.data.jwt,
                            user: result.data.user,
                        })
                    );

                    // action dispatch
                    dispatch(
                        userLogin({
                            accessToken: result.data.jwt,
                            user: result.data.user,
                        })
                    );
                } catch (err) {
                    // do nothing
                }
            },
        }),
    }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;

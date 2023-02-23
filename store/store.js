import api from "@/fetures/api/api";
import authReducer from "@/fetures/auth/authSlice";
import postReducer from "@/fetures/post/postSlice";
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
    configureStore({
        reducer: {
            [api.reducerPath]: api.reducer,
            auth: authReducer,
            post: postReducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(api.middleware),
    });

export const wrapper = createWrapper(makeStore, { debug: true });

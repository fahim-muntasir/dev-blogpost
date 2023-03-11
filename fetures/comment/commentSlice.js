import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allComments: [],
};

const commentsSlice = createSlice({
    name: "comment",
    initialState,
    reducers: {},
});

export default commentsSlice.reducer;

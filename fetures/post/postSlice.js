import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allposts: [],
};

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {},
});

export default postSlice.reducer;

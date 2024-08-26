import { createSlice } from "@reduxjs/toolkit";

import { onLoadProductsList } from "./thunks";
import { ISlicesNames } from "../types";
import { ICommonState } from "./types";

const initialState: ICommonState = {
    data: {
        productsList: null,
    },
    loading: false,
    error: false,
};

export const productsListData = createSlice({
    name: ISlicesNames.productsList,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(onLoadProductsList.pending, (state) => {
                state.loading = true;
            })
            .addCase(onLoadProductsList.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.data.productsList = payload;
            })
            .addCase(onLoadProductsList.rejected, (state) => {
                state.loading = false;
                state.error = true;
            });
    },
});

export default productsListData.reducer;

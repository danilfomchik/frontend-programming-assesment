import { createAsyncThunk } from "@reduxjs/toolkit";
import { ISlicesNames, IThunksNames } from "../types";
import { fetchWrap } from "../../services/common";
import { PRODUCTS_API } from "../../services/constants";

export const onLoadProductsList = createAsyncThunk(
    `${ISlicesNames.productsList}/${IThunksNames.productsList}`,
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetchWrap({
                request: {
                    url: PRODUCTS_API,
                    body: null,
                },
                method: "GET",
            });

            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

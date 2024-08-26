import { createSlice } from "@reduxjs/toolkit";

import { ISlicesNames } from "../types";
import { ICommonState } from "./types";
import { IProduct } from "../productsList/types";
import { onDeleteProduct } from "./utils";

const favoritesListFromStorage = window.localStorage.getItem("favoritesList");

const initialState: ICommonState = {
    data: {
        favoriteProductsList: favoritesListFromStorage
            ? JSON.parse(favoritesListFromStorage)
            : [],
    },
};

const reducers = {
    onToggleFavoriteProduct: (
        state: ICommonState,
        { payload }: { payload: IProduct }
    ) => {
        const favoritesList = state.data.favoriteProductsList;

        if (favoritesList?.some((product) => product.id === payload.id)) {
            const filteredFavoritesList = onDeleteProduct({
                deleteProductId: payload.id,
                favoritesList,
            });

            state.data.favoriteProductsList = filteredFavoritesList;
        } else {
            state.data.favoriteProductsList.push(payload);
            window.localStorage.setItem(
                "favoritesList",
                JSON.stringify(favoritesList)
            );
        }
    },
    onDeleteFavoriteProduct: (
        state: ICommonState,
        { payload }: { payload: IProduct }
    ) => {
        const favoritesList = state.data.favoriteProductsList;
        const filteredFavoritesList = onDeleteProduct({
            deleteProductId: payload.id,
            favoritesList,
        });

        state.data.favoriteProductsList = filteredFavoritesList;
    },
};

export const favoriteProductsListData = createSlice({
    name: ISlicesNames.productsList,
    initialState,
    reducers,
    extraReducers: () => {},
});

export const { onToggleFavoriteProduct, onDeleteFavoriteProduct } =
    favoriteProductsListData.actions;
export default favoriteProductsListData.reducer;

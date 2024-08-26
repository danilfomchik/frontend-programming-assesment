import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { productsListData } from "./productsList/productsListSlice";
import { favoriteProductsListData } from "./favoriteProductsList/favoriteProductsListSlice";
import { IRootState } from "./types";

const combinedReducer = combineReducers({
    products: productsListData.reducer,
    favoriteProducts: favoriteProductsListData.reducer,
});

const store = configureStore({
    reducer: combinedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export const getStoreWithState = (preloadedState?: IRootState) => {
    return configureStore({
        reducer: combinedReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
        preloadedState,
    });
};

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;

import { IRootState } from "../types";

export const selectProductsList = (state: IRootState) =>
    state.products.data.productsList;
export const selectProductsListLoadingStatus = (state: IRootState) =>
    state.products.loading;
export const selectProductsListErrorStatus = (state: IRootState) =>
    state.products.error;

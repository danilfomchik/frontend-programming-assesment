import { IRootState } from "../types";

export const selectFavoriteProductsList = (state: IRootState) =>
    state.favoriteProducts.data.favoriteProductsList;

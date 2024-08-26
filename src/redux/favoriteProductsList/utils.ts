import { IOnDeleteProduct } from "./types";

export const onDeleteProduct = ({
    deleteProductId,
    favoritesList = [],
}: IOnDeleteProduct) => {
    const filteredFavoritesList = favoritesList.filter(
        (item) => item.id !== deleteProductId
    );

    window.localStorage.setItem(
        "favoritesList",
        JSON.stringify(filteredFavoritesList)
    );

    return filteredFavoritesList;
};

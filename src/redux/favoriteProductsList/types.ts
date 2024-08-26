import { IProduct } from "../productsList/types";

export interface ICommonState {
    data: {
        favoriteProductsList: IProduct[];
    };
}

export interface IOnDeleteProduct {
    deleteProductId: number;
    favoritesList: IProduct[];
}

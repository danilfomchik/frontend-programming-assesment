import { IProduct } from "../../../redux/productsList/types";

export interface IProductCardItemProps {
    product: IProduct;
    isFavorite: boolean;
}

export interface IProduct {
    id: number;
    date: string;
    name: string;
    img: string;
    sold: boolean;
    price: string;
    brand: string;
    description: string;
    seller: string;
    size: string;
}

export interface ICommonState {
    data: {
        productsList: null | IProduct[];
    };
    loading: boolean;
    error: boolean;
}

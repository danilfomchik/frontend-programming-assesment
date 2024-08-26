import { mockedProducts } from "../../../test-mocked-products";

export const preloadedState = {
    products: {
        data: {
            productsList: mockedProducts,
        },
        loading: false,
        error: true,
    },
    favoriteProducts: {
        data: {
            favoriteProductsList: [],
        },
    },
};

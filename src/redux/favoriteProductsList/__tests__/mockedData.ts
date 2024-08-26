import { mockedProducts } from "../../../test-mocked-products";

export const preloadedState = {
    products: {
        data: {
            productsList: null,
        },
        loading: false,
        error: true,
    },
    favoriteProducts: {
        data: {
            favoriteProductsList: mockedProducts,
        },
    },
};

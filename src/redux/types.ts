import store from "./store";

export enum ISlicesNames {
    productsList = "productsList",
    favoriteProductsList = "favoriteProductsList",
}

export enum IThunksNames {
    productsList = "onLoadProductsList",
}

export type IRootState = ReturnType<typeof store.getState>;

export type ReduxProviderProps = {
    children: React.ReactNode;
};

import { describe, it, expect, vi } from "vitest";

import { onDeleteProduct } from "../utils";
import { mockedProducts } from "../../../test-mocked-products";

describe("favoriteProductsListSlice utils", () => {
    it("onDeleteProduct", () => {
        const mockSetItem = vi.spyOn(Storage.prototype, "setItem");

        const filteredFavoritesList = onDeleteProduct({
            deleteProductId: 1,
            favoritesList: mockedProducts,
        });

        expect(mockSetItem).toHaveBeenCalledTimes(1);
        expect(mockSetItem).toHaveBeenCalledWith(
            "favoritesList",
            JSON.stringify(filteredFavoritesList)
        );
    });
});

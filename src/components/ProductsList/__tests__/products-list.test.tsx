import { describe, it, expect, afterEach } from "vitest";
import { cleanup, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { renderWithProvider } from "../../../test-utils";
import ProductsList from "..";
import { preloadedState } from "./mockedData";
import { mockedProducts } from "../../../test-mocked-products";

describe("ProductsList component", () => {
    afterEach(() => {
        cleanup();
    });

    it("should render all products names", async () => {
        const { getByText } = renderWithProvider(
            <ProductsList />,
            preloadedState
        );

        for (const product of mockedProducts) {
            expect(getByText(product.name)).toBeDefined();
        }
    });

    it("should filter sold items", async () => {
        const { getByRole, queryByText } = renderWithProvider(
            <ProductsList />,
            preloadedState
        );

        const hideSoldItemsBtn = getByRole("button", {
            name: /hide sold items/i,
        });

        expect(hideSoldItemsBtn).toBeDefined();

        await waitFor(() => userEvent.click(hideSoldItemsBtn));

        expect(queryByText(mockedProducts[0].name)).toBeNull();
        expect(queryByText(mockedProducts[1].name)).toBeNull();
        expect(queryByText(mockedProducts[2].name)).not.toBeNull();
    });

    it("should add/remove items to/from cart", async () => {
        const { store, getAllByTestId } = renderWithProvider(
            <ProductsList />,
            preloadedState
        );

        await userEvent.click(getAllByTestId("like-button")[0]);

        expect(
            store.getState().favoriteProducts.data.favoriteProductsList[0]
        ).toEqual(mockedProducts[0]);

        await userEvent.click(getAllByTestId("like-button")[2]);

        expect(
            store.getState().favoriteProducts.data.favoriteProductsList[1]
        ).toEqual(mockedProducts[2]);

        await userEvent.click(getAllByTestId("like-button")[0]);
        await userEvent.click(getAllByTestId("like-button")[2]);

        expect(
            store.getState().favoriteProducts.data.favoriteProductsList
        ).toEqual([]);
    });
});

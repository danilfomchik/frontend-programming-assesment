import { describe, it, expect, afterEach } from "vitest";
import { act, cleanup, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Header from "..";
import { onToggleFavoriteProduct } from "../../../redux/favoriteProductsList/favoriteProductsListSlice";
import { renderWithProvider } from "../../../test-utils";
import { preloadedState } from "./mockedData";
import { mockedProducts } from "../../../test-mocked-products";

describe("Header component", () => {
    afterEach(() => {
        cleanup();
    });

    it("should render all elements inside Header", () => {
        const { getByRole, getByTestId } = renderWithProvider(<Header />);

        const banner = getByRole("banner");
        const cartButton = getByTestId("cart-button");

        expect(banner).toBeDefined();
        expect(cartButton).toBeDefined();
        expect(banner.textContent).toBe("0");
    });

    it("should show the correct number of items", () => {
        const { store, getByRole } = renderWithProvider(<Header />);

        act(() => {
            store.dispatch(onToggleFavoriteProduct(mockedProducts[0]));
        });

        expect(getByRole("banner").textContent).toBe("1");

        act(() => {
            store.dispatch(onToggleFavoriteProduct(mockedProducts[1]));
        });

        expect(getByRole("banner").textContent).toBe("2");

        act(() => {
            store.dispatch(onToggleFavoriteProduct(mockedProducts[0]));
        });
        act(() => {
            store.dispatch(onToggleFavoriteProduct(mockedProducts[1]));
        });

        expect(getByRole("banner").textContent).toBe("0");
    });

    it("should show the correct items in popper component", async () => {
        const { getByTestId } = renderWithProvider(<Header />, preloadedState);

        await userEvent.click(getByTestId("cart-button"));

        const favoritesList = getByTestId("favorite-products-list");

        expect(favoritesList).toBeDefined();

        for (const product of mockedProducts) {
            const favoritesListItem = within(favoritesList).getByText(
                product.name
            );

            expect(favoritesListItem).toBeDefined();
        }
    });

    it("should delete item from cart by clicking delete button", async () => {
        const {
            getByTestId,
            getByRole,
            getByText,
            queryByText,
            getAllByTestId,
        } = renderWithProvider(<Header />, preloadedState);

        expect(getByRole("banner").textContent).toBe("3");

        await userEvent.click(getByTestId("cart-button"));
        await userEvent.click(getAllByTestId("delete-button")[0]);

        expect(getByRole("banner").textContent).toBe("2");
        expect(queryByText(mockedProducts[0].name)).toBeNull();
        expect(getByText(mockedProducts[1].name)).toBeDefined();
        expect(getByText(mockedProducts[2].name)).toBeDefined();
    });
});

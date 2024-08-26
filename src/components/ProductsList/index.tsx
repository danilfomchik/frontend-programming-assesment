import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import {
    Grid,
    Typography,
    Button,
    CircularProgress,
    Alert,
} from "@mui/material";

import {
    selectProductsList,
    selectProductsListLoadingStatus,
    selectProductsListErrorStatus,
} from "../../redux/productsList/selectors";
import ProductCardItem from "./ProductCardItem";
import { selectFavoriteProductsList } from "../../redux/favoriteProductsList/selectors";
import { useAppDispatch } from "../../redux/store";
import { onLoadProductsList } from "../../redux/productsList/thunks";

const ProductsList = () => {
    const [isSoldHide, setIsSoldHide] = useState(false);

    const dispatch = useAppDispatch();
    const productsList = useSelector(selectProductsList);
    const favoritesList = useSelector(selectFavoriteProductsList);
    const productsListLoadingStatus = useSelector(
        selectProductsListLoadingStatus
    );
    const productsListErrorStatus = useSelector(selectProductsListErrorStatus);

    const onHideSoldItems = () => {
        setIsSoldHide((prev) => !prev);
    };

    const visibleProductsList = useMemo(() => {
        if (productsList && isSoldHide) {
            return productsList.filter((product) => !product.sold);
        }

        return productsList;
    }, [isSoldHide, productsList]);

    useEffect(() => {
        dispatch(onLoadProductsList());
    }, [dispatch]);

    return (
        <Grid container justifyContent="center" alignItems="center">
            {visibleProductsList && (
                <>
                    <Grid container justifyContent="space-between" mb={3}>
                        <Typography variant="h3">Results</Typography>
                        <Button
                            variant={!isSoldHide ? "outlined" : "contained"}
                            onClick={onHideSoldItems}
                        >
                            {!isSoldHide ? "Hide Sold Items" : "Show All Items"}
                        </Button>
                    </Grid>
                    <Grid item container justifyContent="center" gap={3}>
                        {visibleProductsList.map((product) => (
                            <ProductCardItem
                                key={product.id}
                                product={product}
                                isFavorite={favoritesList?.some(
                                    (item) => item.id === product.id
                                )}
                            />
                        ))}
                    </Grid>
                </>
            )}

            {productsListLoadingStatus && <CircularProgress />}
            {productsListErrorStatus && (
                <Alert variant="outlined" severity="error">
                    Oops... Something went wrong...
                </Alert>
            )}
        </Grid>
    );
};

export default ProductsList;

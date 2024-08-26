import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
    AppBar,
    Fade,
    IconButton,
    Paper,
    Popper,
    Toolbar,
    Typography,
    Grid,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

import { selectFavoriteProductsList } from "../../redux/favoriteProductsList/selectors";
import { useAppDispatch } from "../../redux/store";
import { onDeleteFavoriteProduct } from "../../redux/favoriteProductsList/favoriteProductsListSlice";
import { IProduct } from "../../redux/productsList/types";

const Header = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [open, setOpen] = useState(false);

    const dispatch = useAppDispatch();
    const favoritesList = useSelector(selectFavoriteProductsList);

    const onCartToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);

        if (favoritesList.length > 0) {
            setOpen((prev) => !prev);
        }
    };

    const deleteFavoriteItem = (product: IProduct) => {
        dispatch(onDeleteFavoriteProduct(product));
    };

    useEffect(() => {
        if (favoritesList.length === 0) {
            setOpen(false);
        }
    }, [favoritesList.length]);

    return (
        <AppBar position="static">
            <Toolbar sx={{ justifyContent: "flex-end" }}>
                <IconButton
                    size="medium"
                    edge="start"
                    color="primary"
                    onClick={onCartToggle}
                    data-testid="cart-button"
                >
                    {open ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}

                    <Typography
                        variant="body2"
                        sx={{ flexGrow: 1, padding: "0 0 0 10px" }}
                    >
                        {favoritesList.length}
                    </Typography>
                </IconButton>
                <Popper
                    open={open && favoritesList.length > 0}
                    anchorEl={anchorEl}
                    placement="bottom-start"
                    transition
                    modifiers={[
                        {
                            name: "offset",
                            options: { offset: [0, 5] },
                        },
                    ]}
                    data-testid="favorite-products-list"
                >
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper>
                                {favoritesList.map((product) => (
                                    <Grid
                                        key={product.id}
                                        item
                                        container
                                        justifyContent="space-between"
                                        alignItems="center"
                                        py={0.5}
                                    >
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                fontWeight: "800",
                                                margin: "0 20px 0 0",
                                            }}
                                        >
                                            {product.name}
                                        </Typography>

                                        <IconButton
                                            size="small"
                                            edge="start"
                                            color="primary"
                                            onClick={() =>
                                                deleteFavoriteItem(product)
                                            }
                                            data-testid="delete-button"
                                        >
                                            <CloseRoundedIcon />
                                        </IconButton>
                                    </Grid>
                                ))}
                            </Paper>
                        </Fade>
                    )}
                </Popper>
            </Toolbar>
        </AppBar>
    );
};

export default Header;

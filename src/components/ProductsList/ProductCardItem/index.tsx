import {
    Grid,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    Backdrop,
} from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";

import { IProductCardItemProps } from "./types";
import { useAppDispatch } from "../../../redux/store";
import { onToggleFavoriteProduct } from "../../../redux/favoriteProductsList/favoriteProductsListSlice";
import { LikeButton } from "./Styles";

const ProductCardItem = ({ product, isFavorite }: IProductCardItemProps) => {
    const dispatch = useAppDispatch();

    const { name, img, sold, price, brand, size } = product;

    const onLikeProduct = () => {
        dispatch(onToggleFavoriteProduct(product));
    };

    return (
        <Grid item flexGrow={1} maxWidth={400}>
            <Card>
                <CardActionArea>
                    <Grid item sx={{ position: "relative" }}>
                        <CardMedia component="img" image={img} alt={name} />
                        <Backdrop open={sold}>
                            <Typography variant="h4">SOLD</Typography>
                        </Backdrop>
                    </Grid>
                    <CardContent>
                        <Typography variant="body2">{name}</Typography>
                        <Typography variant="body2">{brand}</Typography>
                        <Typography variant="body2">Size {size}</Typography>
                        <Typography variant="body2" sx={{ fontWeight: "800" }}>
                            ${price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <LikeButton
                    size="medium"
                    edge="start"
                    color="primary"
                    onClick={onLikeProduct}
                    isFavorite={isFavorite}
                    data-testid="like-button"
                >
                    <ThumbUpOutlinedIcon />
                </LikeButton>
            </Card>
        </Grid>
    );
};

export default ProductCardItem;

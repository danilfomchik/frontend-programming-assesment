import { IconButton, styled } from "@mui/material";

export const LikeButton = styled(IconButton, {
    shouldForwardProp: (prop) => prop !== "isFavorite",
})<{ isFavorite?: boolean }>(({ theme, isFavorite }) => ({
    position: "absolute",
    top: 10,
    right: 10,
    background: isFavorite
        ? theme.palette.background.paper
        : theme.palette.background.default,
    color: isFavorite ? theme.palette.background.default : "initial",
    borderColor: isFavorite ? theme.palette.background.paper : "initial",

    "&:hover": {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.primary.main,

        svg: {
            color: isFavorite
                ? theme.palette.background.paper
                : theme.palette.primary.main,
        },
    },
}));

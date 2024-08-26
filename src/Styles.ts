import { Box, styled } from "@mui/material";

export const MainContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    position: "relative",
    alignItems: "center",
    background: theme.palette.background.grey,
}));

import { Theme, createTheme } from "@mui/material";

declare module "@mui/material/styles/createPalette" {
    export interface TypeBackground {
        grey: string;
        disabled: string;
    }
}

export const toolbarHeights = {
    mobilePortrait: 60,
    mobileLandscape: 60,
    tabletDesktop: 79,
};

const customThemeValues = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 620,
            md: 960,
            lg: 1280,
            xl: 1440,
        },
    },
    palette: {
        primary: {
            main: "#000000",
        },
        background: {
            default: "#ffffff",
            grey: "#f1f2f6",
            paper: "#e24a4a",
            disabled: "#7e7e7e",
        },
        text: {
            disabled: "#ffffff",
            primary: "#000000",
            secondary: "#4a4a4a",
        },
    },
});

const createCommonTheme = (theme: Theme) =>
    createTheme({
        ...theme,
        spacing: 8,
        mixins: {
            toolbar: {
                minHeight: toolbarHeights.mobilePortrait,
                [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]:
                    {
                        minHeight: toolbarHeights.mobileLandscape,
                    },
                [theme.breakpoints.up("sm")]: {
                    minHeight: toolbarHeights.mobileLandscape,
                },
                [theme.breakpoints.up("md")]: {
                    minHeight: toolbarHeights.tabletDesktop,
                },
            },
        },
        components: {
            MuiTypography: {
                defaultProps: {
                    variantMapping: {
                        body1: "span",
                    },
                },
                styleOverrides: {
                    root: {
                        fontFamily: "inherit",
                        color: theme.palette.text.primary,
                    },
                    h1: {
                        fontSize: "3.8rem",
                        lineHeight: "130%",
                        fontWeight: "500",
                    },
                    h2: {
                        fontSize: theme.spacing(4),
                        lineHeight: theme.spacing(5),
                        fontWeight: "800",

                        [theme.breakpoints.down("md")]: {
                            fontSize: "2.13rem",
                        },
                    },
                    h3: {
                        fontSize: "2.5rem",
                        lineHeight: "140%",
                        fontWeight: "400",
                        color: theme.palette.text.secondary,
                    },
                    h4: {
                        fontSize: "2rem",
                        lineHeight: "125%",
                        fontWeight: "800",
                        color: theme.palette.text.disabled,
                    },
                    h5: {
                        fontSize: "1.25rem",
                        lineHeight: "150%",
                        fontWeight: "800",
                    },
                    body1: {
                        fontWeight: "500",
                        fontSize: theme.spacing(2),
                        lineHeight: theme.spacing(3),
                        letterSpacing: 0,
                    },
                    body2: {
                        fontSize: theme.spacing(2),
                        lineHeight: theme.spacing(3),
                        fontWeight: "500",
                        letterSpacing: 0,
                    },
                },
            },
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        backgroundColor: theme.palette.background.default,
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: "none",
                        borderRadius: 0,
                        padding: theme.spacing(0.5, 4),
                    },
                    outlined: {
                        color: theme.palette.text.secondary,
                    },
                    contained: {
                        color: theme.palette.text.disabled,
                    },
                },
            },
            MuiIconButton: {
                styleOverrides: {
                    sizeMedium: {
                        backgroundColor: theme.palette.background.default,
                        border: `1px solid ${theme.palette.primary.main}`,
                        borderRadius: theme.spacing(1),
                    },
                },
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        height: "100%",
                        minWidth: 300,
                        position: "relative",
                        background: "transparent",
                        boxShadow: "none",

                        "& .MuiBackdrop-root": {
                            position: "absolute",
                            borderRadius: theme.spacing(1),
                        },
                    },
                },
            },
            MuiCardContent: {
                styleOverrides: {
                    root: {
                        padding: theme.spacing(1, 0.5, 4),
                    },
                },
            },
            MuiCardMedia: {
                styleOverrides: {
                    root: {
                        minHeight: "230px",
                        background: theme.palette.background.default,
                        border: `1px solid ${theme.palette.primary.main}`,
                        borderRadius: theme.spacing(1),
                    },
                },
            },
            MuiPopper: {
                styleOverrides: {
                    root: {
                        "& .MuiPaper-root": {
                            background: theme.palette.background.default,
                            border: `1px solid ${theme.palette.primary.main}`,
                            borderRadius: theme.spacing(1),
                            padding: theme.spacing(2),
                        },
                    },
                },
            },
        },
    });

export const theme = createTheme(createCommonTheme(customThemeValues));

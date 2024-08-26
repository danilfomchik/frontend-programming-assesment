import { CssBaseline, ThemeProvider } from "@mui/material";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import { theme } from "./theme/theme.ts";
import ReduxProvider from "./redux/redux-provider.tsx";

createRoot(document.getElementById("root")!).render(
    <ReduxProvider>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </ReduxProvider>
);

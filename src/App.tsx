import { createBrowserRouter, RouterProvider } from "react-router";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import Inventory from "./root/pages/Inventory";
import WhatToCook from "./root/pages/WhatToCook";
import AddItem from "./root/pages/AddItem";
import PageNotFound from "./root/pages/PageNotFound";
import RootLayout from "./root/RootLayout";

const router = createBrowserRouter([
    {
        element: <RootLayout />,
        errorElement: <PageNotFound />,
        children: [
            {
                path: "/",
                element: <Inventory />,
            },
            {
                path: "/what-to-cook",
                element: <WhatToCook />,
            },
            {
                path: "/add-item",
                element: <AddItem />,
            },
        ],
    },
]);

function App() {
    const appTheme = createTheme({
        palette: {
            mode: "light",
        },
    });

    return (
        <ThemeProvider theme={appTheme} defaultMode="system">
            <CssBaseline />
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;

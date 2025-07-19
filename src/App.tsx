import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router";

import AuthProvider from "./context/AuthContext";
import { useModeContext } from "./context/ThemeContext";
import AddItem from "./private/pages/AddItem";
import AuthCallback from "./private/pages/AuthCallback";
import Inventory from "./private/pages/Inventory";
import Likes from "./private/pages/Likes";
import NotificationsExpired from "./private/pages/NotificationsExpired";
import NotificationsExpireSoon from "./private/pages/NotificationsExpireSoon";
import RecipeDetails from "./private/pages/RecipeDetails";
import WhatToCook from "./private/pages/WhatToCook";
import RootLayout from "./private/RootLayout";
import ProtectedRoute from "./ProtectedRoute";
import AuthLayout from "./public/AuthLayout";
import Home from "./public/pages/Home";
import LogIn from "./public/pages/LogIn";
import PageNotFound from "./public/pages/PageNotFound";
import SignUp from "./public/pages/SignUp";
import getAppTheme from "./utils/theme";
import NotificationProvider from "./context/NotificationContext";

// Create a client
const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        element: (
            <AuthProvider>
                <NotificationProvider>
                    <Home />
                </NotificationProvider>
            </AuthProvider>
        ),
        errorElement: <PageNotFound />,
        path: "/",
    },
    {
        element: (
            <AuthProvider>
                <AuthLayout />
            </AuthProvider>
        ),
        errorElement: <PageNotFound />,
        children: [
            {
                path: "/log-in",
                element: <LogIn />,
            },
            {
                path: "/sign-up",
                element: <SignUp />,
            },
        ],
    },
    {
        element: (
            <AuthProvider>
                <ProtectedRoute>
                    <NotificationProvider>
                        <RootLayout />
                    </NotificationProvider>
                </ProtectedRoute>
            </AuthProvider>
        ),
        errorElement: <PageNotFound />,
        children: [
            {
                path: "/inventory",
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
            {
                path: "/recipe/:recipeId",
                element: <RecipeDetails />,
            },
            { path: "/user/likes", element: <Likes /> },
            {
                path: "/user/notifications/expire-soon",
                element: <NotificationsExpireSoon />,
            },
            {
                path: "/user/notifications/expired",
                element: <NotificationsExpired />,
            },
        ],
    },
    {
        element: <AuthCallback />,
        path: "/auth/callback",
    },
]);

function App() {
    const { mode } = useModeContext();
    const appTheme = getAppTheme(mode);

    return (
        <ThemeProvider theme={appTheme}>
            <CssBaseline />
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
                <Toaster
                    position="top-center"
                    toastOptions={{
                        duration: 5000,
                        removeDelay: 1000,
                        style: {
                            background: appTheme.palette.primary.light,
                            color: appTheme.palette.primary.contrastText,
                        },
                        success: {
                            duration: 3000,
                            iconTheme: {
                                primary: "green",
                                secondary: "black",
                            },
                        },
                    }}
                />
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </ThemeProvider>
    );
}

export default App;

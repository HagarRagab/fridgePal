import { createTheme } from "@mui/material";

const getAppTheme = (mode: "light" | "dark") =>
    createTheme({
        palette: {
            mode,
            primary: {
                light: "#61bc84",
                main: "#2E8B57",
                contrastText: "#fff",
            },

            ...(mode === "light"
                ? {
                      secondary: {
                          light: "#454545",
                          main: "#2d2d2d",
                          dark: "#1E1E1E",
                          contrastText: "#fff",
                      },
                      background: {
                          default: "#ebfcf0", // light mode background
                          paper: "#f5fff8",
                      },
                  }
                : {
                      secondary: {
                          light: "#e9e8e8",
                          main: "#ffffff",
                          dark: "#cecece",
                          contrastText: "#0e1217",
                      },
                      custom: {
                          main: "#353535",
                      },
                      background: {
                          default: "#1E1E1E", // light mode background
                          paper: "#2d2d2d",
                      },
                  }),
        },
    });

export default getAppTheme;

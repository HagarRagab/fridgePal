// src/theme.d.ts or src/types/theme.d.ts

import { PaletteColorOptions, PaletteColor } from "@mui/material/styles";

declare module "@mui/material/styles" {
    interface Palette {
        custom: PaletteColor;
    }

    interface PaletteOptions {
        custom?: PaletteColorOptions;
    }
}

declare module "@mui/material/Button" {
    interface ButtonPropsColorOverrides {
        custom: true;
    }
}

declare module "@mui/material/IconButton" {
    interface IconButtonPropsColorOverrides {
        custom: true;
    }
}

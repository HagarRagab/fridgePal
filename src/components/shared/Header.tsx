import type { ReactNode } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

type HeaderProps = {
    children: ReactNode;
};

function Header({ children }: HeaderProps) {
    return (
        <AppBar
            position="static"
            color="transparent"
            sx={{
                boxShadow: "none",
                paddingBlock: "1rem",
            }}
        >
            <Toolbar
                disableGutters
                variant="regular"
                sx={{ justifyContent: "space-between" }}
            >
                {children}
            </Toolbar>
        </AppBar>
    );
}

export default Header;

import { useState, type MouseEvent, type ReactNode } from "react";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

type TooltipProps = {
    tooltipButton: ReactNode;
    children: ReactNode;
};

function TooltipContainer({ tooltipButton, children }: TooltipProps) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    function handleOpenMenu(event: MouseEvent<HTMLElement>) {
        setAnchorEl(event.currentTarget);
    }

    function handleCloseMenu() {
        setAnchorEl(null);
    }

    return (
        <>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenMenu} sx={{ p: 0 }}>
                    {tooltipButton}
                </IconButton>
            </Tooltip>

            <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                onClick={handleCloseMenu}
            >
                {children}
            </Menu>
        </>
    );
}

export default TooltipContainer;

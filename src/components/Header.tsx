import { useState, type MouseEvent } from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Logo from "./Logo";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const user: {
    name: string;
    avatarUrl: string;
} = {
    name: "Demo User",
    avatarUrl: "/profile.png",
};

function Header() {
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    function handleOpenUserMenu(event: MouseEvent<HTMLElement>) {
        setAnchorElUser(event.currentTarget);
    }

    function handleCloseUserMenu() {
        setAnchorElUser(null);
    }

    return (
        <AppBar
            position="static"
            color="transparent"
            sx={{ boxShadow: "none" }}
        >
            <Toolbar
                disableGutters
                variant="regular"
                sx={{ justifyContent: "space-between" }}
            >
                <Logo />

                <Box sx={{ flexGrow: 0 }}>
                    {!user ? (
                        <Link href="#login" variant="body1">
                            Log in / Register
                        </Link>
                    ) : (
                        <Tooltip title="Open settings">
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{ p: 0 }}
                            >
                                <Avatar
                                    alt={user?.name}
                                    src={
                                        user?.avatarUrl ||
                                        "/profile-placeholder.svg"
                                    }
                                />
                                <KeyboardArrowDownIcon />
                            </IconButton>
                        </Tooltip>
                    )}
                    <Menu
                        sx={{ mt: "45px" }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {settings.map((setting) => (
                            <MenuItem
                                key={setting}
                                onClick={handleCloseUserMenu}
                            >
                                <Typography align="center">
                                    {setting}
                                </Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
export default Header;

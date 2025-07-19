import FavoriteIcon from "@mui/icons-material/Favorite";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LogoutIcon from "@mui/icons-material/Logout";
import { Button, styled, type Theme } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { Link } from "react-router";

import { useAuthContext } from "../../context/AuthContext";
import { useLogout } from "../../hooks/useLogout";
import { stringAvatar } from "../../utils/helpers";
import TooltipContainer from "./TooltipContainer";
import Spinner from "./Spinner";

const LinkStyle = styled(Link)(({ theme }: { theme: Theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "0.8rem",
    color: theme.palette.secondary.light,
}));

type AccountTooltipProps = {
    color: string;
};

function AccountTooltip({ color }: AccountTooltipProps) {
    const { logout, isPending: isLoggingout } = useLogout();

    const {
        user,
        isLoading: isLoadingUser,
        setIsAuthenticated,
    } = useAuthContext();

    function handleLogoutUser() {
        logout();
        setIsAuthenticated(false);
    }

    if (isLoadingUser) return <Spinner size={25} />;

    return (
        <TooltipContainer
            tooltipButton={
                <>
                    <Avatar
                        sx={{
                            width: 36,
                            height: 36,
                            bgcolor: "primary.main",
                            color: "primary.contrastText",
                            fontSize: "1rem",
                        }}
                    >
                        {stringAvatar(user?.name)}
                    </Avatar>
                    <KeyboardArrowDownIcon sx={{ color }} />
                </>
            }
        >
            <MenuItem>
                <LinkStyle to="/user/likes">
                    <FavoriteIcon color="secondary" />
                    <Typography align="center" color="secondary">
                        Likes
                    </Typography>
                </LinkStyle>
            </MenuItem>
            <MenuItem onClick={handleLogoutUser}>
                <Button
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: ".8rem",
                        color: "secondary",
                        textTransform: "capitalize",
                        p: 0,
                    }}
                    disabled={isLoggingout}
                >
                    <LogoutIcon color="secondary" />
                    <Typography align="center" color="secondary">
                        {isLoggingout ? "Loading..." : "Logout"}
                    </Typography>
                </Button>
            </MenuItem>
        </TooltipContainer>
    );
}

export default AccountTooltip;

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import { useAuthContext } from "../../context/AuthContext";
import LinkText from "./LinkText";
import Spinner from "./Spinner";
import { useModeContext } from "../../context/ThemeContext";
import AccountTooltip from "./AccountTooltip";
import NotificationTooltip from "./NotificationTooltip";

type SettingsProps = {
    color: string;
};

function Settings({ color }: SettingsProps) {
    const { mode, setMode } = useModeContext();

    const { isAuthenticated, isLoading: isLoadingUser } = useAuthContext();

    return (
        <Box
            sx={{
                flexGrow: 0,
                display: "flex",
                alignItems: "center",
                gap: "1.4rem",
                marginLeft: "auto",
            }}
        >
            <IconButton
                aria-label="mode"
                sx={{ p: 0 }}
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >
                {mode === "light" ? (
                    <LightModeIcon sx={{ color }} />
                ) : (
                    <DarkModeIcon sx={{ color }} />
                )}
            </IconButton>

            {isLoadingUser ? (
                <Spinner size={20} />
            ) : !isAuthenticated ? (
                <LinkText color={color} to="/log-in">
                    Log in / Register
                </LinkText>
            ) : (
                <>
                    <NotificationTooltip color={color} />
                    <AccountTooltip color={color} />
                </>
            )}
        </Box>
    );
}

export default Settings;

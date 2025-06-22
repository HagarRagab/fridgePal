import styled from "styled-components";
import KitchenIcon from "@mui/icons-material/Kitchen";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const LogoIcon = styled(KitchenIcon)`
    background: var(--primary-100);
    background: linear-gradient(
        100deg,
        var(--primary-100) 0%,
        var(--primary-200) 100%
    );
    color: var(--text-100);
    border-radius: 6px;
    width: 3.4rem;
    height: 3.4rem;
    padding: 0.6rem;
`;

const typographyStyle = {
    marginLeft: "1rem",
    lineHeight: 1.2,
};

function Logo() {
    return (
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            <LogoIcon />
            <Box>
                <Typography
                    variant="h6"
                    color="inherit"
                    sx={{
                        fontSize: "1.6rem",
                        fontWeight: 700,
                        color: "var(--accent-100)",
                        ...typographyStyle,
                    }}
                >
                    FridgePal
                </Typography>
                <Typography
                    variant="subtitle1"
                    sx={{
                        display: { xs: "none", sm: "flex" },
                        color: "var(--accent-200)",
                        ...typographyStyle,
                    }}
                >
                    Smart Grocery Tracker - Never waste food again!
                </Typography>
            </Box>
        </Box>
    );
}

export default Logo;

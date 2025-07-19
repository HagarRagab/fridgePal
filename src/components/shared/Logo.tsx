import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import LogoIcon from "./LogoIcon";

const typographyStyle = {
    marginLeft: ".8rem",
    lineHeight: 1.2,
};

function Logo() {
    return (
        <Box
            sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
            }}
        >
            <LogoIcon size={3} />
            <Box>
                <Typography
                    variant="h6"
                    color="inherit"
                    sx={{
                        fontSize: { xs: "1.2rem", md: "1.6rem" },
                        fontWeight: 700,
                        color: "secondary.main",
                        ...typographyStyle,
                    }}
                >
                    FridgePal
                </Typography>
                <Typography
                    variant="subtitle1"
                    sx={{
                        display: { xs: "none", sm: "flex" },
                        color: "secondary.light",
                        fontSize: { sm: ".8rem", md: "1.1rem" },
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

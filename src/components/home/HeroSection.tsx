import {
    Box,
    Button,
    styled,
    Typography,
    useTheme,
    type Theme,
} from "@mui/material";
import { Link } from "react-router";

import LogoIcon from "../shared/LogoIcon";
import Header from "../shared/Header";
import Settings from "../shared/Settings";
import SectionContainer from "./SectionContainer";

const Span = styled("span")(({ theme }: { theme: Theme }) => ({
    background: `linear-gradient(100deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
    color: "transparent",
    backgroundClip: "text",
}));

function HeroSection() {
    const theme = useTheme();

    return (
        <Box
            sx={{
                background: "no-repeat url(/hero-bg.png)",
                backgroundSize: "cover",
                backgroundPosition: "top",
                position: "relative",
            }}
        >
            <Box
                component="div"
                sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                    backgroundColor: "#000",
                    filter: "opacity(40%)",
                }}
            />
            <SectionContainer>
                <Header>
                    <Settings color={theme.palette.primary.contrastText} />
                </Header>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: { xs: "center", md: "start" },
                        flex: 1,
                        alignSelf: { sx: "center", md: "start" },
                        textAlign: { sx: "center", md: "start" },
                        maxWidth: { sx: "100%", md: 400 },
                        justifyContent: "center",
                        gap: "1rem",
                    }}
                >
                    <LogoIcon size={2.8} />
                    <Typography
                        variant="h1"
                        sx={{
                            color: "primary.contrastText",
                            fontSize: { xs: "2rem", md: "3.2rem" },
                            fontWeight: 500,
                        }}
                    >
                        Welcome to <Span>FridgePal</Span>
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            maxWidth: "40rem",
                            color: "primary.contrastText",
                            fontSize: "1.2rem",
                            lineHeight: 1.4,
                        }}
                    >
                        Your smart grocery tracker that helps you reduce food
                        waste, save money, and discover delicious recipes with
                        what you already have.
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            width: "fit-content",
                            backgroundColor: "primary.main",
                            fontSize: "1rem",
                        }}
                    >
                        <Link to="/inventory">Get started &rarr;</Link>
                    </Button>
                </Box>
            </SectionContainer>
        </Box>
    );
}

export default HeroSection;

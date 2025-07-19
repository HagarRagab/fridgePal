import { Outlet } from "react-router";
import Container from "@mui/material/Container";

import Header from "../components/shared/Header";
import Logo from "../components/shared/Logo";
import Settings from "../components/shared/Settings";
import { useTheme } from "@mui/material";

function RootLayout() {
    const theme = useTheme();

    return (
        <Container maxWidth="lg" sx={{ paddingBlock: "2rem" }}>
            <Header>
                <Logo />
                <Settings color={theme.palette.secondary.light} />
            </Header>

            <Outlet />
        </Container>
    );
}

export default RootLayout;

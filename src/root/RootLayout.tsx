import { Outlet } from "react-router";
import Header from "../components/Header";
import NavTabs from "../components/ui/NavTabs";
import Container from "@mui/material/Container";

function RootLayout() {
    return (
        <Container maxWidth="xl" sx={{ paddingBlock: "1rem" }}>
            <Header />
            <NavTabs />
            <main>
                <Outlet />
            </main>
        </Container>
    );
}

export default RootLayout;

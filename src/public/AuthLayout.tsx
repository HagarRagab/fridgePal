import { Grid } from "@mui/material";
import { Navigate, Outlet } from "react-router";
import GlassPaper from "../components/shared/GlassPaper";
import LogoIcon from "../components/shared/LogoIcon";
import { useAuthContext } from "../context/AuthContext";
import Spinner from "../components/shared/Spinner";

function AuthLayout() {
    const { isAuthenticated, isLoading } = useAuthContext();

    if (isLoading) return <Spinner sx={{ marginTop: "14rem" }} />;
    if (isAuthenticated) return <Navigate to="/" replace />;

    return (
        <Grid container sx={{ height: "100vh" }}>
            <Grid
                size={5}
                sx={{
                    display: { xs: "none", sm: "block" },
                    background: "url(/auth.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center left",
                    filter: "brightness(80%)",
                }}
            />
            <Grid
                size={{ xs: 12, sm: 7 }}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <GlassPaper sx={{ width: "100%" }}>
                    <LogoIcon size={2.2} />

                    <Outlet />
                </GlassPaper>
            </Grid>
        </Grid>
    );
}

export default AuthLayout;

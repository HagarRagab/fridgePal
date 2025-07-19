import { Grid } from "@mui/material";
import type { ReactNode } from "react";

type CardsGroupProps = {
    children: ReactNode;
};

function CardsGroup({ children }: CardsGroupProps) {
    return (
        <Grid
            container
            sx={{
                marginTop: "2rem",
                justifyContent: "center",
            }}
            spacing={{ xs: 2, sm: 4 }}
        >
            {children}
        </Grid>
    );
}

export default CardsGroup;

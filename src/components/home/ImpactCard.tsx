import { Grid, Typography } from "@mui/material";
import type { Timpacts } from "../../types";

type ImpactCardProps = {
    impact: Timpacts;
};

function ImpactCard({ impact }: ImpactCardProps) {
    return (
        <Grid size={{ xs: 6, md: 3 }}>
            <Typography
                variant="h3"
                sx={{
                    color: "primary.contrastText",
                    fontWeight: 500,
                    fontSize: {
                        xs: "1.8rem",
                        md: "2.8rem",
                        marginBottom: ".6rem",
                    },
                }}
            >
                {impact.impactNumber}
            </Typography>
            <Typography variant="body1" sx={{ color: "primary.contrastText" }}>
                {impact.impact}
            </Typography>
        </Grid>
    );
}

export default ImpactCard;

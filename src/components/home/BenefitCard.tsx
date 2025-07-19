import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { Box } from "@mui/material";
import type { TBenefit } from "../../types";

type BenefitCardProps = {
    benefit: TBenefit;
};

function BenefitCard({ benefit }: BenefitCardProps) {
    return (
        <Card sx={{ maxWidth: "100%", height: "100%" }}>
            <CardContent>
                <Box
                    sx={{
                        ".MuiSvgIcon-root": {
                            width: "2.8rem",
                            height: "2.8rem",
                            p: ".6rem",
                            borderRadius: "6px",
                            marginBottom: "1.4rem",
                        },
                    }}
                >
                    {benefit.icon}
                </Box>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                        fontWeight: 500,
                        fontSize: { xs: "1.1rem", md: "1.4rem" },
                    }}
                >
                    {benefit.title}
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        color: "text.secondary",
                        fontSize: { xs: ".8rem", md: "1rem" },
                    }}
                >
                    {benefit.description}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default BenefitCard;

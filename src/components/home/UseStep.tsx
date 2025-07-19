import { Card, CardContent, Typography } from "@mui/material";
import type { TUseStep } from "../../types";

type UseStepProps = {
    i: number;
    step: TUseStep;
};

function UseStep({ i, step }: UseStepProps) {
    return (
        <Card sx={{ maxWidth: 340, p: "1rem" }}>
            <CardContent>
                <Typography
                    variant="h3"
                    sx={{
                        width: "3rem",
                        height: "3rem",
                        marginInline: "auto",
                        color: "secondary.main",
                        fontSize: { xs: "1.2rem", md: "1.4rem" },
                        fontWeight: 500,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "1rem",
                        backgroundColor: step.color,
                    }}
                >
                    {i}
                </Typography>
                <Typography
                    variant="h3"
                    sx={{
                        color: "secondary.main",
                        marginBlock: ".6rem",
                        fontSize: { xs: "1.2rem", md: "1.4rem" },
                        fontWeight: 500,
                    }}
                >
                    {step.title}
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        color: "secondary.light",
                        fontSize: { xs: ".8rem", md: "1rem" },
                    }}
                >
                    {step.description}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default UseStep;

import { Box } from "@mui/material";
import type { TUseStep } from "../../types";
import { usingSteps } from "../../utils/utils";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";
import UseStep from "./UseStep";

function HowItWorks() {
    return (
        <SectionContainer justify="center">
            <SectionTitle
                title="How FridgePal Works"
                subTitle="Get started in minutes and transform your kitchen into a smart, waste-free zone."
            />
            <Box
                component="div"
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "1rem",
                    marginTop: "2rem",
                }}
            >
                {usingSteps.map((step: TUseStep, i: number) => (
                    <UseStep key={step.title} i={i + 1} step={step} />
                ))}
            </Box>
        </SectionContainer>
    );
}

export default HowItWorks;

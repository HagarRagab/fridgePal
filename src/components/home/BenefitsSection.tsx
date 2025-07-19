import { Grid } from "@mui/material";
import { benefits } from "../../utils/utils";
import BenefitCard from "./BenefitCard";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";

function BenefitsSection() {
    return (
        <SectionContainer justify="center">
            <SectionTitle
                title="Everything you need to manage your groceries"
                subTitle="FridgePal combines smart tracking, timely reminders, and recipe
                suggestions to transform how you manage your kitchen."
            />
            <Grid container spacing={3} sx={{ marginTop: "2rem" }}>
                {benefits.map((benefit) => (
                    <Grid key={benefit.title} size={{ xs: 12, sm: 6 }}>
                        <BenefitCard benefit={benefit} />
                    </Grid>
                ))}
            </Grid>
        </SectionContainer>
    );
}

export default BenefitsSection;

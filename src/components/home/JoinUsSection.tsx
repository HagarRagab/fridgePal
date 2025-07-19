import { Box, Grid, useTheme } from "@mui/material";
import styled from "styled-components";

import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";
import { impacts } from "../../utils/utils";
import ImpactCard from "./ImpactCard";
import type { Timpacts } from "../../types";

const ImageTop = styled.img`
    width: 16rem;
    position: absolute;
    transform: rotate(-45deg);
    left: 0;
    top: 0;
    filter: blur(2px) opacity(50%);
    z-index: -1;
`;

const ImageBottom = styled.img`
    width: 10rem;
    position: absolute;
    transform: rotate(60deg);
    right: 0;
    bottom: 0;
    filter: blur(2px) opacity(50%);
    z-index: -1;
`;

function JoinUsSection() {
    const theme = useTheme();

    return (
        <Box
            component="div"
            sx={(theme) => ({
                background: `linear-gradient(100deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
            })}
        >
            <SectionContainer justify="center">
                <SectionTitle
                    title="Making a Real Impact"
                    subTitle="Join thousands of users who are already making a difference for their wallets and the planet."
                    color={theme.palette.primary.contrastText}
                />
                <ImageTop src="/three-leaves.png" />
                <ImageBottom src="/three-leaves.png" />
                <Grid
                    container
                    spacing={4}
                    sx={{
                        width: "100%",
                        marginTop: "2rem",
                    }}
                >
                    {impacts.map((impact: Timpacts) => (
                        <ImpactCard key={impact.impact} impact={impact} />
                    ))}
                </Grid>
            </SectionContainer>
        </Box>
    );
}

export default JoinUsSection;

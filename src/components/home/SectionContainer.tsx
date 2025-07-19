import { Container } from "@mui/material";
import type { ReactNode } from "react";

type SectionContainerProps = {
    children: ReactNode;
    justify?: "start" | "center" | "end";
};

function SectionContainer({
    children,
    justify = "start",
}: SectionContainerProps) {
    return (
        <Container
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                justifyContent: justify,
                gap: "1rem",
                position: "relative",
                zIndex: 2,
                paddingBlock: "2rem",
            }}
        >
            {children}
        </Container>
    );
}

export default SectionContainer;

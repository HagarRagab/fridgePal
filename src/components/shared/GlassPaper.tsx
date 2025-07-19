import { Paper, type SxProps } from "@mui/material";
import type { ReactNode } from "react";

type GlassPaperProps = {
    children: ReactNode;
    sx?: SxProps;
};

function GlassPaper({ children, sx }: GlassPaperProps) {
    return (
        <Paper
            sx={{
                ...sx,
                minHeight: "calc(100vh - (4rem + 4px))",
                borderRadius: "10px",
                backgroundColor: "rgba(255, 255, 255, .1)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                border: "2px solid rgba(255, 255, 255, .2)",
                margin: { sm: 0, md: "2rem" },
                p: "1rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {children}
        </Paper>
    );
}

export default GlassPaper;

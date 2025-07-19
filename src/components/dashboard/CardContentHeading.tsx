import { Box, Typography } from "@mui/material";
import type { ReactNode } from "react";

type CardContentHeadingProps = {
    title: string;
    children: ReactNode;
};

function CardContentHeading({ title, children }: CardContentHeadingProps) {
    return (
        <Box
            component="div"
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <Typography
                variant="h5"
                sx={{
                    color: "secondary.light",
                    fontWeight: 500,
                    fontSize: { xs: "1rem", md: "1.2rem" },
                }}
            >
                {title}
            </Typography>
            {children}
        </Box>
    );
}

export default CardContentHeading;

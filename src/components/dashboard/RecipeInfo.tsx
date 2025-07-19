import { Box, Typography } from "@mui/material";
import type { ReactNode } from "react";

type RecipeInfoProps = {
    title: string;
    icon: ReactNode;
};

function RecipeInfo({ title, icon }: RecipeInfoProps) {
    return (
        <Box
            component="div"
            sx={{
                display: "flex",
                alignItems: "center",
                gap: ".4rem",
                color: "secondary.light",
            }}
        >
            {icon}
            <Typography component="p">{title}</Typography>
        </Box>
    );
}

export default RecipeInfo;

import { Box, Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";
import RecipeInfoChip from "./RecipeInfoChip";
import type { TSedIngredient } from "../../types";
import { grey } from "@mui/material/colors";

type ingredientsListProps = {
    icon: ReactNode;
    title: string;
    list: TSedIngredient[];
    color: string;
    bgColor: string;
    borderColor: string;
};

function IngredientsList({
    icon,
    title,
    list,
    color,
    bgColor,
    borderColor,
}: ingredientsListProps) {
    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: ".5rem",
                    color,
                    marginBottom: ".6rem",
                }}
            >
                {icon}
                <Typography component="span">{title}</Typography>
            </Box>
            <Stack
                direction="row"
                spacing={0.5}
                useFlexGap
                sx={{
                    overflowX: "auto",
                    paddingBottom: ".5rem",
                    scrollbarWidth: { xs: "none", md: "thin" },
                    scrollbarColor: `${grey[400]} transparent`,
                }}
            >
                {list.map((ing: TSedIngredient) => (
                    <RecipeInfoChip
                        key={ing.id}
                        label={ing.name}
                        color={color}
                        bgColor={bgColor}
                        borderColor={borderColor}
                    />
                ))}
            </Stack>
        </Box>
    );
}

export default IngredientsList;

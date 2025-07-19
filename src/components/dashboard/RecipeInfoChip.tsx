import { Chip } from "@mui/material";
import { lightGreen } from "@mui/material/colors";

type RecipeInfoChipProps = {
    label: string;
    bgColor?: string;
    color?: string;
    borderColor?: string;
};

function RecipeInfoChip({
    label,
    bgColor,
    color,
    borderColor,
}: RecipeInfoChipProps) {
    return (
        <Chip
            label={label}
            sx={{
                backgroundColor: bgColor || lightGreen[100],
                color: color || lightGreen[900],
                border: `1px solid ${borderColor || lightGreen[200]}`,
                fontSize: ".8rem",
            }}
        />
    );
}

export default RecipeInfoChip;

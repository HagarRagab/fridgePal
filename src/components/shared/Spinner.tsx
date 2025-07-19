import { Box, CircularProgress, type SxProps } from "@mui/material";

type SpinnerProps = {
    size?: number;
    sx?: SxProps;
};

function Spinner({ size, sx }: SpinnerProps) {
    return (
        <Box
            component="div"
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                ...sx,
            }}
        >
            <CircularProgress size={size} />
        </Box>
    );
}

export default Spinner;

import { Box, CircularProgress, type SxProps } from "@mui/material";

type SpinnerProps = {
    size?: number;
    sx?: SxProps;
    ref?: (node?: Element | null | undefined) => void;
};

function Spinner({ size, sx, ref }: SpinnerProps) {
    return (
        <Box
            component="div"
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                ...sx,
            }}
            ref={ref}
        >
            <CircularProgress size={size} />
        </Box>
    );
}

export default Spinner;

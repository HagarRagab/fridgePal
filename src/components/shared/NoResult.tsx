import { Paper, Typography } from "@mui/material";
import KitchenIcon from "@mui/icons-material/Kitchen";

type NoResultProps = {
    title: string;
    subTitle: string;
};

function NoResult({ title, subTitle }: NoResultProps) {
    return (
        <Paper
            sx={{
                width: "100%",
                minHeight: 330,
                p: "1rem",
                borderRadius: "6px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "2rem",
            }}
        >
            <KitchenIcon
                sx={{
                    fill: "secondary.light",
                    fontSize: "4rem",
                    marginBottom: "1rem",
                }}
            />
            <Typography variant="h6" sx={{ color: "secondary.light" }}>
                {title}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "secondary.light" }}>
                {subTitle}
            </Typography>
        </Paper>
    );
}

export default NoResult;

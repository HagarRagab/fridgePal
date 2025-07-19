import { Typography } from "@mui/material";

type SectionTitleProps = {
    title: string;
    subTitle: string;
    color?: string;
};

function SectionTitle({ title, subTitle, color }: SectionTitleProps) {
    return (
        <>
            <Typography
                variant="h2"
                sx={{
                    color: color || "secondary.main",
                    fontSize: { xs: "1.8rem", md: "2.8rem" },
                    fontWeight: 500,
                }}
            >
                {title}
            </Typography>
            <Typography
                variant="subtitle1"
                sx={{
                    maxWidth: "50rem",
                    color: color || "secondary.light",
                    fontSize: "1.1rem",
                }}
            >
                {subTitle}
            </Typography>
        </>
    );
}

export default SectionTitle;

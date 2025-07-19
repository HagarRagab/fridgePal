import { Box, Typography } from "@mui/material";

type PageTitleProps = {
    title: string;
    subTitle: string;
};

function PageTitle({ title, subTitle }: PageTitleProps) {
    return (
        <Box component="header">
            <Typography
                variant="h1"
                sx={{
                    fontSize: { xs: "1.1rem", md: "1.4rem" },
                    fontWeight: 500,
                    color: "secondary.light",
                }}
            >
                {title}
            </Typography>
            <Typography
                variant="subtitle1"
                sx={{
                    marginTop: "2px",
                    fontSize: { xs: ".8rem", md: "1rem" },
                    color: "secondary.light",
                }}
            >
                {subTitle}
            </Typography>
        </Box>
    );
}

export default PageTitle;

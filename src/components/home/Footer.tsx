import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import { Box, Container, Typography } from "@mui/material";
import SocialMediaLink from "./SocialMediaLink";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <Box
            component="footer"
            sx={(theme) => ({
                background: `linear-gradient(100deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
                boxShadow: "1px 1px 8px 0px rgba(0, 0, 0, 0.15)",
            })}
        >
            <Container
                sx={{
                    p: "1.2rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1rem",
                }}
            >
                <Typography sx={{ color: "secondary.main" }}>
                    &copy;{currentYear} All rights reserved.
                </Typography>
                <Box
                    component="div"
                    sx={{ display: "flex", alignItems: "center", gap: ".6rem" }}
                >
                    <SocialMediaLink>
                        <FacebookIcon />
                    </SocialMediaLink>
                    <SocialMediaLink>
                        <InstagramIcon />
                    </SocialMediaLink>
                    <SocialMediaLink>
                        <XIcon />
                    </SocialMediaLink>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;
